"use client";

import React, { useState } from 'react';
import { User, ShieldCheck, BookOpen, Star, Award } from 'lucide-react';
import { CyberCard } from '@/components/ui/CyberCard';
import Link from 'next/link';

// --- Type Definitions to fix TypeScript errors ---
interface Workshop {
    id: string;
    title: string;
    status: string;
}

interface UserData {
    name: string;
    email: string;
    examStatus: string;
    examScore: string | null; // Allows for both string and null
    isWinner: boolean;
    enrolledWorkshops: Workshop[]; // Defines the array type
}
// --- End Type Definitions ---


// --- Demo Data Scenarios ---
const newUser: UserData = {
    name: 'Aspirant Genius',
    email: 'new.user@example.com',
    examStatus: 'Not Taken Yet',
    examScore: null,
    isWinner: false,
    enrolledWorkshops: [],
};

const winnerUser: UserData = {
    name: 'Top Scorer',
    email: 'winner@example.com',
    examStatus: 'Completed',
    examScore: '98%',
    isWinner: true,
    enrolledWorkshops: [
        { id: 'w3', title: 'Web 3.0 & Games', status: 'WINNER - FREE ACCESS' }
    ],
};

const enrolledUser: UserData = {
    name: 'Dedicated Learner',
    email: 'learner@example.com',
    examStatus: 'Completed',
    examScore: '82%',
    isWinner: false,
    enrolledWorkshops: [
        { id: 'w2', title: 'Web 2.0 Foundation', status: 'ENROLLED' },
        { id: 'w25', title: 'Web 2.5 Advanced Apps', status: 'ENROLLED' },
    ],
};
// --- End Demo Data ---


const AccountPage = () => {
    // Apply the flexible UserData type to the state
    const [userData, setUserData] = useState<UserData>(newUser);

    // A sub-component for displaying an enrolled workshop "pass"
    // Apply the Workshop type to the props
    const WorkshopPass = ({ workshop }: { workshop: Workshop }) => (
        <div className="flex items-center justify-between bg-gray-900/50 p-4 rounded-md border border-gray-700">
            <div>
                <p className="font-bold text-white">{workshop.title}</p>
                <p className={`text-sm font-semibold ${workshop.status.includes('WINNER') ? 'text-cyber-primary' : 'text-cyber-cyan'}`}>
                    {workshop.status}
                </p>
            </div>
            <button className="px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
                View Content
            </button>
        </div>
    );

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">

            {/* --- Demo Controls (for demonstration purposes only) --- */}
            <div className="absolute top-24 left-4 z-50 flex gap-2 p-2 bg-black/50 border border-gray-800 rounded-md">
                <span className="text-xs text-gray-400 self-center">Demo Views:</span>
                <button onClick={() => setUserData(newUser)} className="text-xs px-2 py-1 bg-gray-700 rounded hover:bg-cyber-primary hover:text-black">New User</button>
                <button onClick={() => setUserData(winnerUser)} className="text-xs px-2 py-1 bg-gray-700 rounded hover:bg-cyber-primary hover:text-black">Winner</button>
                <button onClick={() => setUserData(enrolledUser)} className="text-xs px-2 py-1 bg-gray-700 rounded hover:bg-cyber-primary hover:text-black">Enrolled</button>
            </div>
            {/* --- End Demo Controls --- */}

            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                    <div className="p-4 bg-cyber-purple/20 border-2 border-cyber-purple rounded-full">
                        <User size={40} className="text-cyber-purple" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">Welcome, {userData.name}</h1>
                        <p className="text-gray-400">{userData.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Your Status Card */}
                    <CyberCard>
                        <h2 className="text-2xl font-bold text-white mb-6">Your Status</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={24} className="text-cyber-primary" />
                                <div>
                                    <p className="font-bold text-white">Lifetime Member</p>
                                    <p className="text-sm text-gray-400">Your access never expires.</p>
                                </div>
                            </div>
                            
                            {/* Dynamic Exam Status Section */}
                            <div className="flex items-center gap-4">
                                <Star size={24} className={userData.examScore ? 'text-cyber-primary' : 'text-gray-600'} />
                                <div>
                                    <p className="font-bold text-white">Entrance Exam</p>
                                    <p className="text-sm text-gray-400">Status: <span className="font-semibold text-cyber-cyan">{userData.examStatus}</span></p>
                                    {userData.examScore && <p className="text-sm text-gray-400">Score: <span className="font-semibold text-cyber-cyan">{userData.examScore}</span></p>}
                                </div>
                            </div>

                            {/* Dynamic CTA based on user status */}
                            {userData.examStatus === 'Not Taken Yet' && (
                                <Link href="/exam">
                                    <button className="w-full mt-4 py-3 bg-cyber-primary text-cyber-bg font-bold rounded-md hover:bg-cyber-primary/80 transition-colors">
                                        Take the Exam Now
                                    </button>
                                </Link>
                            )}

                            {userData.isWinner && (
                                <div className="bg-cyber-primary/10 border border-cyber-primary p-4 rounded-md flex items-center gap-4">
                                    <Award size={32} className="text-cyber-primary" />
                                    <div>
                                        <h3 className="font-bold text-cyber-primary">Congratulations! You are a Top 10 Scorer!</h3>
                                        <p className="text-sm text-gray-300">You have won free access to one workshop.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CyberCard>

                    {/* Enrolled Workshops Card */}
                     <CyberCard>
                        <h2 className="text-2xl font-bold text-white mb-6">Enrolled Workshops</h2>
                        {userData.enrolledWorkshops.length === 0 ? (
                             <div className="text-center py-8 flex flex-col items-center justify-center h-full">
                                <BookOpen size={40} className="mx-auto text-gray-600"/>
                                <p className="mt-4 text-gray-400">You are not enrolled in any workshops yet.</p>
                                <Link href="/#workshops">
                                    <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-bold rounded-md hover:bg-cyber-primary hover:text-cyber-bg transition-colors">
                                        Explore Workshops
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {userData.enrolledWorkshops.map((workshop) => (
                                    <WorkshopPass key={workshop.id} workshop={workshop} />
                                ))}
                            </div>
                        )}
                    </CyberCard>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;