

import Image from 'next/image'
import React from 'react'

const PhotoContainer = () => {
    return (
        <div className='w-[10rem] h-[10rem] bg-linear-120 from-[var(--primary)] to-[var(--accent)] rounded-full p-0.5 mb-6'>
            <div className='w-full h-full rounded-full bg-[var(--background)] grid place-content-center overflow-hidden'>
                <Image src={"/jake.webp"} alt='image' width={200} height={200} className='translate-y-6' />
            </div>
        </div>
    )
}

export default PhotoContainer
