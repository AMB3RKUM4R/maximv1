"use client";

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';
import Link from 'next/link';

const ServiceCTA = () => {
    return (
        <section id="contact-us" className="py-20 px-4 md:px-10">
            <div className="max-w-4xl mx-auto text-center bg-black/80 border-2 border-gray-800 rounded-2xl p-10 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <h2 className="text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    Whether you need a dynamic web app, a complex e-commerce solution, or a cutting-edge Web3 platform, our team has the expertise to bring your vision to life. Let&apos;s build something incredible together.
                </p>
                <Link href="mailto:your-email@example.com">
                     <CyberButton>
                        Get a Free Quote
                        <ArrowRight className="ml-2" />
                    </CyberButton>
                </Link>
            </div>
        </section>
    );
};

export default ServiceCTA;