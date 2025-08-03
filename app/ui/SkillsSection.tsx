import React from 'react'
import Badge from './components/badge';

const SkillsSection = () => {

    const skills = [
        {
            title: "Frontend",
            features: ["React", "Next.js", "Flutter", "Framer-motion", "Tailwin CSS",],
        },
        {
            title: "Backend",
            features: ["Node.js", "Express.js", "RESTful API", "WebSocket"],
        },
        {
            title: "Database",
            features: ["Firebase", "PostgreSQL", "Supabase"],
        },
        {
            title: "Tools",
            features: ["Git", "Prisma", "Resend", "Postman"],
        },
        {
            title: "Languages",
            features: ["Typescript", "Dart"],
        },
        {
            title: "State Management",
            features: ["Redux", "Provider", "Bloc"],
        }
    ]

    return (

        <section className='h-auto w-full bg-[var(--background-secondary)] py-20 px-10 flex flex-col items-center'>
            <span className='text-4xl md:text-6xl text-white font-bold mb-6'>
                My <span className='gradient-text'>Skill</span>
            </span>

            <span className='text-[var(--muted-foreground)] text-lg md:text-xl text-center md:text-left mb-8'>A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.</span>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                {skills.map((category, index) => {

                    const feature = category.features;

                    return <div key={index} className='w-full h-auto flex flex-col items-center py-3 px-6'>
                        <span className='text-xl mb-8 text-white font-bold'>{category.title}</span>

                        <div className='flex-1 flex flex-wrap gap-3 justify-center'>
                            {feature.map((feature, index) => <Badge title={feature} key={index} />)}
                        </div>
                    </div>
                })}
            </div>


        </section>
    )
}

export default SkillsSection
