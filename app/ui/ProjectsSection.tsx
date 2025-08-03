
import React from 'react'
import ProjectCard from './components/projectCard'

const ProjectsSection = () => {

    const projects = [
        {
            title: "Nexustock",
            content: "A full-featured POS app built with Next.js and PostgreSQL, featuring custom session auth, Redux for state, and WebSocket for real-time updates. It uses complex SQL queries for efficient inventory and sales handling. Styled with Tailwind CSS and animated via Framer Motion, it's designed for scalability and clean architecture.",
            badges: ["Next.js", "PostgreSQL", "Socket.Io", "Redux"],
        }
    ];

    return (
        <section className='w-full h-auto py-20 px-8 flex flex-col items-center'>
            <span className='text-4xl md:text-6l text-white font-bold mb-6'>
                Featured <span className='gradient-text'>Projects</span>
            </span>

            <span className='text-lg md:text-xl text-center md:text-left text-[var(--muted-foreground)] mb-12'>A showcase of my recent work, from full-stack applications to creative experiments.</span>

            <div className='w-full grid grid-cols-1 md:grid-cols-3'>
                {projects.map((project, index) => <ProjectCard key={index} badges={project.badges} content={project.content} title={project.title} />)}
            </div>

        </section>

    )
}

export default ProjectsSection
