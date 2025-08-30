"use client";

import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

// Define the shape of the results
interface TestResults {
  'Web 2.0'?: { score: number; total: number };
  'Web 2.5'?: { score: number; total: number };
  'Web 3.0'?: { score: number; total: number };
}

// Define the shape of the context
interface TestResultsContextType {
  results: TestResults;
  setResults: React.Dispatch<SetStateAction<TestResults>>;
}

// Create the context with a default value
const TestResultsContext = createContext<TestResultsContextType | undefined>(undefined);

// Create the provider component
export const TestResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<TestResults>({});

  return (
    <TestResultsContext.Provider value={{ results, setResults }}>
      {children}
    </TestResultsContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useTestResults = () => {
  const context = useContext(TestResultsContext);
  if (context === undefined) {
    throw new Error('useTestResults must be used within a TestResultsProvider');
  }
  return context;
};