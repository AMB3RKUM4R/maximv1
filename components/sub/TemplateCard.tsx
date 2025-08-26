"use client";

import Image from 'next/image';
import React from 'react';
import { Coins, Brush } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
    src: string;
    title: string;
    description: string;
    tokenCost: number;
}

const TemplateCard = ({ src, title, description, tokenCost }: Props) => {
    const hasTokens = false;
    // Creates a URL-friendly slug from the template title (e.g., "Web 2.0 Portfolio" -> "web-2.0-portfolio")
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        // The entire card is wrapped in a Link component to navigate to the dynamic description page
        <Link href={`/template/${slug}`} passHref>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] flex flex-col h-full cursor-pointer hover:border-purple-500 transition-colors'
            >
                <div className='relative w-full h-60'>
                    <Image
                        src={src}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full'
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1000x1000/030014/94a3b8?text=Template'; }}
                    />
                </div>
                <div className='relative p-4 flex flex-col flex-grow'>
                    <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                    <p className='mt-2 text-gray-300 text-sm flex-grow'>{description}</p>
                    <div className='mt-4 flex justify-between items-center'>
                        <div className='flex items-center gap-2 text-white'>
                            <Coins className='h-5 w-5 text-yellow-400' />
                            <span>{tokenCost}</span>
                        </div>
                        <div className='text-sm text-purple-400 font-semibold'>
                            View Details
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default TemplateCard;
