import { useEffect, useRef } from 'react'

import Content from './Content'
import Overlay from './Overlay'

const HeroSection = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight * 1.8
      let clipSize = 100 - (scrollPosition / windowHeight) * 100
      if (clipSize < 0) clipSize = 0

      if (animatedRef.current) {
        if (clipSize < 5 && clipSize > 0) {
          console.log(clipSize)
          animatedRef.current.style.clipPath = `circle(0%)`
          animatedRef.current.style.pointerEvents = 'auto'
          window.scrollTo({
            top: windowHeight,
            behavior: 'smooth'
          })
        }
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
    <div className="relative h-[max(280vh,1800px)] w-full !px-0">
      <div className="h-[max(100vh, 900px)] sticky top-0 z-50 w-full">
        <div
          ref={animatedRef}
          className="absolute inset-0 z-50 flex h-screen items-center justify-center bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10"
        >
          <Overlay />
        </div>
        <Content />
      </div>
    </div>
  )
}

export default HeroSection
