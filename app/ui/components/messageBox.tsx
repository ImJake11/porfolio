'use client';

import { Send } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { toggleDialog } from '@/app/lib/redux/slice';

const initialData = {
    firstname: "",
    lastname: "",
    message: "",
    subject: "",
}

const MessageBox = () => {
    const [mail, setMail] = useState<{
        message: string,
        firstname: string,
        lastname: string,
        subject: string,
    }>(initialData);
    const [isSending, setIsSending] = useState(false);

    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value, name } = e.target;

        setMail({ ...mail, [name]: value })
    }

    const handleSend = async () => {

        if (isSending) return;

        try {
            setIsSending(true);

            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mail),
            });

            if (!res.ok) {
                throw new Error("Server Failed to send message")
            }

            dispatch(toggleDialog({
                message: "Thank you for reaching out! I'll get back to you as soon as possible.",
                type: "mail",
            }))

            setMail({ ...initialData });

        } catch (e) {
            throw new Error("Failed to send message")
        } finally {
            setIsSending(false);
        }

    }


    return (
        <div className='flex-1 flex flex-col gap-4 md:gap-6 bg-[var(--background)] p-5 md:p-10 rounded-[12px]'>
            <div className='w-full flex flex-col md:flex-row gap-6'>
                <TextField value={mail.firstname} title='Firstname' onChange={handleInput} />
                <TextField value={mail.lastname} title='Lastname' onChange={handleInput} />
            </div>
            <TextField value={mail.subject} title='Subject' onChange={handleInput} />
            <div className='w-full flex flex-col gap-1'>
                <span className='text-white'>Message</span>
                <textarea value={mail.message} className='w-full rounded-[4px] border border-[var(--secondary)] max-h-[8rem] min-h-3rem h-[8rem] focus:outline-0 focus:border-[var(--primary)] p-2 text-white'
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        const { value } = e.target;

                        setMail({ ...mail, ["message"]: value })
                    }} />
            </div>

            <button className='w-full h-[3rem] rounded-[8px] bg-linear-120 from-[var(--primary)] to-[var(--accent)] flex gap-3 items-center justify-center'
                onClick={handleSend}
            >
                {isSending ?
                    <motion.div className='w-[1.5rem] h-[1.5rem] rounded-full border-[2px] border-white border-b-transparent'
                        animate={{
                            rotate: "360deg"
                        }}
                        transition={{
                            duration: .2,
                            ease: "linear",
                            type: "tween",
                            repeat: Infinity,
                        }}
                    /> : <Send color='black' size={18} />}
                <span className='text-black'>{isSending ? "Sending message" : "Send"}</span>
            </button>
        </div>
    )
}

function TextField({
    title,
    onChange,
    value,
}: {
    title: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}) {
    return (
        <div className='w-full flex flex-col gap-1'>
            <span className='text-white'>{title}</span>
            <input name={title.toLowerCase()} type="text" value={value} className='p-2 w-full text-white h-[3rem] border border-[var(--secondary)] rounded-[4px] focus:outline-0 focus:border-[var(--primary)] ' onChange={onChange} />
        </div>
    )
}

export default MessageBox
