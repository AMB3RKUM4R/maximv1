"use client";

import React from 'react';
import { CyberCard } from '../ui/CyberCard';
import Image from 'next/image';

const testimonials = [
    { name: 'Priya S.', role: 'B.Tech Student', quote: 'The hands-on approach is incredible. I built more in 5 days than I did in an entire semester of college. This is the future of tech education in India.', avatar: '/avatars/avatar1.png' },
    { name: 'Rohan K.', role: 'Aspiring Developer', quote: 'As someone from a non-CS background, I was intimidated. But the mentorship is top-notch. I finally have a portfolio that gets me interviews.', avatar: '/avatars/avatar2.png' },
    { name: 'Anjali M.', role: 'Recent Graduate', quote: 'The focus on real-world tools like Firebase and Vercel is exactly what companies are looking for. This workshop is a career supercharger.', avatar: '/avatars/avatar3.png' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Trusted by Aspiring Geniuses</h2>
            <p className="text-lg text-cyber-primary-dark mt-2">Hear from students who took the leap.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {testimonials.map(item => (
                <CyberCard key={item.name}>
                    <div className="flex flex-col h-full">
                        <p className="text-gray-300 italic flex-grow">&ldquo;{item.quote}&rdquo;</p>
                        <div className="flex items-center mt-6 pt-4 border-t border-gray-800">
                             <Image src={item.avatar} alt={item.name} width={40} height={40} className="rounded-full" />
                             <div className="ml-4">
                                <p className="font-bold text-white">{item.name}</p>
                                <p className="text-sm text-cyber-primary-dark">{item.role}</p>
                             </div>
                        </div>
                    </div>
                </CyberCard>
            ))}
        </div>
    </section>
  )
}

export default Testimonials