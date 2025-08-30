"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { CyberButton } from '../ui/CyberButton';
import Link from 'next/link';

const slides = [
    { src: '/bg1.jpg', alt: 'Futuristic code background' },
    { src: '/bg5.jpg', alt: 'Abstract technology network' },
    { src: '/bg10.jpg', alt: 'Digital circuit board' },
    { src: '/bg15.jpg', alt: 'Glowing data streams' },
];

const HeroSlider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <section className="relative h-screen w-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
                {slides.map((slide, index) => (
                    <div className="relative flex-[0_0_100%] h-full" key={index}>
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            layout="fill"
                            objectFit="cover"
                            className="opacity-40"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 bg-black/50">
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
            </div>
        </section>
    );
};

export default HeroSlider;