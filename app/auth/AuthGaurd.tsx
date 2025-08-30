"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import React from 'react';

// This component wraps protected page content
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, isLifetimeMember } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <Loader2 className="w-12 h-12 text-cyber-primary animate-spin" />
        <p className="mt-4 text-white text-lg">Verifying Access Credentials...</p>
      </div>
    );
  }

  if (!user) {
    // Using useEffect to prevent server-side redirects during pre-rendering
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      router.replace('/auth');
    }, [router]);
    return null;
  }

  if (!isLifetimeMember) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
        <p className="text-lg text-gray-300 mt-4">You must be a Lifetime Member to access this page.</p>
        <button onClick={() => router.push('/auth')} className="mt-8 px-6 py-3 bg-cyber-primary text-cyber-bg font-bold rounded-md">
          Become a Member
        </button>
      </div>
    );
  }

  // If user is logged in and is a lifetime member, render the page content
  return <>{children}</>;
}