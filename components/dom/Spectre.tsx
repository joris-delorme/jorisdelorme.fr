'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Spectre = dynamic(() => import('@/components/canvas/Spectre').then((mod) => mod.Spectre), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false
})

export function SpectreDOM() {
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