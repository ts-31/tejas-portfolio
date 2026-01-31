"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check local storage or system preference on mount if needed, or default to true as per component.
        // Preserving exact logic from App.tsx which defaults to true.
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body overflow-x-hidden">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow flex flex-col items-center relative w-full pt-16">
                {/* Background Grid Pattern */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none opacity-5 dark:opacity-20 transition-opacity duration-300"
                    style={{
                        backgroundImage: `linear-gradient(${isDark ? '#1a1a1a' : '#1F2937'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#1a1a1a' : '#1F2937'} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                <Hero isDark={isDark} />
                <Projects isDark={isDark} />
                <OpenSource isDark={isDark} />
                <Contact isDark={isDark} />
            </main>

            <Footer isDark={isDark} />
        </div>
    );
}
