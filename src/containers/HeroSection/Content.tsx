import Image from 'next/image'

import { useState } from 'react'

import {
  Arrow,
  Asterisk,
  Bandaids,
  Clover,
  CoinVertical,
  FlipWords,
  GlobeSimple,
  Heart,
  NextLink,
  PawPrint,
  Smiley
} from '@/components'
import IMAGE_URL from '@/constants/ImageURL'
import { cn } from '@/utils/cn'

const icons = [
  { icon: Heart, color: '#969ACF' },
  { icon: GlobeSimple, color: '#A9AFD8' },
  { icon: Asterisk, color: '#B2BBDD' },
  { icon: CoinVertical, color: '#A1BADB' },
  { icon: Bandaids, color: '#86B5D8' },
  { icon: PawPrint, color: '#509FCD' },
  { icon: Clover, color: '#2C8FC6' },
  { icon: Smiley, color: '#7A7FC3' }
]

const Content = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <section className="radialGradient flex min-h-[max(calc(100%-142px),900px)] flex-col items-center justify-evenly gap-y-7 px-4 backdrop-blur-xl md:px-8 lg:px-16">
      <div
        className="relative flex size-[335px] items-center justify-center md:size-[502px]"
        onMouseLeave={() => setIsHovered(false)}
      >
        {icons.map(({ icon: Icon, color }, index) => (
          <div
            key={index}
            className={
              'absolute flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 ease-in-out md:h-16 md:w-16'
            }
            style={{
              transform: cn({
                [`rotate(${index * 45}deg) translate(min(220px, 37vw)) rotate(-${index * 45}deg)`]:
                  isHovered,
                'translate(0, 0)': !isHovered
              }),
              backgroundColor: color
            }}
          >
            <Icon />
          </div>
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
