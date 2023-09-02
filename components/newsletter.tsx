'use client'

import { useLayoutEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ArrowRight, Loader2, X } from "lucide-react"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti";
import axios from 'axios'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export function Newsletter() {
    const [email, setEmail] = useState('')
    const [isClose, setIsClose] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const buttonRef = useRef<HTMLButtonElement>(null)

    useLayoutEffect(() => {
        if (success && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            const x = (rect.x + rect.width / 2) / window.innerWidth
            const y = (rect.y + rect.height) / window.innerHeight

            confetti({
                particleCount: 150,
                spread: 60,
                origin: {
                    x: x,
                    y: y
                },
                zIndex: 10
            })
        }
    }, [success])

    const handler = async () => {
        
        if (success) return
        
        setLoading(true)
        setError('')
        
        axios.post('https://us-central1-personal-d7e8d.cloudfunctions.net/newsletter', {
            email
        })
            .then((res) => {
                setSuccess(true)
            })
            .catch(err => {
                console.log(err.response.data);

                if (err.response.data.includes("already exists")) {
                    setError(`"${email}" is already on the newsletter.`)
                } else {
                    setError(err.response.data)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Card className={cn(isClose && 'translate-x-[110%]', "transition-all ease-run duration-500 max-w-xl bg-background relative z-10")}>
            <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Je partage toutes mes connaissances, les pépites que je découvre et quelque petites exclusivités !</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    {error && <p className="text-destructive">{error}</p>}
                    <div className="flex gap-2">
                        <Input placeholder="exemple@gmail.com" name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button ref={buttonRef} disabled={loading || !emailRegex.test(email)} onClick={handler} className="flex group items-center gap-2 relative transition-all">
                            {
                                loading ? <Loader2 size={12} className="animate-spin" />
                                    : success ? <span className="text-xs whitespace-nowrap">Done 🎉</span> :
                                        <div className="group-hover:translate-x-1 transition-all">
                                            <ArrowRight size={18} />
                                        </div>
                            }
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}