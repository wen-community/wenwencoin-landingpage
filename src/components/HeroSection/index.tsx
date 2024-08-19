import { useSearchParams } from 'next/navigation'

import { useEffect, useRef } from 'react'

import { cn } from '@/utils/cn'

import Content from './Content'
import Overlay from './Overlay'

const HeroSection = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)
  const menu = useSearchParams().get('menu') as string

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight * 1.8
      let clipSize = 100 - (scrollPosition / windowHeight) * 100
      if (clipSize < 5) clipSize = 0

      if (animatedRef.current) {
        animatedRef.current.style.clipPath = `circle(${clipSize}%)`
        animatedRef.current.style.pointerEvents =
          clipSize <= 0 ? 'none' : 'auto'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative h-[max(280vh,2600px)] w-full !px-0">
      <div className="h-[max(100vh, 900px)] sticky top-0 w-full">
        <div
          ref={animatedRef}
          className={cn(
            'absolute inset-0 z-10 flex h-screen items-center justify-center bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10 md:z-10',
            {
              'z-0': menu === 'open'
            }
          )}
        >
          <Overlay />
        </div>
        <Content />
      </div>
    </div>
  )
}

export default HeroSection
