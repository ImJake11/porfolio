

import React from 'react'
import Card from './components/card'
import { Code, Dna, Target, Users } from "lucide-react";

const AboutMeSection = () => {

    const features = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable, scalable code using modern design patterns and clean architecture principles"
        },
        {
            icon: Dna,
            title: "Adaptability",
            description: "Open to feedback and new technologies, with a strong drive to evolve as a developer every day"
        },
        {
            icon: Target,
            title: "Commitment",
            description: "Committed to continuous learning and improving through hands-on practice, feedback, and real-world challenges."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Following best practices to deliver well-structured, efficient code optimized for performance and team collaboration"
        }
    ];


    return (
        <section className='h-auto w-full flex flex-col items-center py-15 px-5 md:py-20 md:px-10'>

            <span className='text-6xl font-bold text-white m-6'>About <span className='gradient-text'>Me</span></span>

            <p className='text-center text-lg md:text-xl px-10 md:px-45 text-[var(--muted-foreground)] mb-10'>I'm a dedicated full-stack developer with hands-on experience in Flutter, React, and PostgreSQL, passionate about crafting clean, scalable solutions that transform complex ideas into intuitive and engaging user experiences.</p>

            <div className='w-full min-h-[80vh] flex-col md:flex-row flex'>

                {/** journey */}
                <div className='flex-1 py-5 px-7 box-border flex flex-col gap-4 justify-center'>

                    <span className='text-white text-3xl font-bold text-center md:text-left'>My Journey</span>

                    <p className='text-lg text-[var(--muted-foreground)] text-center md:text-left'>From struggling to turn on a PC to building full-stack applications from scratch, my journey into tech was never handed to me, I carved it with consistency, grit, and curiosity. Without high-end equipment or formal training, I taught myself programming through real-world projects, daily challenges, and relentless practice. I’ve built solid experience in Flutter, React, Next.js, and Node.js, working across both frontend and backend. I focus on writing clean, scalable code and improving every day not just to build better apps, but to grow into a stronger, more reliable developer. For me, programming isn’t just a skill, it’s the discipline that shaped who I am.</p>
                </div>

                {/** Cards */}
                <div className='flex-1 grid grid-cols-2 gap-5 p-5 min-w-[50vw]'>
                    {features.map((f, i) => <Card
                        key={i}
                        desc={f.description}
                        Icon={f.icon}
                        title={f.title}
                    />)}
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
