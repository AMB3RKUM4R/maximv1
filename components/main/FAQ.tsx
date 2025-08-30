"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    { q: "Who is eligible to join?", a: "Anyone from 11th standard students to B.Tech and other graduates can join. If you have a passion for technology, you are welcome here." },
    { q: "Is the ₹49 membership fee a one-time payment?", a: "Yes. It is a one-time fee for lifetime membership, which grants you access to our entrance exam, community, and the Learning Hub." },
    { q: "What happens if I don't score in the top 10?", a: "You still win! As a lifetime member, you can enroll in any of our premium workshops by paying the course fee. The exam is just one way to get a free seat." },
    { q: "Where in Moradabad are the workshops held?", a: "All in-person workshops are conducted in a premium 4-star hotel in Moradabad to provide a professional and immersive learning environment. The exact location is shared with enrolled students." },
    { q: "What kind of laptop do I need?", a: "Any modern laptop (Windows, Mac, or Linux) that can run a web browser like Google Chrome and a code editor like VS Code is sufficient. No high-end gaming specs are required for the Web 2.0 and 2.5 courses." },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 px-4 md:px-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-black/80 border-2 border-gray-800 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex justify-between items-center p-6 text-left"
                        >
                            <span className="text-lg font-semibold text-white">{item.q}</span>
                            <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-cyber-primary' : 'text-white'}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="px-6 pb-6 text-gray-400">
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;