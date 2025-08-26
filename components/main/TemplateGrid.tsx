"use client";

import React from 'react';
import TemplateCard from '../sub/TemplateCard';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define the shape of a single template object
interface Template {
    src: string;
    title: string;
    description: string;
    tokenCost: number;
}

// Define the props for the TemplateGrid component
interface TemplateGridProps {
    templates: Template[];
    title: string;
}

// Expanded placeholder data for 21 templates
const web2_templates: Template[] = [
    { src: '/FigmaClone.png', title: 'Web 2.0 Portfolio', description: 'A sleek, modern portfolio perfect for developers and designers.', tokenCost: 100 },
    { src: '/TravelWebsite.png', title: 'E-commerce Store', description: 'A feature-rich storefront with a clean user interface.', tokenCost: 150 },
    { src: '/YoutubeClone.png', title: 'SaaS Landing Page', description: 'Capture leads with this professional and engaging landing page.', tokenCost: 120 },
    { src: '/FigmaClone.png', title: 'Agency Website', description: 'Showcase your company\'s services and projects.', tokenCost: 200 },
    { src: '/TravelWebsite.png', title: 'Blog Platform', description: 'A content-focused design for writers and publishers.', tokenCost: 80 },
    { src: '/YoutubeClone.png', title: 'Mobile App Showcase', description: 'A dedicated page to highlight your mobile application.', tokenCost: 90 },
    { src: '/FigmaClone.png', title: 'Creative Studio', description: 'A visually-driven site for creative agencies.', tokenCost: 110 },
    { src: '/TravelWebsite.png', title: 'Restaurant Booking', description: 'An elegant solution for online reservations and menus.', tokenCost: 130 },
    { src: '/YoutubeClone.png', title: 'Online Course Hub', description: 'Platform to host and sell educational content.', tokenCost: 180 },
    { src: '/FigmaClone.png', title: 'Real Estate Listings', description: 'A professional site for property listings.', tokenCost: 160 },
    { src: '/TravelWebsite.png', title: 'Fitness & Wellness', description: 'Engaging design for gyms, trainers, and wellness coaches.', tokenCost: 95 },
    { src: '/YoutubeClone.png', title: 'Digital Magazine', description: 'A modern layout for online publications.', tokenCost: 85 },
    { src: '/FigmaClone.png', title: 'Corporate Site', description: 'A clean and professional template for businesses.', tokenCost: 140 },
    { src: '/TravelWebsite.png', title: 'Travel Blog', description: 'Share your adventures with this stunning travel blog template.', tokenCost: 75 },
    { src: '/YoutubeClone.png', title: 'Podcast Platform', description: 'Showcase your podcast with episode lists and player integration.', tokenCost: 105 },
    { src: '/FigmaClone.png', title: 'Startup Landing Page', description: 'A compelling page to attract investors and early users.', tokenCost: 125 },
    { src: '/TravelWebsite.png', title: 'Event Promotion', description: 'Promote your conference or event with a dedicated site.', tokenCost: 115 },
    { src: '/YoutubeClone.png', title: 'Photography Portfolio', description: 'A beautiful, image-focused portfolio for photographers.', tokenCost: 135 },
    { src: '/FigmaClone.png', title: 'Non-Profit Organization', description: 'A template to drive donations and awareness for a cause.', tokenCost: 90 },
    { src: '/TravelWebsite.png', title: 'Musician/Band Page', description: 'Promote your music, tour dates, and merchandise.', tokenCost: 100 },
    { src: '/YoutubeClone.png', title: 'Community Forum', description: 'A template for building an online community forum.', tokenCost: 170 },
];


const TemplateGrid = ({ templates, title }: TemplateGridProps) => {
    const { scrollYProgress } = useScroll();
    
    // Create a parallax effect by moving columns at different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Dynamically split the templates into three columns
    const itemsPerColumn = Math.ceil(templates.length / 3);
    const columns = [
        { y: y1, templates: templates.slice(0, itemsPerColumn) },
        { y: y2, templates: templates.slice(itemsPerColumn, itemsPerColumn * 2) },
        { y: y3, templates: templates.slice(itemsPerColumn * 2) }
    ];

    return (
        <section className='relative w-full py-24 px-4 md:px-10' id="web2.0">
             <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20 text-center'>
                {title}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {columns.map((col, colIndex) => (
                    <motion.div
                        key={colIndex}
                        style={{ y: col.y }}
                        className='flex flex-col gap-8'
                    >
                        {col.templates.map((template, index) => (
                            <TemplateCard
                                key={index}
                                src={template.src}
                                title={template.title}
                                description={template.description}
                                tokenCost={template.tokenCost}
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// We can now export the data to be used in the main page
export { web2_templates };
export default TemplateGrid;
