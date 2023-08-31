'use client'
import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react'
import { View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

const View = forwardRef(({ children, ...props }: {children: ReactNode}, ref) => {
  const localRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        {/*@ts-ignore*/}
        <ViewImpl track={localRef}>
          {children}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
