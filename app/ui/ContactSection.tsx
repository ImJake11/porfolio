

import React from 'react'
import MessageBox from './components/messageBox'
import ContactTile from './components/contactTile'
import { Mail, Phone, MapPin } from "lucide-react"

const ContactSection = () => {
    return (
        <div className='h-auto w-full py-20 px-10 md:px-20 flex flex-col items-center bg-[var(--background-secondary)]'>
            <span className='text-4xl md:text-6xl mb-6 font-bold text-white'>Contact
                <span className='gradient-text'> Me</span>
            </span>

            <span className='text-lg md:text-xl text-center md:text-left text-[var(--muted-foreground)] mb-15'>Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.</span>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex-1 flex flex-col text-white md:px-10 mb-8'>
                    <span className='text-2xl mb-6'>Let's Connect</span>
                    <span className='text-[var(--muted-foreground)] mb-8'>
                        Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I'm always open to discussing new opportunities.
                    </span>

                    <ContactTile Icon={Mail} variant='primary' content='jakejuguilon843@gmail.com' title='Email' />
                    <ContactTile Icon={Phone} variant='secondary' content='+639934184147' title='Phone' />
                    <ContactTile Icon={MapPin} variant='primary' content='3005 Poblacion Pulilan, Bulacan' title='Location' />

                </div>
                <MessageBox />

            </div>
        </div>
    )
}


export default ContactSection
