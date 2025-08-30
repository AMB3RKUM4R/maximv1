import React from 'react';
import { Code, Smartphone, Rocket } from 'lucide-react';
import { CyberCard } from '../ui/CyberCard';
import Link from 'next/link';

interface WorkshopCardContentProps {
    icon: React.ReactNode;
    title: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
}

const WorkshopCardContent = ({ icon, title, price, description, features, popular }: WorkshopCardContentProps) => (
    <div className="flex flex-col h-full">
         {popular && <div className="absolute top-0 right-8 -mt-4 px-3 py-1 bg-cyber-primary text-cyber-bg text-sm font-bold rounded-full z-10">MOST POPULAR</div>}
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-4xl font-bold text-cyber-primary mb-4">{price}<span className="text-lg text-gray-400">/ one-time</span></p>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <ul className="space-y-3 mb-8 text-gray-300">
            {features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                    <span className="text-cyber-primary">✓</span> {feature}
                </li>
            ))}
        </ul>
        <Link href="/auth" className="mt-auto w-full py-3 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-700 hover:bg-cyber-primary hover:text-cyber-bg hover:border-cyber-primary transition-all duration-300 text-center">
            Register Now
        </Link>
    </div>
);

const Workshops = () => {
    // ... (rest of the component is the same)
    return (
        <section id="workshops" className="py-20 px-4 md:px-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">The Workshops: Your Launchpad</h2>
                <p className="text-lg text-cyber-primary-dark mt-2">Choose your mission. Master the skills. Build your future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                <CyberCard>
                    <WorkshopCardContent 
                        icon={<Code size={40} className="text-cyber-primary" />}
                        title="Web 2.0 Foundation"
                        price="₹499"
                        description="Master the fundamentals and build beautiful, responsive websites for portfolios and small businesses."
                        features={["Static Site Development", "Modern UI/UX Design", "Responsive for All Devices", "Free Hosting on Vercel"]}
                        popular={false}
                    />
                </CyberCard>
                <CyberCard>
                     <WorkshopCardContent 
                        icon={<Smartphone size={40} className="text-cyber-primary" />}
                        title="Web 2.5 Advanced Apps"
                        price="₹999"
                        description="Go beyond static sites. Build dynamic web applications with user authentication and payment integrations."
                        features={["User Login & Auth", "UPI & PayPal Payments", "Firebase Backend", "Interactive UI/UX"]}
                        popular={true}
                    />
                </CyberCard>
                <CyberCard>
                    <WorkshopCardContent 
                        icon={<Rocket size={40} className="text-cyber-primary" />}
                        title="Web 3.0 & Games"
                        price="₹1499"
                        description="Enter the next frontier. Learn the basics of game development and Web 3.0 technologies."
                        features={["Intro to Game Engines", "Next.js 14 & Vite", "Web 3.0 Concepts", "Advanced Project Deployment"]}
                        popular={false}
                    />
                </CyberCard>
            </div>
        </section>
    );
};

export default Workshops;