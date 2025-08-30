"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Home, Combine, Blocks, User, PenTool, GraduationCap, LogOut } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';
import { useAuth } from '@/app/hooks/useAuth';
import { auth } from '@/app/firebaseConfig';
import toast from 'react-hot-toast';
import MembershipModal from '../ui/MembershipModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMembershipModal, setShowMembershipModal] = useState(false);
    const { user, isLifetimeMember, loading } = useAuth();
    const router = useRouter();

    const mainNavLinks = [
        { href: '/', title: 'Home', icon: Home },
        { href: '/web2.5', title: 'Web 2.5', icon: Combine },
        { href: '/web3.0', title: 'Web 3.0', icon: Blocks },
    ];
    
    const handleTestClick = () => {
        if (isLifetimeMember) {
            router.push('/exam');
        } else {
            setShowMembershipModal(true);
        }
    };

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            toast.success('Signed out successfully');
            router.push('/');
        } catch (error) {
            toast.error('Failed to sign out');
        }
    };

    const renderDesktopLinks = () => {
        if (loading) return <div className="w-24 h-8 bg-gray-800 animate-pulse rounded-md"></div>;

        if (user) {
            return (
                <div className="flex items-center space-x-6">
                    {isLifetimeMember && (
                         <Link href="/learning-hub" className='text-gray-300 hover:text-cyber-primary transition-colors duration-300 font-semibold'>
                            Learning Hub
                        </Link>
                    )}
                    <Link href="/account" className='text-gray-300 hover:text-cyber-primary transition-colors duration-300 font-semibold'>
                        My Account
                    </Link>
                    <button onClick={handleSignOut} className='flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 font-semibold'>
                        <LogOut size={18} className="mr-2"/>
                        Sign Out
                    </button>
                </div>
            );
        }

        return (
            <Link href="/auth">
                <CyberButton className="px-5 py-2 text-sm">Register / Login</CyberButton>
            </Link>
        );
    };

     const renderMobileLinks = () => {
        if (user) {
            return (
                <>
                    {isLifetimeMember && (
                        <Link href="/learning-hub" onClick={() => setIsMenuOpen(false)} className='flex items-center gap-3 text-xl text-gray-300 hover:text-cyber-primary'><GraduationCap/> Learning Hub</Link>
                    )}
                    <Link href="/account" onClick={() => setIsMenuOpen(false)} className='flex items-center gap-3 text-xl text-gray-300 hover:text-cyber-primary'><User/> My Account</Link>
                    <div className="my-2 w-1/2 border-t border-gray-700"></div>
                    <button onClick={handleSignOut} className='flex items-center gap-3 text-xl text-gray-400 hover:text-red-500'><LogOut/> Sign Out</button>
                </>
            );
        }
        return (
            <Link href="/auth" onClick={() => setIsMenuOpen(false)} className="mt-4">
                <CyberButton>Register / Login</CyberButton>
            </Link>
        );
    };

    return (
        <>
            <nav className='w-full h-[65px] fixed top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50 px-5 md:px-10'>
                <div className='w-full h-full flex items-center justify-between m-auto'>
                    <Link href='/' className='font-bold text-xl md:text-2xl text-white font-mono'>
                        Next Computer Genius
                    </Link>

                    <div className='hidden md:flex items-center justify-around w-auto h-auto border border-gray-800 bg-black/50 px-[20px] py-[10px] rounded-full text-gray-200 space-x-8'>
                        {mainNavLinks.map((link) => (
                            <Link key={link.href} href={link.href} className='flex items-center gap-2 cursor-pointer text-gray-300 hover:text-cyber-primary transition-colors' title={link.title}>
                                <link.icon className={`h-5 w-5`} />
                                <span className="text-sm font-semibold">{link.title}</span>
                            </Link>
                        ))}
                    </div>
                    
                    <div className='hidden md:flex items-center space-x-6'>
                        <button onClick={handleTestClick} className='font-semibold text-cyber-primary hover:text-yellow-300 transition-colors'>
                            Take the Test
                        </button>
                        <div className="h-6 w-px bg-gray-700"></div>
                        {renderDesktopLinks()}
                    </div>

                    <div className='md:hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className='md:hidden absolute top-[65px] left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center gap-6 py-8'>
                        {mainNavLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='flex items-center gap-3 text-xl text-gray-300 hover:text-cyber-primary'>
                                <link.icon /> {link.title}
                            </Link>
                        ))}
                        <div className="my-2 w-1/2 border-t border-gray-700"></div>
                        <button onClick={handleTestClick} className='flex items-center gap-3 text-xl text-cyber-primary hover:text-yellow-300'><PenTool/> Take the Test</button>
                        {renderMobileLinks()}
                    </div>
                )}
            </nav>
            <MembershipModal isOpen={showMembershipModal} onClose={() => setShowMembershipModal(false)} />
        </>
    );
};

export default Navbar;