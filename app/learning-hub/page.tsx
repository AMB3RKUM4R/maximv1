import React from 'react';
import { CyberCard } from '@/components/ui/CyberCard';
import { PlayCircle, Mic, BookOpen } from 'lucide-react';

const LearningHubPage = () => {

    const tutorials = [
        { title: 'Frontend Foundations', desc: 'Master HTML, CSS, and modern JavaScript.', icon: <BookOpen/> },
        { title: 'React Deep Dive', desc: 'From components and hooks to state management.', icon: <BookOpen/> },
        { title: 'Backend with Firebase', desc: 'Learn to build powerful serverless backends.', icon: <BookOpen/> },
        { title: 'Intro to Game Dev', desc: 'The basics of building interactive experiences.', icon: <BookOpen/>, status: 'Coming Soon' },
    ];

    const channels = [
        { title: 'Fireship.io', desc: 'High-intensity code tutorials for developers.', icon: <PlayCircle/> },
        { title: 'The Net Ninja', desc: 'Black-belt training for web developers.', icon: <PlayCircle/> },
        { title: 'Web Dev Simplified', desc: 'Making the web easy to understand for everyone.', icon: <PlayCircle/> },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white">The Learning Hub</h1>
                    <p className="text-lg text-cyber-primary-dark mt-4">Your lifetime access to our exclusive tutorials, workshops, and recommended resources.</p>
                </div>

                {/* Tutorials Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Tutorial Series</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tutorials.map(item => (
                            <CyberCard key={item.title}>
                                <div className="flex items-center gap-6">
                                    <div className="text-cyber-cyan">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                     {item.status && <span className="ml-auto text-xs bg-cyber-primary text-black font-bold px-2 py-1 rounded">{item.status}</span>}
                                </div>
                            </CyberCard>
                        ))}
                    </div>
                </div>

                 {/* Channels Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-white mb-8">Recommended Channels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {channels.map(item => (
                            <CyberCard key={item.title}>
                                <div className="flex items-center gap-6">
                                    <div className="text-cyber-cyan">{item.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            </CyberCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningHubPage;