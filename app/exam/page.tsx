"use client";

import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle } from 'lucide-react';
import { CyberButton } from '@/components/ui/CyberButton';

const examQuestions = [
    { question: "What is the output of `console.log(typeof null)`?", options: ["null", "undefined", "object", "string"], answer: "object" },
    { question: "Which of these is NOT a primitive type in JavaScript?", options: ["number", "boolean", "array", "symbol"], answer: "array" },
    { question: "What does the `===` operator check for?", options: ["Value only", "Value and type", "Type only", "Reference only"], answer: "Value and type" },
    { question: "What will `[...new Set([1, 2, 3, 1, 2])]` return?", options: ["[1, 2, 3, 1, 2]", "[1, 2, 3]", "{1, 2, 3}", "Error"], answer: "[1, 2, 3]" },
    { question: "Which hook is used to perform side effects in a function component?", options: ["useState", "useContext", "useEffect", "useReducer"], answer: "useEffect" },
];

const ExamPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (isFinished || timeLeft === 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [isFinished, timeLeft]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < examQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setIsFinished(true);
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    if(isFinished) {
        return (
             <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                 <CheckCircle size={80} className="text-cyber-primary mb-6"/>
                <h1 className="text-4xl font-bold text-white">Exam Finished!</h1>
                <p className="text-lg text-gray-400 mt-4">Your results have been recorded. We will notify you of your score and rank shortly.</p>
                 <CyberButton className="mt-8">
                    Back to Account
                </CyberButton>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-black/80 border-2 border-gray-800 rounded-lg p-8 shadow-[0_0_25px_rgba(255,213,0,0.2)]">
                <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
                    <h1 className="text-2xl font-bold text-white">Entrance Exam</h1>
                    <div className="flex items-center gap-2 bg-cyber-primary/10 text-cyber-primary px-4 py-2 rounded-md font-mono">
                        <Timer size={20} />
                        <span>{formatTime(timeLeft)}</span>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-gray-400 mb-4">Question {currentQuestionIndex + 1} of {examQuestions.length}</p>
                    <h2 className="text-2xl font-semibold text-white mb-8">{examQuestions[currentQuestionIndex].question}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {examQuestions[currentQuestionIndex].options.map(option => (
                        <button
                            key={option}
                            onClick={() => setSelectedOption(option)}
                            className={`p-4 rounded-md text-left border-2 transition-all duration-300 ${selectedOption === option ? 'bg-cyber-purple/50 border-cyber-purple' : 'bg-gray-900/50 border-gray-700 hover:border-cyber-primary'}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="flex justify-end">
                    <CyberButton
                        onClick={handleNextQuestion}
                        disabled={!selectedOption}
                        className="disabled:bg-gray-600 disabled:shadow-none disabled:text-gray-400 disabled:border-gray-600 disabled:cursor-not-allowed"
                    >
                        {currentQuestionIndex === examQuestions.length - 1 ? 'Finish Exam' : 'Next Question'}
                    </CyberButton>
                </div>
            </div>
        </div>
    );
};

export default ExamPage;