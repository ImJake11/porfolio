

import React from 'react'
import LikeButton from './components/likeButton';
import { Download } from 'lucide-react';

const Footer = () => {
    return (
        <div className='w-full h-auto pt-20 pb-10 px-10 flex flex-col items-center'>

            <span className='text-2xl md:text-4xl text-white mb-6'>Do you like my
                <span className='gradient-text'> Portfolio?</span>
            </span>

            <span className='mb-8 text-[var(--muted-foreground)] text-lg md:text-xl text-center'>Show some love if you liked what you saw</span>
            <LikeButton />

            {/** border line */}
            <div className='w-full h-[1px] border border-[var(--secondary)] mt-20 mb-20' />

            <div className='w-full flex items-center mb-20 justify-between flex-col md:flex-row gap-10 md:gap-0 '>
                <span className='flex flex-col items-center md:items-start gap-3'>
                    <span className='gradient-text text-3xl'>Jake Juguilon</span>
                    <span className='text-[var(--muted-foreground)] text-center md:text-left'>Building the future, one line of code at a time.</span>
                </span>

                <button className='flex gap-3 h-[3rem] rounded-[4px] bg-linear-150 from-[var(--primary)] to-[var(--accent)] justify-center items-center px-5'>
                    <Download />
                    <a href="/cv.pdf" download={true}><span>Download CV</span></a>
                </button>
            </div>

            <div className='w-full h-[1px] border border-[var(--secondary)] mb-10' />
            <span className='w-full text-center text-lg text-[var(--muted-foreground)]'>© 2025 All rights reserved</span>
        </div>
    )
}

export default Footer;
