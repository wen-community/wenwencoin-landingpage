import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import {
  Africa,
  Antarctica,
  Arrow,
  Asia,
  Australia,
  Europe,
  FlipWords,
  NextLink,
  NorthAmerica,
  SouthAmerica
} from '@/components'
import IMAGE_URL from '@/constants/ImageURL'
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
    <section className="radialGradient flex min-h-[max(calc(100%-142px),900px)] flex-col items-center justify-evenly gap-y-7 px-4 backdrop-blur-xl md:px-8 lg:px-16">
      <div
        className="relative flex size-[335px] items-center justify-center md:size-[502px]"
        onMouseLeave={() => setIsHovered(false)}
      >
        {icons.slice(0, 7).map((Icon, index) => (
          <Link
            href={`/community?continent=${Icon.name}`}
            key={index}
            className={
              'absolute flex size-20 items-center justify-center rounded-full transition-transform duration-300 ease-in-out md:size-28'
            }
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
          src={`${IMAGE_URL}/wen_head_large.png`}
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
          <FlipWords
            words={['World', 'Massess', 'Crowd', 'Fans', 'Audiences']}
          />
          one Wen at a time.
        </p>
        <NextLink href="#about">Learn More</NextLink>
      </div>
      <Arrow className="hidden animate-bounce md:block" />
    </section>
  )
}

export default Content
