import Image from 'next/image';
import React from 'react';

const Mentor = () => {
    return (
        <section id="mentor" className="py-20 px-4 md:px-10 bg-black/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
                <div className="text-center md:text-left">
                     <h2 className="text-4xl font-bold text-white">
                        <span className="text-base font-normal text-cyber-primary-dark block mb-2">MEET YOUR MENTOR</span>
                        A Moradabad Native&apos;s Mission to Empower Our City.
                    </h2>
                    <p className="text-lg text-gray-300 mt-6">
                        &ldquo;I grew up right here in Moradabad, went on to study at some of the world&apos;s top universities, and built a career in advanced technology. I&apos;ve seen what&apos;s possible. Now, I&apos;ve returned with a single mission: to bring that world-class knowledge back home and equip the youth of our city to compete on a global stage.&rdquo;
                    </p>
                    <div className="mt-8 border-l-4 border-cyber-primary pl-4">
                        <p className="font-bold text-white">Ph.D. in Console Engineering, Berlin</p>
                        <p className="font-bold text-white mt-2">M.Sc. in Computer Game Engineering, Newcastle University</p>
                        <p className="font-bold text-white mt-2">B.Tech. in Computer Science, DIT</p>
                    </div>
                </div>
                <div>
                    {/* Placeholder for your professional photo */}
                    <div className="relative w-full max-w-sm mx-auto h-96 bg-gray-900 border-4 border-cyber-primary rounded-lg shadow-[0_0_25px_rgba(255,213,0,0.5)]">
                         <Image 
                            src="/placeholder-mentor.png" // Create a placeholder image
                            alt="Photo of the Mentor"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md opacity-80"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                         <p className="absolute bottom-4 left-4 text-white text-2xl font-bold">Your Name Here</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentor;