

import clsx from 'clsx'
import { LucideProps } from 'lucide-react'
import React from 'react'

const ContactTile = ({
    variant,
    Icon,
    title,
    content,
}: {
    variant: "primary" | "secondary",
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
    title: string,
    content: string,
}) => {

    const background = {
        primary: "bg-[var(--primary)]",
        secondary: "bg-[var(--accent)]"
    }

    const text = {
        primary: "text-[var(--primary)]",
        secondary: "text-[var(--accent)]"
    }

    return (
        <div className='flex mb-5 gap-3'>
            <div className='w-[3rem] h-[3rem] rounded-[4px relative overflow-hidden'>
                <div className={clsx("absolute inset-0 opacity-20 rounded-[8px]", background[variant])} />
                <Icon className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", text[variant])} size={20} />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-white font-bold'>{title}</span>
                <span className='text-[var(--muted-foreground)] text-[.9rem]'>{content}</span>
            </div>
        </div>
    )
}

export default ContactTile
