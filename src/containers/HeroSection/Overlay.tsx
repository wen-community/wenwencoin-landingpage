import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { PawPrint } from '@/components'
import { cn } from '@/utils/cn'

const OverlayUI = () => {
  const animatedRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLDivElement | null>(null)
  const [showModal, setShowModal] = useState(true)
  const [clipSize, setClipSize] = useState(100)
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1.8,
      behavior: 'smooth'
    })
  }
  let lastTouchY: number | null = null

  const handleTouchStart = (event: TouchEvent) => {
    event.preventDefault()
    lastTouchY = event.touches[0].clientY
  }

  const handleScrollAttempt = (event: WheelEvent | TouchEvent) => {
    event.preventDefault()

    let scrollIntensity = 0

    if (event instanceof WheelEvent) {
      scrollIntensity = event.deltaY * 0.05 // Adjust this multiplier to control sensitivity
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0]
      const currentTouchY = touch.clientY

      if (lastTouchY !== null) {
        scrollIntensity = (lastTouchY - currentTouchY) * 0.2 // Adjust multiplier as needed
      }

      lastTouchY = currentTouchY
    }

    setClipSize((prevSize) => {
      const newSize = Math.max(0, Math.min(100, prevSize - scrollIntensity))
      if (newSize <= 5) {
        setTimeout(() => {
          setShowModal(false)
        }, 500)
      }
      return newSize
    })
  }

  useEffect(() => {
    const element = backgroundRef.current
    if (element) {
      element.addEventListener('wheel', handleScrollAttempt, { passive: false })
      element.addEventListener('touchstart', handleTouchStart, {
        passive: false
      })
      element.addEventListener('touchmove', handleScrollAttempt, {
        passive: false
      })
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleScrollAttempt)
        element.addEventListener('touchstart', handleTouchStart, {
          passive: false
        })
        element.removeEventListener('touchmove', handleScrollAttempt)
      }
    }
  }, [])

  useEffect(() => {
    if (animatedRef.current) {
      animatedRef.current.style.clipPath = `circle(${clipSize}%)`
      animatedRef.current.style.pointerEvents = clipSize <= 0 ? 'none' : 'auto'
    }
  }, [clipSize])

  return showModal ? (
    <>
      <div
        ref={backgroundRef}
        className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center"
      >
        <div
          onFocus={() => {
            setIsMouseOver(true)
          }}
          onMouseOver={() => {
            setIsMouseOver(true)
          }}
          onMouseOut={() => {
            setIsMouseOver(false)
          }}
          onBlur={() => {
            setIsMouseOver(false)
          }}
          className="aspect-square w-40 cursor-pointer bg-transparent md:h-80 md:w-72"
        ></div>
      </div>
      <div className="fixed top-0 z-40 h-screen w-full overflow-hidden">
        <div
          ref={animatedRef}
          className={cn(
            'absolute inset-0 flex h-screen items-center justify-center bg-gradient-to-br from-skyBlue via-lightBlue to-purple py-10 transition-[clip-path] duration-500 ease-in-out md:z-10'
          )}
        >
          <div className="relative w-max cursor-pointer items-center">
            <Image
              src="/logo.webp"
              width={297}
              height={265}
              className={cn(
                'relative z-20 aspect-square w-40 transition-transform duration-300 ease-in-out md:w-72',
                {
                  'animate-hiThere': isMouseOver
                }
              )}
              alt="Wen Wen Coin"
            />
          </div>
          <button
            title="view content"
            type="button"
            onClick={handleScroll}
            className="absolute bottom-10 flex h-14 w-8 rounded-full border-[1.5px] border-white"
          >
            <PawPrint className="animate-travel px-1" color="white" />
          </button>
        </div>
      </div>
    </>
  ) : null
}

const Overlay = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])
  if (isBrowser) {
    return createPortal(
      <OverlayUI />,
      document.getElementById('modal-root') as Element
    )
  }

  return null
}

export default Overlay
