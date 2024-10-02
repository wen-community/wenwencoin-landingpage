import Image from 'next/image'
import Link from 'next/link'

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
  { icon: Australia, name: 'australia' },
  { icon: Asia, name: 'asia' },
  { icon: Antarctica, name: 'antarctica' },
  { icon: Europe, name: 'europe' },
  { icon: SouthAmerica, name: 'southamerica' },
  { icon: NorthAmerica, name: 'northamerica' },
  { icon: Africa, name: 'africa' }
]

const Content = () => {
  return (
    <section className="radialGradient flex min-h-[max(calc(100%-142px),600px)] flex-col items-center justify-center gap-y-7 px-4 backdrop-blur-xl md:min-h-[max(calc(100%-142px),900px)] md:px-8 lg:gap-y-14 lg:px-16">
      <div className="relative flex size-[335px] -translate-y-10 items-center justify-center md:size-[502px]">
        {icons.slice(0, 7).map(({ icon: Icon, name }, index) => (
          <Link
            href={`/community?continent=${name}`}
            key={index}
            className={cn(
              'absolute flex size-20 items-center justify-center rounded-full transition-all duration-300 ease-in-out md:size-28',
              '[&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out [&>svg]:hover:scale-125',
              'opacity-100'
            )}
            style={{
              transform: `rotate(${index * (360 / 7)}deg) translate(200%) rotate(-${index * (360 / 7)}deg)`
            }}
          >
            <Icon />
          </Link>
        ))}
        <Image
          src={`/logo.webp`}
          width={297}
          height={265}
          alt="Wen Wen Coin"
          className={
            'z-10 mx-auto w-48 animate-rock cursor-pointer hover:scale-125 md:w-72'
          }
          priority
        />
      </div>
      <div className="flex flex-col gap-5 md:items-center">
        <p className="max-w-screen-sm text-left text-2xl font-bold md:text-center md:text-3xl">
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
