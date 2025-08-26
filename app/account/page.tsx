"use client"; // Add this directive

import React from 'react';
import { Cog, Globe } from 'lucide-react';
import Image from 'next/image';

// Placeholder data for the user's purchased websites
const purchasedWebsites = [
    {
        id: '1',
        name: 'My Modern Portfolio',
        templateTitle: 'Web 2.0 Portfolio',
        status: 'Live',
        url: 'https://my-portfolio.maxim.app',
        thumbnail: '/FigmaClone.png',
    },
    {
        id: '2',
        name: 'My SaaS Project',
        templateTitle: 'SaaS Landing Page',
        status: 'In Progress',
        url: 'https://my-saas.maxim.app',
        thumbnail: '/YoutubeClone.png',
    },
    {
        id: '3',
        name: 'My E-commerce Store',
        templateTitle: 'E-commerce Store',
        status: 'Live',
        url: 'https://my-store.maxim.app',
        thumbnail: '/TravelWebsite.png',
    },
];

const AccountPage = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-4 md:px-10">
            <h1 className="text-4xl font-semibold text-white mb-4">My Websites</h1>
            <p className="text-lg text-gray-400 mb-12">
                Manage your purchased and customized website templates.
            </p>

            <div className="space-y-6">
                {purchasedWebsites.map((site) => (
                    <div
                        key={site.id}
                        className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg border border-[#2A0E61] bg-[#0300145e] shadow-lg transition-all hover:shadow-purple-500/20"
                    >
                        <div className="flex items-center gap-6 mb-4 md:mb-0">
                            <Image
                                src={site.thumbnail}
                                alt={site.name}
                                width={100}
                                height={100}
                                className="rounded-md object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/030014/94a3b8?text=Thumb'; }}
                            />
                            <div>
                                <h2 className="text-xl font-bold text-white">{site.name}</h2>
                                <p className="text-sm text-gray-400">Based on: {site.templateTitle}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`h-2 w-2 rounded-full ${site.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                    <span className="text-xs text-gray-300">{site.status}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-2 px-4 bg-transparent border border-gray-500 text-white cursor-pointer rounded-lg text-sm hover:bg-gray-800 transition-colors"
                            >
                                <Globe className="h-4 w-4" />
                                Visit
                            </a>
                            <button className="flex items-center gap-2 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg text-sm">
                                <Cog className="h-4 w-4" />
                                Manage
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountPage;
