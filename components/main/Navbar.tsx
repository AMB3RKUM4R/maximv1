"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionLinks = [
        { href: '/#workshops', title: 'Workshops' },
        { href: '/#showcase', title: 'Showcase' },
        { href: '/#mentor', title: 'Mentor' },
    ];

    const pageLinks = [
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

                <div className='hidden md:flex items-center gap-8'>
                    {/* Section Links */}
                    <div className='flex items-center space-x-8 text-gray-300'>
                        {sectionLinks.map((link) => (
                            <Link key={link.href} href={link.href} className='hover:text-cyber-primary transition-colors duration-300'>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                
                <div className='hidden md:flex items-center space-x-6'>
                    {/* Page links */}
                    {pageLinks.map((link) => (
                         <Link key={link.href} href={link.href} className='text-gray-300 hover:text-cyber-primary transition-colors duration-300 font-semibold'>
                            {link.title}
                        </Link>
                    ))}
                    {/* Register CTA */}
                    <Link href="/auth" className="px-5 py-2 bg-cyber-primary text-cyber-bg font-bold rounded-md border-2 border-cyber-primary hover:bg-transparent hover:text-cyber-primary transition-all duration-300">
                        Register
                    </Link>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className='md:hidden absolute top-[65px] left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center gap-6 py-8'>
                    {sectionLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='text-xl text-gray-300 hover:text-cyber-primary transition-colors duration-300'>
                            {link.title}
                        </Link>
                    ))}
                    <div className="my-2 w-1/2 border-t border-gray-700"></div>
                    {pageLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className='text-xl text-gray-300 hover:text-cyber-primary transition-colors duration-300'>
                            {link.title}
                        </Link>
                    ))}
                    <Link href="/auth" onClick={() => setIsMenuOpen(false)} className="mt-4 px-8 py-3 bg-cyber-primary text-cyber-bg font-bold rounded-md border-2 border-cyber-primary">
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;