"use client";

import React from 'react';
import { Template } from '@/constants/templates';
import { CyberCard } from '../ui/CyberCard';
import Link from 'next/link';
import Image from 'next/image';
import { Zap } from 'lucide-react';

interface TemplateGridProps {
    templates: Template[];
    title: string;
}

const TemplateDisplayCard = ({ template }: { template: Template }) => {
    const slug = template.title.toLowerCase().replace(/\s+/g, '-');

    return (
        <Link href={`/project/${slug}`}>
            <CyberCard>
                <div className="flex flex-col h-full">
                    <div className="relative w-full h-48 mb-4">
                         <Image
                            src={template.src}
                            alt={template.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x500/000000/FFD500?text=Project'; }}
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white">{template.title}</h3>
                    <p className="text-gray-400 mt-1 text-sm flex-grow">{template.description}</p>
                    <div className="flex items-center justify-end mt-4 text-cyber-primary-dark font-mono text-xs">
                        <Zap size={14} className="mr-1" />
                        Complexity Score: {template.tokenCost}
                    </div>
                </div>
            </CyberCard>
        </Link>
    );
};

const TemplateGrid = ({ templates, title }: TemplateGridProps) => {
    return (
        <section className='relative w-full py-20 px-4 md:px-10'>
             <h2 className='text-4xl font-bold text-white pb-16 text-center'>
                {title}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {templates.map((template, index) => (
                    <TemplateDisplayCard key={index} template={template} />
                ))}
            </div>
        </section>
    );
};

export default TemplateGrid;