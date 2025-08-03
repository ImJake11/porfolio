

import { Heart, ThumbsUp } from 'lucide-react'
import React from 'react'

const LikeButton = () => {
    return (
        <div className='flex gap-3 items-center'>

            <button className='h-[3rem] w-fit rounded-[4px] px-5 border border-[var(--secondary)] flex gap-2 items-center'>
                <span className='text-white'>Like</span>
                <Heart color='white' size={20} />
            </button>

            <Heart className='text-pink-600 fill-pink-600' />
            <span className='text-white'>27</span>
        </div>
    )
}

export default LikeButton
