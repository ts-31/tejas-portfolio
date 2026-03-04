import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://tejas-portfolio-live.vercel.app'),
    title: "Tejas Sonawane | Full Stack Developer",
    description: "Portfolio of Tejas Sonawane - Full Stack Developer, AI Enthusiast, & GSoC 2025 Contributor",
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.png', type: 'image/png', sizes: '32x32' },
        ],
        apple: '/apple-icon.png',
    },
    openGraph: {
        type: 'website',
        url: 'https://tejas-portfolio-live.vercel.app', // Update to intended Kuberns/Vercel standard URL
        title: 'Tejas Sonawane | Open Source Developer',
        description: 'GSoC 2025 Contributor & Full Stack Developer Portfolio',
        images: [
            {
                url: '/og-image.jpg', // Ensure og-image.jpg exists in /public
                width: 1200,
                height: 630,
                alt: 'Tejas Sonawane Portfolio',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tejas Sonawane | Software Developer',
        description: 'Explore my projects and open-source contributions.',
        images: ['/og-image.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased min-h-screen" suppressHydrationWarning>
                <main className="flex-grow">
                    {children}
                </main>
            </body>
        </html>
    );
}
