"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background-dark text-text-main-dark font-body overflow-x-hidden">
            <Navbar />

            <main className="flex-grow flex flex-col items-center relative w-full pt-16">
                {/* Radial gradient hero glow */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 70%)`
                    }}
                />
                {/* Soft dot-grid background */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle, #1E2340 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                    }}
                />

                <Hero />
                <Experience />
                <OpenSource />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
