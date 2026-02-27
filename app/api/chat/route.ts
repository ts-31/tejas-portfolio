import { GoogleGenAI } from '@google/genai';
import { tejasContext } from '@/lib/tejas-context';

export async function POST(req: Request) {
    try {
        const { messages, userMessage } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: "Missing Gemini API Key." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        const ai = new GoogleGenAI({ apiKey });

        // Provide context and the current user message
        const prompt = `${tejasContext}\n\nRecent Chat History:\n${JSON.stringify(messages || [])}\n\nUser Question:\n${userMessage}`;

        const responseStream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of responseStream) {
                        if (chunk.text) {
                            controller.enqueue(encoder.encode(chunk.text));
                        }
                    }
                    controller.close();
                } catch (streamError) {
                    console.error("Error while streaming:", streamError);
                    controller.error(streamError);
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            }
        });
    } catch (error) {
        console.error('Gemini API Error:', error);
        return new Response(JSON.stringify({ error: "Failed to fetch response." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
