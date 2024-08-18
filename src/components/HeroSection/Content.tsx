import Image from 'next/image'

import { useState } from 'react'

import { cn } from '@/utils/cn'

import Header from '../Header'
import {
  Arrow,
  Asterisk,
  Bandaids,
  Clover,
  CoinVertical,
  GlobeSimple,
  Heart,
  PawPrint,
  Smiley
} from '../icons'
import NextLink from '../Link'

const icons = [
  Clover,
  Smiley,
  PawPrint,
  Heart,
  Bandaids,
  GlobeSimple,
  CoinVertical,
  Asterisk
]

const Content = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div className="max-w-screen sticky top-0 z-10 h-[max(100vh,900px)] w-full">
      <Header className="bg-transparent" />
      <section className="radialGradient flex h-[calc(100%-142px)] flex-col border-t-0 border-lightGray px-4 backdrop-blur-xl md:border-t md:px-8 lg:px-16">
        <div className="flex h-full flex-col items-center justify-center gap-16 overflow-hidden">
          <div
            className="relative flex size-[335px] items-center justify-center md:size-[502px]"
            onMouseLeave={() => setIsHovered(false)}
          >
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-skyBlue transition-transform duration-300 md:h-16 md:w-16"
                style={{
                  transform: cn({
                    [`rotate(${index * 45}deg) translate(min(220px, 37vw)) rotate(-${index * 45}deg)`]:
                      isHovered,
                    'translate(0, 0)': !isHovered
                  })
                }}
              >
                <Icon />
              </div>
            ))}
            <Image
              onMouseEnter={() => setIsHovered(true)}
              src="/wen_head_large.png"
              width={297}
              height={265}
              alt="Wen Wen Coin"
              className="z-10 mx-auto w-48 animate-rock md:w-96"
            />
          </div>
          <div className="flex flex-col gap-5 md:items-center">
            <p className="max-w-96 text-left text-3xl font-bold md:text-center md:text-xl">
              Onboarding mainstream audiences via the ultimate culture coin
            </p>
            <NextLink href="#about">Learn More</NextLink>
          </div>
          <Arrow className="hidden animate-bounce md:block" />
        </div>
      </section>
    </div>
  )
}

export default Content
