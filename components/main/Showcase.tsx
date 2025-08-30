import Image from 'next/image';
import React from 'react';

const projects = [
    { src: '/FigmaClone.png', title: 'Collaborative Design Tool', description: 'A real-time design app, similar to Figma.' },
    { src: '/TravelWebsite.png', title: 'Dynamic Travel Site', description: 'A beautiful, interactive website for travel booking.' },
    { src: '/YoutubeClone.png', title: 'Video Streaming Platform', description: 'A clone of a modern video platform with core features.' },
];

const Showcase = () => {
    return (
        <section id="showcase" className="py-20 px-4 md:px-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">What You Will Build</h2>
                <p className="text-lg text-cyber-primary-dark mt-2">These aren&apos;t tutorials. These are real, world-class applications you will build from scratch.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="relative bg-black/80 backdrop-blur-md border-2 border-gray-800 rounded-lg p-4 group hover:border-cyber-primary transition-all duration-300 overflow-hidden">
                        <Image 
                            src={project.src} 
                            alt={project.title}
                            width={1000}
                            height={1000}
                            className="rounded-md w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-400 mt-1">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;