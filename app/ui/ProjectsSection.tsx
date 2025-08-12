
import React from 'react'
import ProjectCard from './components/projectCard'
import { ProjectDetails } from '../lib/model/project';

const projects: ProjectDetails[] = [
    {
        repo: "https://github.com/ImJake11/mypos.git",
        coverImage: "/nexustock/nexustock-cover.png",
        title: "Nexustock",
        description: "A full-featured POS app built with Next.js and PostgreSQL, featuring custom session auth, Redux for state, and WebSocket for real-time updates. It uses complex SQL queries for efficient inventory and sales handling. Styled with Tailwind CSS and animated via Framer Motion, it's designed for scalability and clean architecture.",
        techs: ["Next.js", "PostgreSQL", "Socket.Io", "Redux", "Prisma", "Tailwind CSS", "Resend"],
        features: [
            {
                title: "Responsive Design and Deployment",
                description: "Fully responsive UI deployed on Vercel for seamless access on desktop and mobile",
                grid: "grid-cols-1 md:grid-cols-3",
                snapshots: [
                    "/nexustock/medium.png",
                    "/nexustock/small.png",
                    "/nexustock/large.png",
                ],
                snapshotTitle: [
                    "Tablet", "Mobile", "Desktop",
                ]
            },
            {
                title: "Darkmode support",
                description: "Toggle between light and dark themes for better user experience",
                grid: "grid-cols-1 md:grid-cols-2",
                snapshots: [
                    "/nexustock/darkmode.png",
                    "/nexustock/lightmode.png",
                ],
                snapshotTitle: ["Dark", "Light"],
            },
            { title: "Custom User Authentication and Role-Based Access" },
            { title: "Product Management" },
            { title: "Realtime Updates" },
            { title: "Secure Data Storage" },
            { title: "Complex data queries with Prisma" }
        ]
    }
];


const ProjectsSection = () => {

    return (
        <section className=' py-20 px-8'>
            <div className='w-full min-h-auto  flex flex-col items-center'>
                <span className='text-4xl md:text-6l text-white font-bold mb-6'>
                    Featured <span className='gradient-text'>Projects</span>
                </span>

                <span className='text-lg md:text-xl text-center md:text-left text-[var(--muted-foreground)] mb-12'>A showcase of my recent work, from full-stack applications to creative experiments.</span>

                <div className='w-full flex flex-col items-center'>
                    {projects.map((project, index) =>

                        <ProjectCard key={index} details={project} />)}
                </div>
            </div>
        </section>

    )
}

export default ProjectsSection
