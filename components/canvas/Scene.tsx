"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Spectre } from './Spectre'


export default function Scene({ ...props }) {
    return (
        <Canvas {...props} shadows camera={{ position: [0, 0, 0], fov: 35 }}>
            <Suspense fallback={null}>
                <Spectre />
            </Suspense>
        </Canvas>
    )
}
