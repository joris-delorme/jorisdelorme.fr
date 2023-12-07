import { Button } from '@/components/ui/button';
import * as React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function EmailTemplate({ firstName }: { firstName: string }) {
    return (
        <div>
          <h1>Welcome, {firstName}!</h1>
        </div>
    )
}

export default function page() {

    async function send() {
        'use server'

        try {
            const data = await resend.emails.send({
              from: 'Joris <hello@jorisdelorme.fr>',
              to: ['oxpium.agency@gmail.com'],
              subject: 'Hello world',
              react: EmailTemplate({ firstName: 'Joris' }),
            })
            console.log(data)
            
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <form action={send}>
                <Button>Send Email</Button>
            </form>
        </div>
    )
}