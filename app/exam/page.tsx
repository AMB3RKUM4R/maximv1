"use client";

import React, { useState } from 'react';
import { CyberCard } from '@/components/ui/CyberCard';
import { Code, Smartphone, Rocket } from 'lucide-react';
import { web2_5_questions, web2_questions, web3_questions } from '@/constants/mock-test';
import MockTest from '@/components/main/MockTest';

type TestSelection = 'Web 2.0' | 'Web 2.5' | 'Web 3.0' | null;

// Define the types for the TestCard's props
interface TestCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const ExamPage = () => {
    const [selectedTest, setSelectedTest] = useState<TestSelection>(null);

    const renderTest = () => {
        switch(selectedTest) {
            case 'Web 2.0':
                return <MockTest questions={web2_questions} testName="Web 2.0" />;
            case 'Web 2.5':
                return <MockTest questions={web2_5_questions} testName="Web 2.5" />;
            case 'Web 3.0':
                return <MockTest questions={web3_questions} testName="Web 3.0" />;
            default:
                return null;
        }
    };

    if (selectedTest) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                {renderTest()}
                <button 
                    onClick={() => setSelectedTest(null)}
                    className="mt-8 text-gray-400 hover:text-cyber-primary"
                >
                    &larr; Back to Test Selection
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                 <h1 className="text-5xl font-bold text-white">Entrance Exam Hub</h1>
                 <p className="text-lg text-cyber-primary-dark mt-4">Select a test to prove your skills. Only your first score for the official entrance exam counts!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <button onClick={() => setSelectedTest('Web 2.0')}><CyberCard><TestCard icon={<Code size={40} />} title="Web 2.0 Test" desc="Test your fundamental web knowledge." /></CyberCard></button>
                <button onClick={() => setSelectedTest('Web 2.5')}><CyberCard><TestCard icon={<Smartphone size={40} />} title="Web 2.5 Test" desc="Test your knowledge of apps & backends." /></CyberCard></button>
                <button onClick={() => setSelectedTest('Web 3.0')}><CyberCard><TestCard icon={<Rocket size={40} />} title="Web 3.0 Test" desc="Test your knowledge of decentralized tech." /></CyberCard></button>
            </div>
        </div>
    );
};

// Apply the TestCardProps interface to the component
const TestCard = ({ icon, title, desc }: TestCardProps) => (
    <div className="p-8 text-center h-full">
        <div className="text-cyber-primary mx-auto w-fit mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
    </div>
);

export default ExamPage;