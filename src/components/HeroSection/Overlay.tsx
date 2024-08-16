import Image from 'next/image'

import { useState } from 'react'

import { cn } from '@/utils/cn'

import { PawPrint } from '../icons'

const Overlay = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="relative w-max items-center">
        <Image
          src="/message_box.png"
          width={159}
          height={156}
          alt="Wen..."
          className={cn(
            'absolute top-10 z-10 w-28 opacity-0 transition-all ease-in-out md:w-40',
            {
              '-translate-x-20 opacity-100 md:-translate-x-36': isHovered
            }
          )}
        />
        <Image
          src="/wen_full_body.png"
          width={278.5}
          height={321}
          className="relative z-20 w-40 md:h-80 md:w-72"
          alt="Wen Wen Coin"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
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
    </>
  )
}

export default Overlay
