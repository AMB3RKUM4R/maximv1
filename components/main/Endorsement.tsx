import Image from 'next/image';
import React from 'react';

const Endorsement = () => {
    return (
        <section id="support" className="py-20 px-4 md:px-10">
            <div className="max-w-4xl mx-auto bg-black/80 border-2 border-gray-800 rounded-lg flex flex-col md:flex-row items-center gap-8 p-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyber-primary flex-shrink-0">
                    <Image
                        src="/placeholder-celebrity.png"
                        alt="Nona Berry"
                        fill={true} // Corrected
                        className="object-cover rounded-full" // Corrected
                    />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white">A Message of Support</h3>
                    <p className="text-lg text-gray-300 mt-4 italic">
                        &ldquo;My brother is bringing back world-class knowledge to the city that made us. This is a golden opportunity for the youth of Moradabad to build their own success stories. I am proud to support his mission.&rdquo;
                    </p>
                    <p className="text-right font-bold text-cyber-primary mt-4">- Nona Berry</p>
                </div>
            </div>
        </section>
    );
};

export default Endorsement;