


import React from 'react'

const BouncingMouse = () => {
    return (
        <div className='w-[2rem] min-h-[3rem] rounded-[16px] border-[2px] border-gray-400 grid place-content-center transition-all ease-linear animate-bounce duration-500'>
            <div className='h-[1rem] w-[4px] rounded-[50px] bg-gray-400 -translate-y-2' />
        </div>
    )
}

export default BouncingMouse
