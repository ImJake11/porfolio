'use client'

import React from 'react'
import PhotoContainer from './components/PhotoContainer'

import { Download, DownloadIcon, Github, Linkedin, Mail } from 'lucide-react'
import Button from './components/button'
import BouncingMouse from './components/bouncing-mouse'
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className='h-auto w-full relative'>

            {/** animated bg objects */}
            <motion.div className='w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem] bg-[var(--primary)] rounded-full absolute top-1/2 -translate-y-1/2 opacity-50'
                initial={{ left: "25vw" }}
                animate={{ left: ["25vw", "50vw"] }}
                transition={{
                    repeatType: "reverse",
                    repeat: Infinity,
                    duration: 2.8,
                    ease: "easeInOut"
                }} />
            <motion.div className='w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem] bg-[var(--accent)] rounded-[20px] bottom-0 right-[30vw] absolute opacity-50'
                initial={{ bottom: "0" }}
                animate={{ bottom: ["0", "100px"] }}
                transition={{
                    repeatType: "reverse",
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut"
                }}
            />

            {/** blur */}
            <div className='inset-0 absolute backdrop-blur-[100px]' />

            {/** content */}
            <div className='relative flex flex-col items-center p-10'>
                <PhotoContainer />

                <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                    <span className='gradient-text text-center'>Jake Juguilon</span>
                </h1>

                <p className='text-xl md:text-2xl text-center text-[var(--muted-foreground)] mb-6'>Full Stack Web & Mobile Developer</p>

                <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto text-center">
                    Crafting beautiful, performant web applications with modern technologies.
                    Passionate about clean code, user experience, and innovative solutions.
                </p>

                {/** buttons */}
                <div className='gap-4 flex flex-col md:flex-row mb-12'>
                    <Button variant='gradient' >
                        <div className='group justify-center h-full flex gap-3 items-center p-[0_2rem] w-[12rem]'>
                            <Mail className='transition-all ease-in group-hover:animate-bounce' size={20} />
                            <span>Hire Me</span>
                        </div>
                    </Button>
                    <Button variant='default'>
                        <a href="/cv.pdf" download={true}>
                            <div className='group h-full flex gap-3 items-center p-[0_2rem]'>
                                <Download className='transition-all ease-in group-hover:animate-bounce' size={20} />
                                <span>Download CV</span>
                            </div></a>
                    </Button>
                </div>

                {/** links */}
                <div className='w-auto justify-center flex space-x-6 mb-12'>
                    <a href="" className='rounded-full bg-[var(--background)]/80 h-[3.5rem] w-[3.5rem] grid place-content-center transition-all duration-300 ease-in-out hover:shadow-[0px_0px_50px_var(--shadow-primary)] hover:scale-110'>
                        <Github size={30} color='white' />
                    </a>

                    <a href="" className='rounded-full bg-[var(--background)]/80 h-[3.5rem] w-[3.5rem] grid place-content-center transition-all duration-300 ease-in-out hover:shadow-[0px_0px_50px_var(--shadow-accent)] hover:scale-110'>
                        <Linkedin size={30} color='white' />
                    </a>
                </div>

                {/** bouncing mouse */}
                <BouncingMouse />
                <div className='min-h-[1rem]' />
            </div>
        </section>
    )
}

export default HeroSection
