import { useEffect, useRef } from 'react'

import Content from './Content'
import Overlay from './Overlay'

const HeroSection = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      let clipSize = 100 - (scrollPosition / windowHeight) * 100
      if (clipSize < 0) clipSize = 0

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
    <div className="relative h-[max(200vh,1800px)] w-full !px-0">
      <div className="h-[max(100vh, 900px)] sticky top-0 z-50 w-full">
        <div
          ref={animatedRef}
          className="absolute inset-0 z-50 flex h-screen items-center justify-center bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10 transition-[clip-path] duration-500 ease-in-out"
        >
          <Overlay />
        </div>
        <Content />
      </div>
    </div>
  )
}

export default HeroSection
