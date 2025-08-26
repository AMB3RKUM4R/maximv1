"use client"; // Required for useState and usePathname

import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Server, Combine, Blocks, Coins, Crown, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    // State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    // Placeholder data for user info
    const userName = "Guest";
    const maximTokens = 0;

    const navLinks = [
        { href: '/', title: 'Web 2.0', icon: Server },
        { href: '/web2.5', title: 'Web 2.5', icon: Combine },
        { href: '/web3.0', title: 'Web 3.0', icon: Blocks },
    ];

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                {/* Logo and App Name */}
                <Link href='/' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/NavLogo.png"
                        alt='Maxim Logo'
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                    <span className='font-bold ml-[8px] hidden md:block text-gray-300'>
                        Maxim
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className='hidden md:flex w-[500px] h-full flex-row items-center justify-center'>
                    <div className='flex items-center justify-around w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className='cursor-pointer' title={link.title}>
                                <link.icon className={`h-6 w-6 transition-colors ${pathname === link.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Desktop User Info and Action Buttons */}
                <div className='hidden md:flex flex-row items-center gap-5'>
                    <div className='flex flex-col items-end text-right'>
                        <span className='text-sm font-semibold text-white'>{userName}</span>
                        <span className='text-xs text-gray-400'>{maximTokens} MAXIM</span>
                    </div>
                    <button className='p-2 button-primary text-center text-white cursor-pointer rounded-full' title="Get Tokens">
                        <Coins className='h-5 w-5' />
                    </button>
                    <button className='p-2 bg-transparent border border-gray-500 text-white cursor-pointer rounded-full hover:bg-gray-800 transition-colors' title="Membership">
                        <Crown className='h-5 w-5' />
                    </button>
                     <Link href="/account" className='p-2 bg-transparent border border-gray-500 text-white cursor-pointer rounded-full hover:bg-gray-800 transition-colors' title="My Account">
                        <User className='h-5 w-5' />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-[65px] left-0 w-full bg-[#030014] bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 py-8'>
                    {/* Mobile Navigation Links */}
                    <div className='flex items-center justify-around w-4/5 h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200'>
                       {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='cursor-pointer' title={link.title}>
                                <link.icon className={`h-7 w-7 transition-colors ${pathname === link.href ? 'text-purple-400' : 'text-gray-300'}`} />
                            </Link>
                        ))}
                    </div>
                    
                    {/* Mobile User Info */}
                    <div className='flex flex-col items-center text-center'>
                        <span className='text-lg font-semibold text-white'>{userName}</span>
                        <span className='text-sm text-gray-400'>{maximTokens} MAXIM</span>
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className='flex flex-col items-center gap-6 w-full px-8'>
                         <button className='w-full flex items-center justify-center gap-2 py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg text-base' title="Get Tokens">
                            <Coins className='h-5 w-5' /> Get Tokens
                        </button>
                        <button className='w-full flex items-center justify-center gap-2 py-2 px-4 bg-transparent border border-gray-500 text-white cursor-pointer rounded-lg text-base hover:bg-gray-800 transition-colors' title="Membership">
                            <Crown className='h-5 w-5' /> Membership
                        </button>
                        <Link href="/account" onClick={() => setIsMenuOpen(false)} className='w-full flex items-center justify-center gap-2 py-2 px-4 bg-transparent border border-gray-500 text-white cursor-pointer rounded-lg text-base hover:bg-gray-800 transition-colors' title="My Account">
                            <User className='h-5 w-5' /> My Account
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
