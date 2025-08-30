"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { allTemplates, Template } from '@/constants/templates';
import Image from 'next/image';
import { Loader2, Zap } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

const ProjectCard = ({ project }: { project: Template }) => {
    const tierColor = project.title.includes('2.0') ? 'border-cyber-cyan/50' : 
                    project.title.includes('2.5') ? 'border-cyber-purple/50' : 'border-cyber-primary/50';

    return (
        <div className={`relative bg-black/80 backdrop-blur-md border-2 ${tierColor} rounded-lg p-4 group hover:border-cyber-primary transition-all duration-300 overflow-hidden flex flex-col`}>
            <div className="relative w-full h-48">
                 <Image
                    src={project.src}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x500/000000/FFD500?text=Project'; }}
                />
            </div>
            <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-1 text-sm flex-grow">{project.description}</p>
                <div className="flex items-center justify-end mt-4 text-cyber-primary-dark font-mono text-xs">
                    <Zap size={14} className="mr-1" />
                    Complexity Score: {project.tokenCost}
                </div>
            </div>
        </div>
    );
};

const InfiniteShowcase = () => {
    const [projects, setProjects] = useState<Template[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { ref, inView } = useInView();

    const loadMoreProjects = () => {
        const nextPage = page + 1;
        const newProjects = allTemplates.slice(0, nextPage * ITEMS_PER_PAGE);
        
        setProjects(newProjects);
        setPage(nextPage);

        if (newProjects.length >= allTemplates.length) {
            setHasMore(false);
        }
    };

    useEffect(() => {
        setProjects(allTemplates.slice(0, ITEMS_PER_PAGE));
    }, []);

    useEffect(() => {
        if (inView && hasMore) {
            setTimeout(loadMoreProjects, 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, hasMore]);

    return (
        <section id="infinite-showcase" className="py-20 px-4 md:px-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Explore Our Project Arsenal</h2>
                <p className="text-lg text-cyber-primary-dark mt-2">An ever-expanding gallery of real-world applications our students have mastered.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {hasMore && (
                <div ref={ref} className="flex justify-center items-center mt-12 p-4">
                    <Loader2 className="w-8 h-8 text-cyber-primary animate-spin" />
                    <p className="ml-3 text-cyber-primary-dark">Loading more projects...</p>
                </div>
            )}
        </section>
    );
};

export default InfiniteShowcase;