import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#6366F1",
                "primary-light": "#A5B4FC",
                "background-dark": "#080B14",
                "card-dark": "#0E1120",
                "border-subtle": "#1E2340",
                "text-main-dark": "#E2E8F0",
                "text-muted-dark": "#8892B0",
            },
            fontFamily: {
                "display": ["Syne", "sans-serif"],
                "body": ["Space Grotesk", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
            },
            boxShadow: {
                "glow": "0 4px 24px rgba(99,102,241,0.12)",
                "glow-hover": "0 8px 32px rgba(99,102,241,0.2)",
                "card": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
                "card-hover": "0 8px 32px rgba(99,102,241,0.12), 0 2px 8px rgba(0,0,0,0.3)",
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/forms'),
    ],
};
export default config;
