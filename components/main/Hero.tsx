import React from 'react';
import { CyberButton } from '../ui/CyberButton';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen w-full text-center px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider font-mono">
                Are You India&apos;s
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-cyan animate-glitch-smooth">
                    Next Computer Genius?
                </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-cyber-primary-dark max-w-3xl">
                From Moradabad to the World Stage. A mission to find and empower the next generation of tech leaders. Now, it&apos;s your turn.
            </p>
            <Link href="/auth">
                <CyberButton className="mt-10">
                    Join for ₹49 & Take The Exam
                </CyberButton>
            </Link>
        </section>
    );
};

export default Hero;