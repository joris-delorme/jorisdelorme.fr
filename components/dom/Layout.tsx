'use client'
import { ReactNode, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }: {children: ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <ReactLenis root options={{
      syncTouch: true
    }}>
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: ' 100%',
            height: '100%'
          }}
        >
          {children}
          <Scene
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
            }}
            eventSource={ref}
            eventPrefix='client'
          />
        </div>
    </ReactLenis>
  )
}

export { Layout }
