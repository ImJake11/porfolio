
import React from 'react'

type EmailProps = {
    firstname?: string,
    lastname?: string,
    message?: string,
}

export default function EmailTemplate({
    message,
    firstname,
    lastname,
}: EmailProps) {

    const name = firstname || lastname ? `${firstname ?? ""} ${lastname ?? ""}` : "Anonymous"
    return (
        <div className='flex flex-col'>
            <span style={{ fontWeight: "bold" }}>Hi Jake! I am {name},</span><br />
            <div className='min-h-[100px]'></div>
            <span>{message ?? "No Message"}</span>
        </div>
    )
}
