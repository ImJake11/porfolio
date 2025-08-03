
import { Send } from 'lucide-react'
import React from 'react'

const MessageBox = () => {
    return (
        <div className='flex-1 flex flex-col gap-4 md:gap-6 bg-[var(--background)] p-5 md:p-10 rounded-[12px]'>
            <div className='w-full flex gap-6'>
                <TextField title='Firstname' />
                <TextField title='Lastname' />
            </div>
            <TextField title='Email' />
            <TextField title='Subject' />
            <div className='w-full flex flex-col gap-1'>
                <span className='text-white'>Message</span>
                <textarea className='w-full rounded-[4px] border border-[var(--secondary)] max-h-[8rem] min-h-3rem h-[8rem] focus:outline-0 focus:border-[var(--primary)] p-2 text-white'></textarea>
            </div>

            <button className='w-full h-[3rem] rounded-[8px] bg-linear-120 from-[var(--primary)] to-[var(--accent)] flex gap-3 items-center justify-center'>
                <Send color='black' size={18} />
                <span className='text-black'>Send Message</span>
            </button>
        </div>
    )
}

function TextField({
    title
}: {
    title: string
}) {
    return (
        <div className='w-full flex flex-col gap-1'>
            <span className='text-white'>{title}</span>
            <input type="text" className='p-2 w-full text-white h-[3rem] border border-[var(--secondary)] rounded-[4px] focus:outline-0 focus:border-[var(--primary)] ' />
        </div>
    )
}

export default MessageBox
