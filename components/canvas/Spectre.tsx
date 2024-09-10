'use client'
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import vertex from './shader/shader.vert'
import fragment from './shader/shader.frag'
import * as THREE from "three"

export function Spectre({ ...props }) {

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: 0.15 },
      uNoiseDensity: { value: 1.0 },
      uNoiseStrength: { value: 0.3 },
      uFreq: { value: 1 },
      uAmp: { value: 4 },
      uHue: { value: 0.4 },
      uOffset: { value: Math.PI * 2 },
      red: { value: 0 },
      green: { value: 0 },
      blue: { value: 0 },
      uAlpha: { value: 1.0 },
      uDistortionAnimation: { value: 0 }
    }),
    []
  )
  const geom = useMemo(() => new THREE.IcosahedronGeometry(1, 32), [])
  const mat = useMemo(() => new THREE.ShaderMaterial({
    wireframe: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    fragmentShader: fragment,
    vertexShader: vertex,
    uniforms: uniforms
  }), [])

  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, dt) => {
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value += dt
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, (state.size.width > 768 ? -8 : -15), 0.025)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, -state.mouse.x, 0.05)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.mouse.y, 0.05)
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        position={[0, 0, 10]}
        scale={1}
        geometry={geom}
        material={mat}
      />
    </group>
  )
}
