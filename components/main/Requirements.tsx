import React from 'react';
import { Laptop, BookOpen } from 'lucide-react';

export const Requirements = () => {
    return (
        <section id="requirements" className="py-20 px-4 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-4xl font-bold text-white mb-8">What You&apos;ll Need</h2>
                 <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="text-center">
                        <Laptop size={40} className="mx-auto text-cyber-primary mb-2"/>
                        <h3 className="text-xl font-bold text-white">Your Own Laptop</h3>
                        <p className="text-gray-400">A laptop is mandatory for the hands-on sessions.</p>
                    </div>
                     <div className="text-center">
                        <BookOpen size={40} className="mx-auto text-cyber-primary mb-2"/>
                        <h3 className="text-xl font-bold text-white">Basic English</h3>
                        <p className="text-gray-400">A minimum understanding of English is required.</p>
                    </div>
                 </div>
            </div>
        </section>
    );
}

export default Requirements;