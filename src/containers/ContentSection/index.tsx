import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { FlipWords, NextLink } from '@/components'
import {
  Africa,
  Antarctica,
  Arrow,
  Asia,
  Australia,
  Europe,
  NorthAmerica,
  SouthAmerica
} from '@/components/icons'
import { cn } from '@/utils/cn'

const icons = [
  Australia,
  Asia,
  Antarctica,
  Europe,
  SouthAmerica,
  NorthAmerica,
  Africa
]

const Content = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <section className="radialGradient flex min-h-[max(calc(100%-142px),900px)] flex-col items-center justify-center gap-y-7 px-4 backdrop-blur-xl md:px-8 lg:gap-y-14 lg:px-16">
      <div
        className="relative flex size-[335px] items-center justify-center md:size-[502px]"
        onMouseLeave={() => setIsHovered(false)}
      >
        {icons.slice(0, 7).map((Icon, index) => (
          <Link
            href={`/community?continent=${Icon.name.toString().toLowerCase()}`}
            key={index}
            className={cn(
              'absolute flex size-20 items-center justify-center rounded-full transition-all duration-300 ease-in-out md:size-28',
              '[&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out [&>svg]:hover:scale-125',
              {
                'opacity-100': isHovered,
                'opacity-0': !isHovered
              }
            )}
            style={{
              transform: cn({
                [`rotate(${index * (360 / 7)}deg) translate(min(220px, 37vw)) rotate(-${index * (360 / 7)}deg)`]:
                  isHovered,
                'translate(0, 0)': !isHovered
              })
            }}
          >
            <Icon />
          </Link>
        ))}
        <Image
          onMouseEnter={() => setIsHovered(true)}
          src={`/logo.webp`}
          width={297}
          height={265}
          alt="Wen Wen Coin"
          className={
            'z-10 mx-auto w-48 animate-rock cursor-pointer hover:scale-125 md:w-72'
          }
        />
      </div>
      <div className="flex flex-col gap-5 md:items-center">
        <p className="max-w-screen-sm text-left !text-3xl font-bold md:text-center md:text-xl">
          Onboarding the
          <FlipWords words={['World', 'Massess', 'Universe', 'Cults']} />, One
          Wen at a time.
        </p>
        <NextLink href="#about">Learn More</NextLink>
      </div>
      <Arrow className="hidden animate-bounce md:block" />
    </section>
  )
}

export default Content
