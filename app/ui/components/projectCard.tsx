'use client'

import React from 'react'
import ProjectCardBadge from './project-card-badge'
import Button from './button'
import { CircleCheck, ExternalLink, Github } from 'lucide-react'
import { Features, ProjectDetails } from '@/app/lib/model/project'
import { useDispatch } from 'react-redux'
import { toggleImageView } from '@/app/lib/redux/slice'

const ProjectCard = ({ details }: { details: ProjectDetails }) => {

    const { coverImage, description, features, techs, title } = details;

    return (
        <div className='group overflow-hidden w-full md:w-[70vw] min-h-fit bg-[var(--background-secondary)] rounded-[12px] border-[2px] border-[var(--secondary)] 
         hover:border-[var(--primary)] hover:shadow-[0px_0px_50px_var(--shadow-primary)] transition-all ease-in-out duration-200'>

            {/** image container */}
            <div className='w-full h-[30%]  relative'>
                <img src={coverImage} alt="nexustock" className='object-cover w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110' />
                <div className='absolute bottom-3 left-3 flex gap-3 transition-all duration-300 ease-in-out opacity-100 lg:opacity-0 group-hover:opacity-100'>
                    <Button variant='default'>
                        <a href={details.repo} target='_blank'>
                            <div className='flex px-3 gap-2 items-center'>
                                <Github size={16} />
                                <span>Code</span>
                            </div></a>
                    </Button>
                </div>
            </div>

            {/** details */}
            <div className='flex-1 py-5 px-7 flex flex-col gap-5 mt-2.5'>
                <span className='transition-all ease-in-out duration-200 text-xl text-white font-bold group-hover:text-[var(--primary)]'>{title}</span>
                <p className='text-[var(--muted-foreground)] text-[.9rem]'>{description}</p>


                {/** key features */}
                <div className='w-full flex flex-col gap-2'>
                    <span className='font-bold text-white'>Key Features</span>
                    <ul>
                        {details.features.map((feature, index) =>

                            <Feature key={index} data={feature} />
                        )}
                    </ul>
                </div>

                <div className='flex w-full flex-wrap gap-2 text-[9.rem]'>
                    {techs.map((b, index) => <ProjectCardBadge content={b} key={index} />)}
                </div>
            </div>

        </div>
    )
}


function Feature({ data }: { data: Features }) {

    const dispath = useDispatch();

    return (
        <div className={`w-full flex flex-col gap-3 ${data.snapshots && "mb-2"}`}>
            <div className='flex gap-2 w-full text-[.8rem] text-white mb-0.5'>
                <CircleCheck size={16} />
                {data.title}
            </div>

            {data.description && <p className='px-5 md:px-20 text-[var(--muted-foreground)] text-[.8rem] text-center'>{data.description}</p>}

            {/** images  */}
            <div className={`grid ${data.grid} gap-3 place-content-center`}
            >
                {data.snapshots?.map((img, index) =>
                    <div key={index} className='w-full flex flex-col gap-2 items-center mb-2'
                        onClick={() => dispath(toggleImageView({
                            url: img,
                        }))}
                    >
                        <div className='w-fit h-[10rem] max-h-[10rem] rounded-[4px] overflow-hidden lg:w-full'>
                            <img src={img} alt="image" className='transition-all ease-in-out duration-500 group-hover:scale-105 object-cover w-full h-full' />
                        </div>
                        <span className='text-center text-[.8rem] text-white'>{data.snapshotTitle && data.snapshotTitle[index]}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
