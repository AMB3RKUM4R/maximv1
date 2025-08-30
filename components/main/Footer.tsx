import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full p-4 bg-black border-t border-gray-800'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <p className='text-sm text-gray-400 text-center font-mono'>
                    An Initiative to Empower the Next Generation of Tech Talent in Moradabad.
                </p>
                <p className='text-xs text-gray-600 mt-2'>
                    &copy; 2025 Next Computer Genius. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;