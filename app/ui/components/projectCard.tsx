

import React from 'react'
import ProjectCardBadge from './project-card-badge'
import Button from './button'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({
    title,
    content,
    badges,
}: {
    title: string,
    content: string,
    badges: string[]
}) => {
    return (
        <div className='group overflow-hidden w-full h-fit bg-[var(--background-secondary)] rounded-[12px] border-[2px] border-[var(--secondary)] 
         hover:border-[var(--primary)] hover:shadow-[0px_0px_50px_var(--shadow-primary)] transition-all ease-in-out duration-200'>

            {/** image container */}
            <div className='w-full h-[40%] relative'>
                <img src="/nexustock.png" alt="nexustock" className='object-cover w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110' />
                <div className='absolute bottom-3 left-3 flex gap-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                    <Button variant='gradient'
                    >  <div className='flex px-3 gap-2 items-center'>
                            <ExternalLink size={16} />
                            <span>Live</span>
                        </div></Button>
                    <Button variant='default'>
                        <div className='flex px-3 gap-2 items-center'>
                            <Github size={16} />
                            <span>Code</span>
                        </div>
                    </Button>
                </div>
            </div>

            {/** details */}
            <div className='flex-1 py-5 px-7 flex flex-col gap-5 mt-2.5'>
                <span className='transition-all ease-in-out duration-200 text-xl text-white font-bold group-hover:text-[var(--primary)]'>{title}</span>
                <p className='text-[var(--muted-foreground)] text-[.9rem]'>{content}</p>

                <div className='flex w-full flex-wrap gap-2 text-[9.rem]'>
                    {badges.map((b, index) => <ProjectCardBadge content={b} key={index} />)}
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
