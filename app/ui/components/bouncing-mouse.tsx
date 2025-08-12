import React from 'react'
import { motion } from "framer-motion"

const BouncingMouse = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[2rem] min-h-[3rem] rounded-[16px] border-[2px] border-gray-400 grid place-content-center transition-all ease-linear animate-bounce duration-500'>
                <div className='h-[1rem] w-[4px] rounded-[50px] bg-gray-400 -translate-y-2' />
            </div>

            <div className='w-[3rem] h-[3rem] grid place-content-center'>
                <motion.div className='border-[3px] border-gray-400 rounded-full rotate-x-[70deg] -translate-y-4 origin-center'
                    initial={{
                        width: "3rem",
                        height: "3rem",
                    }}
                    animate={{
                        width: "0rem",
                        height: "0rem",
                    }}
                    transition={{
                        duration: .5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: .1
                    }}
                />
            </div>
        </div>
    )
}

export default BouncingMouse
