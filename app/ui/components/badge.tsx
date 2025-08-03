

import React from 'react'

const Badge = ({ title }: { title: string }) => {
    return (
        <span className='h-[3rem] w-fit bg-[var(--background)] text-[var(--muted-foreground)] grid place-content-center px-5 rounded-[30px] transition-all ease-in duration-200 hover:text-black hover:bg-[var(--primary)]'>
            {title}
        </span>
    )
}

export default Badge
