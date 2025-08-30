"use client";

import { useState, useEffect } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    User,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { auth, db, upiLink } from '../firebaseConfig'; // Adjust path if needed
import { CyberButton } from '@/components/ui/CyberButton';
import toast from 'react-hot-toast';
import Link from 'next/link';

const AuthPage = () => {
    const [mode, setMode] = useState<'login' | 'signup'>('signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For signup
    const [phone, setPhone] = useState(''); // For signup
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [membershipStatus, setMembershipStatus] = useState('none');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Check membership status from Firestore
                const playerRef = doc(db, 'Players', currentUser.uid);
                const playerSnap = await getDoc(playerRef);
                if (playerSnap.exists() && playerSnap.data().membership === 'lifetime') {
                    setMembershipStatus('lifetime');
                } else {
                    setMembershipStatus('none');
                }
            }
        });
        return () => unsubscribe();
    }, []);

    const handleAuthSuccess = async (user: User, isNewUser: boolean) => {
        if (!isNewUser) return; // Only create doc for new users

        // This function creates the user document strictly following your rules
        const playerRef = doc(db, 'Players', user.uid);
        const playerData = {
            // Your rules require 'Name' and 'PhoneNumber' on create
            Name: name || user.displayName || "Genius Aspirant",
            PhoneNumber: phone || user.phoneNumber || "",
            WalletBalance: 0.0,
            IsAdmin: false,
            CreatedAt: serverTimestamp(),
            // Optional fields allowed by your rules
            email: user.email,
            membership: 'none',
            referralCode: `NCG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
            userId: user.uid,
        };
        await setDoc(playerRef, playerData);
        toast.success("Account created successfully!");
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await handleAuthSuccess(userCredential.user, true);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Welcome back!");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const playerRef = doc(db, 'Players', result.user.uid);
            const playerSnap = await getDoc(playerRef);
            if (!playerSnap.exists()) {
                await handleAuthSuccess(result.user, true);
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    // Logged-in view
    if (user) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-black/80 border-2 border-gray-800 rounded-lg p-8 text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome, {user.displayName || user.email}</h1>
                    <p className="text-gray-400 mb-6">Your account is ready.</p>
                    {membershipStatus !== 'lifetime' ? (
                        <>
                            <p className="text-cyber-primary mb-4">Complete your registration by paying the one-time ₹49 membership fee.</p>
                            <a href={upiLink}>
                                <CyberButton className="w-full">Pay ₹49 with UPI</CyberButton>
                            </a>
                            <p className="text-xs text-gray-600 mt-4">After payment, your membership will be activated by our team. Please check back later.</p>
                        </>
                    ) : (
                         <>
                            <p className="text-cyber-primary font-bold text-lg mb-4">LIFETIME MEMBER</p>
                            <p className="text-gray-300 mb-6">You have full access. You can now take the exam or enroll in workshops.</p>
                             <Link href="/exam">
                                <CyberButton className="w-full">Go to Exam</CyberButton>
                             </Link>
                         </>
                    )}
                     <button onClick={() => auth.signOut()} className="mt-6 text-gray-500 hover:text-white">Sign Out</button>
                </div>
            </div>
        );
    }

    // Login/Signup view
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-black/80 border-2 border-gray-800 rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center text-white mb-6">{mode === 'signup' ? 'Create Your Account' : 'Access Your Account'}</h1>
                <form onSubmit={mode === 'signup' ? handleSignUp : handleLogin} className="space-y-4">
                    {mode === 'signup' && (
                         <>
                            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-primary" />
                            <input type="tel" placeholder="Phone Number (e.g. 9876543210)" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-primary" />
                        </>
                    )}
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-primary" />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-primary" />
                    <CyberButton type="submit" disabled={loading} className="w-full">
                        {loading ? 'Processing...' : (mode === 'signup' ? 'Sign Up' : 'Log In')}
                    </CyberButton>
                </form>
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="flex-shrink mx-4 text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>
                <button onClick={handleGoogleSignIn} disabled={loading} className="w-full py-3 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-700 hover:border-white transition-colors">
                    Continue with Google
                </button>
                <p className="text-center mt-6 text-gray-400">
                    {mode === 'signup' ? 'Already have an account? ' : 'Don’t have an account? '}
                    <button onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')} className="font-bold text-cyber-primary hover:underline">
                        {mode === 'signup' ? 'Log In' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;