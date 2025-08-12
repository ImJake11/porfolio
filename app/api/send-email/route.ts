import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../ui/components/emailTemplate";
import { cookies } from "next/headers";
import { renderToHTML } from "next/dist/server/render";

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {

    try {
        const {
            subject,
            firstname,
            lastname,
            message,
        } = await req.json();

        const cookieStore = await cookies();

        const currentAttempts = Number(cookieStore.get("attempts")?.value ?? 0);

        if (currentAttempts <= 2) {
            cookieStore.set('attempts', String(currentAttempts + 1), {
                httpOnly: true,
                sameSite: "strict",
            })

            const resend = new Resend(process.env.RESEND_API_KEY);

            const { data, error } = await resend.emails.send({
                from: "My Portfolio <noreply@jakejug.site>",
                subject: subject ?? "Visit Portfolio",
                to: "jakejuguilon843@gmail.com",
                react: EmailTemplate({ message, firstname, lastname, })
            });

            if (error) {
                console.log(error);
                return NextResponse.json(
                    { error: "Resend Error" },
                    { status: 500 }
                )
            }

            console.log(data);
        }

        return NextResponse.json(
            { message: "Sent Sucessfully" },
            { status: 200 }
        )

    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}