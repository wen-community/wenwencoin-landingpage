import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/utils/cn'

const OverlayUI = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLDivElement | null>(null)
  const [startAnimation, setStartAnimation] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    if (!startAnimation) return
    let startTime: number | null = null
    let animationFrame: number
    const duration = 1500 // Increase duration to 6000ms (6 seconds)

    const animate = (timestamp: number): void => {
      if (!animatedRef.current) return
      if (!startTime) startTime = timestamp
      const progress: number = timestamp - startTime
      const percentage: number = Math.min(progress / duration, 1) // Use updated duration
      const value: number = Math.floor(percentage * (0 - 100) + 100)

      if (value <= 0) setShowModal(false)
      animatedRef.current.style.clipPath = `circle(${value}%)`
      animatedRef.current.style.pointerEvents = value <= 0 ? 'none' : 'auto'

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [startAnimation])

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setStartAnimation(true)
      }, 2000)
    }
  }, [showModal])

  return showModal ? (
    <>
      <div
        ref={backgroundRef}
        className="absolute top-0 z-50 flex h-screen w-screen items-center justify-center"
      />
      <div
        ref={animatedRef}
        className={cn(
          'absolute inset-0 flex h-screen items-center justify-center bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10 transition-[clip-path] duration-75 ease-in-out md:z-10'
        )}
      >
        <Image
          src="/logo.webp"
          width={297}
          height={265}
          className="relative z-20 aspect-square w-40 animate-hiThere transition-transform duration-300 ease-in-out md:w-72"
          alt="Wen Wen Coin"
        />
      </div>
    </>
  ) : null
}

export default OverlayUI
