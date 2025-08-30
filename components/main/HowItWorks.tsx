import React from 'react';
import { Key, PenTool, Award, GraduationCap } from 'lucide-react';

// Define the types for the StepCard component's props
interface StepCardProps {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
}

const StepCard = ({ icon, step, title, description }: StepCardProps) => (
    <div className="bg-black/80 border-2 border-gray-800 p-6 rounded-lg text-center h-full">
        <div className="flex justify-center mb-4">{icon}</div>
        <p className="text-cyber-primary font-mono mb-2">{step}</p>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 px-4 md:px-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">Your Journey Starts Here</h2>
                <p className="text-lg text-cyber-primary-dark mt-2">A simple path to unlock your potential.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <StepCard
                    icon={<Key size={40} className="text-cyber-primary" />}
                    step="STEP 01"
                    title="Get Lifetime Membership"
                    description="Pay a one-time fee of ₹49 to get lifetime access to our platform and the entrance exam."
                />
                <StepCard
                    icon={<PenTool size={40} className="text-cyber-primary" />}
                    step="STEP 02"
                    title="Take The Online Exam"
                    description="Test your logic and aptitude skills in our online challenge to prove you have what it takes."
                />
                <StepCard
                    icon={<Award size={40} className="text-cyber-primary" />}
                    step="STEP 03"
                    title="Winners Train For Free"
                    description="The top 10 scorers from the exam will win a free seat in the workshop of their choice."
                />
                <StepCard
                    icon={<GraduationCap size={40} className="text-cyber-primary" />}
                    step="STEP 04"
                    title="Join The Workshops"
                    description="All members can enroll in our premium workshops by paying the specific course fees."
                />
            </div>
        </section>
    );
};

export default HowItWorks;