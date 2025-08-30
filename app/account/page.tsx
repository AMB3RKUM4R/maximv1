"use client";

import React from 'react';
import { User, ShieldCheck, BookOpen, Star, Award, PenTool, GraduationCap } from 'lucide-react';
import { CyberCard } from '@/components/ui/CyberCard';
import Link from 'next/link';
import { useTestResults } from '../context/TestResultsContext';
import { useAuth } from '../hooks/useAuth';

const AccountPage = () => {
    const { results } = useTestResults();
    const { user } = useAuth();

    const TestResultDisplay = ({ testName }: { testName: 'Web 2.0' | 'Web 2.5' | 'Web 3.0' }) => {
        const result = results[testName];
        if (!result) {
            return <p className="text-sm text-gray-500">Status: Not Taken Yet</p>;
        }
        const percentage = Math.round((result.score / result.total) * 100);
        return <p className="text-sm text-gray-400">Score: <span className="font-semibold text-cyber-cyan">{percentage}%</span> ({result.score}/{result.total})</p>;
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-6 mb-12">
                     <div className="p-4 bg-cyber-purple/20 border-2 border-cyber-purple rounded-full">
                        <User size={40} className="text-cyber-purple" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">Welcome, {user?.displayName || user?.email}</h1>
                        <p className="text-gray-400">{user?.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Your Status Card */}
                    <CyberCard>
                        {/* This is the correct way to write a multi-line comment in JSX.
                            The content for the status card remains the same.
                        */}
                         <h2 className="text-2xl font-bold text-white mb-6">Your Status</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={24} className="text-cyber-primary" />
                                <div>
                                    <p className="font-bold text-white">Lifetime Member</p>
                                    <p className="text-sm text-gray-400">Your access never expires.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <PenTool size={24} className={Object.keys(results).length > 0 ? 'text-cyber-primary' : 'text-gray-600'} />
                                <div className="w-full">
                                    <p className="font-bold text-white">Mock Test Results</p>
                                    <TestResultDisplay testName="Web 2.0" />
                                    <TestResultDisplay testName="Web 2.5" />
                                    <TestResultDisplay testName="Web 3.0" />
                                    <Link href="/exam">
                                         <button className="text-sm mt-2 text-cyber-primary hover:underline">Take a Test &rarr;</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CyberCard>
                    
                    {/* Learning Hub & Workshops Card */}
                     <div className="flex flex-col gap-12">
                        <Link href="/learning-hub">
                            <CyberCard>
                                <div className="flex items-center gap-6">
                                    <GraduationCap size={40} className="text-cyber-primary"/>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Learning Hub</h2>
                                        <p className="text-gray-400">Access your exclusive tutorials and resources.</p>
                                    </div>
                                </div>
                            </CyberCard>
                        </Link>
                         <CyberCard>
                            <h2 className="text-2xl font-bold text-white mb-6">Enrolled Workshops</h2>
                            <div className="text-center py-8 flex flex-col items-center justify-center h-full">
                                <BookOpen size={40} className="mx-auto text-gray-600"/>
                                <p className="mt-4 text-gray-400">You are not enrolled in any workshops yet.</p>
                                <Link href="/#workshops">
                                    <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-bold rounded-md hover:bg-cyber-primary hover:text-cyber-bg transition-colors">
                                        Explore Workshops
                                    </button>
                                </Link>
                            </div>
                        </CyberCard>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;