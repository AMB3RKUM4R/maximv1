"use client";

import React from 'react';
import Image from 'next/image';
import { Coins, Brush, ArrowLeft } from 'lucide-react';
import { allTemplates } from '@/constants/templates'; // Import from the centralized data source
import Link from 'next/link';

// Updated function to get template data from the centralized array
const getTemplateData = (slug: string) => {
    return allTemplates.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === slug);
};

const TemplateDetailPage = ({ params }: { params: { slug: string } }) => {
    const template = getTemplateData(params.slug);

    if (!template) {
        return <div className="text-white text-center py-20">Template not found.</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto py-16 px-4 md:px-10 text-white">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                Back to Templates
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-[#2A0E61]">
                        <Image
                            src={template.src}
                            alt={template.title}
                            layout="fill"
                            objectFit="cover"
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800/030014/94a3b8?text=Template'; }}
                        />
                    </div>
                </div>

                {/* Details and Actions */}
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
                    <p className="text-gray-300 mb-8 text-lg">
                        {template.description} This is an extended description providing more details about the template's features, ideal use cases, and the technology stack it's built on.
                    </p>

                    <div className="mt-auto pt-8">
                         <div className="flex justify-between items-center">
                            <button className='flex items-center gap-2 py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-base'>
                                <Coins className='h-6 w-6' />
                                {`Buy Now (${template.tokenCost} MAXIM)`}
                            </button>
                            <button
                                className='flex items-center gap-2 py-3 px-6 bg-gray-700 cursor-not-allowed text-gray-400 rounded-lg text-base'
                                disabled={true}
                                title="Purchase template to customize"
                            >
                                <Brush className='h-6 w-6' />
                                Customize
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateDetailPage;
