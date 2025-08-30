import React from 'react';
import { Award } from 'lucide-react';

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 md:px-10 bg-black/50">
            <div className="text-center max-w-3xl mx-auto">
                <Award size={48} className="mx-auto text-cyber-primary mb-4" />
                <h2 className="text-4xl font-bold text-white">A Premium, World-Class Experience</h2>
                <p className="text-lg text-gray-300 mt-4">This isn&apos;t just another class. It&apos;s a high-impact, immersive workshop conducted in a professional, 4-star hotel environment to give you the feel of a real-world tech conference.</p>
            </div>
        </section>
    );
}

export default Experience;