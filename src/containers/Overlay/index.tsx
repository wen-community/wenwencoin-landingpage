import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { useAnimation } from '@/contexts/AnimationContext'

const Overlay = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)
  const [startAnimation, setStartAnimation] = useState<boolean>(false)
  const { isAnimationLoaded, setAnimationLoaded } = useAnimation()
  const [width, setWidth] = useState<string>('0')

  useEffect(() => {
    if (!startAnimation) return
    let startTime: number | null = null
    let animationFrame: number
    const duration = 1500 // Increase duration to 6000ms (6 seconds)

    const animate = (timestamp: number): void => {
      setWidth(`${75}%`)
      if (!animatedRef.current) return
      if (!startTime) startTime = timestamp
      const progress: number = timestamp - startTime
      const percentage: number = Math.min(progress / duration, 1) // Use updated duration
      const value: number = Math.floor(percentage * (0 - 100) + 100)

      if (value <= 0) {
        setWidth('100%')
        setTimeout(() => {
          setAnimationLoaded(true)
        }, 500)
      }
      animatedRef.current.style.clipPath = `circle(${value}%)`
      animatedRef.current.style.pointerEvents = value <= 0 ? 'none' : 'auto'

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [setAnimationLoaded, startAnimation])

  useEffect(() => {
    if (!isAnimationLoaded) {
      setTimeout(() => {
        setStartAnimation(true)
      }, 1000)
    }
  }, [isAnimationLoaded])

  return !isAnimationLoaded ? (
    <>
      <div className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center">
        <div
          ref={animatedRef}
          className="absolute inset-0 flex h-screen flex-col items-center justify-center gap-14 bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10 transition-[clip-path] duration-500 ease-in-out md:z-10 md:gap-28"
        >
          <Image
            src="/logo.webp"
            width={297}
            height={265}
            className="relative z-20 aspect-square w-36 animate-hiThere transition-transform duration-300 ease-in-out md:w-64"
            alt="Wen Wen Coin"
            priority
          />
          <div className="left-0 h-2 w-60 rounded-full bg-gray-200 md:w-96">
            <div
              className="transition-width h-full rounded-full bg-blue-500 duration-500"
              style={{ width }}
            />
          </div>
        </div>
      </div>
    </>
  ) : null
}

export default Overlay
