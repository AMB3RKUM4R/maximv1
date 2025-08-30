"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Combine, Blocks, User, PenTool } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mainNavLinks = [
        { href: '/', title: 'Home', icon: Home },
        { href: '/web2.5', title: 'Web 2.5', icon: Combine },
        { href: '/web3.0', title: 'Web 3.0', icon: Blocks },
    ];

    const userLinks = [
        { href: '/exam', title: 'Exam' },
        { href: '/account', title: 'My Account' },
    ];

    return (
        <nav className='w-full h-[65px] fixed top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50 px-5 md:px-10'>
            <div className='w-full h-full flex items-center justify-between m-auto'>
                <Link href='/' className='h-auto w-auto flex items-center'>
                    <span className='font-bold text-xl md:text-2xl text-white font-mono'>
                        Next Computer Genius
                    </span>
                </Link>

                {/* Desktop: Main Showcase Links */}
                <div className='hidden md:flex w-auto h-full flex-row items-center justify-center'>
                    <div className='flex items-center justify-around w-full h-auto border border-gray-800 bg-black/50 px-[20px] py-[10px] rounded-full text-gray-200 space-x-8'>
                        {mainNavLinks.map((link) => (
                            <Link key={link.href} href={link.href} className='flex items-center gap-2 cursor-pointer text-gray-300 hover:text-cyber-primary transition-colors' title={link.title}>
                                <link.icon className={`h-5 w-5`} />
                                <span className="text-sm font-semibold">{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                
                {/* Desktop: User & Action Links */}
                <div className='hidden md:flex items-center space-x-6'>
                    {userLinks.map((link) => (
                         <Link key={link.href} href={link.href} className='text-gray-300 hover:text-cyber-primary transition-colors duration-300 font-semibold'>
                            {link.title}
                        </Link>
                    ))}
                    <Link href="/auth">
                        <CyberButton className="px-5 py-2 text-sm">Register</CyberButton>
                    </Link>
                </div>

                {/* Mobile: Hamburger Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-[65px] left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center gap-6 py-8'>
                    {mainNavLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='flex items-center gap-3 text-xl text-gray-300 hover:text-cyber-primary transition-colors duration-300'>
                            <link.icon />
                            {link.title}
                        </Link>
                    ))}
                    <div className="my-2 w-1/2 border-t border-gray-700"></div>
                    {userLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='text-xl text-gray-300 hover:text-cyber-primary transition-colors duration-300'>
                            {link.title}
                        </Link>
                    ))}
                    <Link href="/auth" onClick={() => setIsMenuOpen(false)} className="mt-4">
                        <CyberButton>Register</CyberButton>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;