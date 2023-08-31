'use client'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
//import { Perf } from "r3f-perf";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} gl={{ antialias: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 10], rotation: [0, 0, 0], fov: 35 }}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
      {/*<Perf />*/}
    </Canvas>
  )
}

