import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { CountUp, HandHeart, Plugs, VisibilitySensor } from '@/components'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <section
      id="about"
      className="mt-10 flex flex-col overflow-hidden py-4 lg:flex-row"
    >
      <div className="flex flex-col gap-7 lg:w-1/2">
        <h2 className="text-4xl font-bold">What is WEN</h2>
        <div className="flex max-w-screen-md flex-col gap-8 font-semibold">
          <p>
            Wen is culture. Wen is a movement. Wen is the internet’s cutest cat
            and the heart of a growing global phenomenon. More than a brand, Wen
            is on a mission to become one of the world’s most iconic and beloved
            IPs.
          </p>
          <p>
            Wen started as a free airdrop to 1M+ recipients to give back. There
            were zero influencers, whales, or insiders involved and each
            recipient received the exact same amount - this made Wen the fairest
            and widest distributed airdrop ever on Solana. Emphasizing Wen is a
            coin for the people.
          </p>

          <p>
            Wen is also the proud owner of the #1 and #2 cat accounts in the
            world (
            <Link
              href="https://x.com/ShouldHaveCat"
              className="text-puce hover:underline"
              target="_blank"
            >
              @shouldhavecat
            </Link>{' '}
            &{' '}
            <Link
              href="https://x.com/PostsOfCats"
              className="text-puce hover:underline"
              target="_blank"
            >
              @postsofcats
            </Link>
            ) Together, we can bring Wen to everyone, everywhere.
          </p>
        </div>
        <div className="flex flex-row gap-6 gap-x-20 pt-7 md:gap-x-28">
          <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
            <HandHeart />
            <h2 className="flex text-4xl font-bold">
              <CountUp end={238000} />+
            </h2>
            <p>Holders Worldwide</p>
          </div>
          <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
            <Plugs />
            <h2 className="flex text-4xl font-bold">
              <CountUp end={345} />+
            </h2>
            <p>Integrations</p>
          </div>
        </div>
      </div>
      <VisibilitySensor
        setIsVisible={setIsVisible}
        className="relative flex w-full justify-center pb-[20%] lg:pb-0"
      >
        {isVisible && (
          <div className="absolute top-1/20 aspect-4/3 w-full max-w-screen-sm animate-fadeIn rounded-3xl" />
        )}
        <Image
          src="/about-page.png"
          width={841}
          height={999}
          alt="Wen Wen Full Body"
          className="bottom-0 z-10 max-h-[750px] w-2/3 translate-y-12 object-contain md:-translate-y-3"
          priority
        />
      </VisibilitySensor>
    </section>
  )
}

export default AboutSection
