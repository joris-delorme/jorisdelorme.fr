'use client'
import dynamic from 'next/dynamic'
import { Suspense, useLayoutEffect } from 'react'

const Spectre = dynamic(() => import('@/components/canvas/Spectre').then((mod) => mod.Spectre), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})

export function SpectreDOM() {

  useLayoutEffect(() => {
    const icon = document.querySelector("link[rel='icon']") as HTMLLinkElement    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => icon.href = e.matches ? "/favicon.ico" : "/dark/favicon.ico")
    icon.href = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "/favicon.ico" : "/dark/favicon.ico"
  }, [])

  return (
    <>
      {/*@ts-ignore*/}
      <View className='absolute h-screen top-0 left-0 w-full'>
        <Suspense fallback={null}>
          <Spectre />
        </Suspense>
      </View>
    </>
  )
}