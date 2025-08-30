"use client";

import React, { useState, useEffect } from 'react';
import { CyberButton } from '../ui/CyberButton';
import { CheckCircle, XCircle, Timer } from 'lucide-react';
import { useTestResults } from '@/app/context/TestResultsContext';
import { Question } from '@/constants/mock-test';

interface MockTestProps {
  questions: Question[];
  testName: 'Web 2.0' | 'Web 2.5' | 'Web 3.0';
}

const MockTest = ({ questions, testName }: MockTestProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions.length * 15); // 15 seconds per question
  
  const { setResults } = useTestResults();

  // Timer logic
  useEffect(() => {
    if (isFinished || timeLeft === 0) {
        if (!isFinished) handleSubmit(); // Auto-submit when time runs out
        return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished, timeLeft]);

  const handleSubmit = () => {
    let finalScore = score;
    if (selectedOption === questions[currentQuestionIndex].answer) {
      finalScore++;
    }
    
    setIsFinished(true);
    setResults(prev => ({
        ...prev,
        [testName]: { score: finalScore, total: questions.length }
    }));
  };
  
  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
    } else {
        handleSubmit();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
    
  if (isFinished) {
    const finalResult = { score, total: questions.length };
    const percentage = Math.round((finalResult.score / finalResult.total) * 100);

    return (
        <div className="w-full max-w-3xl bg-black/80 border-2 border-gray-800 rounded-lg p-8 text-center">
            {percentage >= 70 ? <CheckCircle size={80} className="mx-auto text-cyber-primary mb-6"/> : <XCircle size={80} className="mx-auto text-red-500 mb-6"/>}
            <h1 className="text-4xl font-bold text-white">Test Completed!</h1>
            <p className="text-lg text-gray-400 mt-4">You have completed the {testName} mock test.</p>
            <p className="text-5xl font-bold text-cyber-primary my-6">{percentage}%</p>
            <p className="text-white text-xl">You scored {finalResult.score} out of {finalResult.total}</p>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-3xl bg-black/80 border-2 border-gray-800 rounded-lg p-8 shadow-[0_0_25px_rgba(255,213,0,0.2)]">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-8">
            <h1 className="text-2xl font-bold text-white">{testName} Mock Test</h1>
            <div className="flex items-center gap-2 bg-cyber-primary/10 text-cyber-primary px-4 py-2 rounded-md font-mono">
                <Timer size={20} />
                <span>{formatTime(timeLeft)}</span>
            </div>
        </div>
        <div>
            <p className="text-lg text-gray-400 mb-4">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <h2 className="text-2xl font-semibold text-white mb-8">{currentQuestion.question}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map(option => (
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
                {currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}
            </CyberButton>
        </div>
    </div>
  );
};

export default MockTest;