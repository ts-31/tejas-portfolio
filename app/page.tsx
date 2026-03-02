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
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background-dark text-text-main-dark font-body overflow-x-hidden dark">
            <Navbar />

            <main className="flex-grow flex flex-col items-center relative w-full pt-16">
                {/* Background Grid Pattern */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none opacity-20 transition-opacity duration-300"
                    style={{
                        backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

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
