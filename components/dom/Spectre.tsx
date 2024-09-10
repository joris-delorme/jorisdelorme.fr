"use client"

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export function SpectreDOM({ className }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={ref}
            className={cn("relative", className)}
        >
            <Scene
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: -10
                }}
                eventSource={ref}
                eventPrefix='client'
            />
        </div>
    )
}