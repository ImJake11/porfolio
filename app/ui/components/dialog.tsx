'use client'

import { RootState } from '@/app/lib/redux/store'
import { X } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from "framer-motion";
import { toggleDialog } from '@/app/lib/redux/slice'

const Dialog = () => {
    const dispatch = useDispatch();

    const { dialog, isDialogOpen } = useSelector((state: RootState) => state.slice);

    const title = dialog.type === "like" ? "Thankyou 💓" : "Message Sent 📩"
    const icon = dialog.type === "like" ? "🎉" : "📤";

    return (
        <AnimatePresence>
            {isDialogOpen && <motion.div className='w-screen h-screen grid place-content-center fixed bg-black/40 backdrop-blur-[5px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='w-[90vw] h-[20rem] md:w-[25rem] bg-[var(--background)] rounded-[8px] relative border border-[var(--secondary)]'>
                    <X className='absolute top-3 right-3 text-[var(--muted-foreground)]'
                        onClick={() => dispatch(toggleDialog(null))}
                    />

                    <div className='h-full w-full items-center py-12 px-5 flex flex-col gap-4'>
                        <span className='text-2xl font-semibold text-white'>{title}</span>
                        <span className='text-lg text-center text-[var(--muted-foreground)]'>{dialog.message}</span>
                        <span className='text-7xl transition-all duration-75 ease-in-out animate-pulse'>{icon}</span>
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}

export default Dialog
