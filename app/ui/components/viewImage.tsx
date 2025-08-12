'use client'

import { toggleImageView } from '@/app/lib/redux/slice'
import { RootState } from '@/app/lib/redux/store'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ViewImage = () => {
    const dispatch = useDispatch();

    const { imageUrl, isImageViewOpen } = useSelector((state: RootState) => state.slice);

    return (
        <AnimatePresence>
            {isImageViewOpen && <motion.div className='w-screen fixed h-screen bg-black/30 grid place-content-center backdrop-blur-[2px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => dispatch(toggleImageView(undefined))}>
                <span className='w-full text-center -translate-y-5 text-[var(--muted-foreground)] font-bold opacity-40'>Tap or Click anywhere to exit</span>
                <div className='w-auto max-w-[90vw] border-[5px] border-[var(--secondary)] overflow-hidden rounded-[8px] max-h-[70vh] p-5 bg-[var(--background)]'>
                    <img src={imageUrl} alt="" className='w-full h-full object-contain' />
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default ViewImage
