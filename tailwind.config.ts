import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary": "#39FF14",
                "primary-dark": "#2eb812",
                "background-light": "#f6f8f5",
                "background-dark": "#050505",
                "terminal-light": "#F3F4F6",
                "terminal-dark": "#0c0c0c",
                "card-light": "#FFFFFF",
                "card-dark": "#050505",
                "text-main-light": "#1F2937",
                "text-main-dark": "#f1f5f9",
                "text-muted-light": "#4B5563",
                "text-muted-dark": "#94a3b8",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Space Grotesk", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
                "silkscreen": ["Silkscreen", "cursive"],
                "switzer": ["Switzer", "sans-serif"],
            },
            boxShadow: {
                "neon": "0 0 10px rgba(57, 255, 20, 0.4), 0 0 20px rgba(57, 255, 20, 0.2)",
                "neon-hover": "0 0 15px rgba(57, 255, 20, 0.6), 0 0 30px rgba(57, 255, 20, 0.3)",
                "neon-text": "0 0 8px rgba(57, 255, 20, 0.6)",
                "card": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            },
            animation: {
                'blink': 'blink 0.8s step-end infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
    ],
};
export default config;
