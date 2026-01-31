import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/ts-31', {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'GitHub API returned an error' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in GitHub API proxy:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
