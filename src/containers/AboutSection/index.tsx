import Image from 'next/image'
import Link from 'next/link'

import { CountUp, HandHeart, Plugs, VisibilitySensor } from '@/components'

const AboutSection = () => (
  <section
    id="about"
    className="flex flex-col overflow-hidden py-4 lg:flex-row"
  >
    <div className="flex flex-col gap-7 lg:w-1/2">
      <Image
        src="/wen_head_logo.png"
        width={82}
        height={73}
        alt="Wen Wen Coin"
      />
      <h2 className="text-4xl font-bold">What is WEN</h2>
      <div className="flex max-w-screen-md flex-col gap-8 font-semibold">
        <p>
          Wen is a coin on the Solana blockchain aiming to disrupt mainstream
          audiences and become the ultimate social culture coin.
        </p>
        <p>
          Wen started as a free airdrop to 1M+ recipients to give back to the
          crypto community. There were zero influencers, whales, or insiders
          involved and each recipient received the exact same amount - this made
          Wen the fairest and widest distributed airdrop ever on Solana.
          Emphasizing Wen is a coin for the people.
        </p>
        <p>
          Wen is the proud owner of the #1 and #2 cat accounts in the world (
          <Link href="https://x.com/ShouldHaveCat" target="_blank">
            @shouldhavecat
          </Link>{' '}
          &{' '}
          <Link href="https://x.com/PostsOfCats" target="_blank">
            @postsofcats
          </Link>
          ) The mission for Wen is to take over mainstream audiences and onboard
          the masses to the cutest cat in crypto.
        </p>
      </div>
      <div className="flex flex-col gap-6 gap-x-28 pt-7 md:flex-row">
        <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
          <HandHeart />
          <h2 className="text-4xl font-bold">
            <VisibilitySensor>
              <CountUp end={280000} />+
            </VisibilitySensor>
          </h2>
          <p>Holders Worldwide</p>
        </div>
        <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
          <Plugs />
          <h2 className="text-4xl font-bold">
            <VisibilitySensor>
              <CountUp end={90} />+
            </VisibilitySensor>
          </h2>
          <p>Integrations</p>
        </div>
      </div>
    </div>
    <VisibilitySensor className="relative flex w-full justify-center pb-[33%] lg:pb-0">
      <div className="defaultGradient absolute top-1/20 aspect-4/3 w-full max-w-screen-sm animate-fadeIn rounded-3xl" />
      <Image
        src={'/wen_full_body.png'}
        width={581}
        height={489}
        alt="Wen Wen Full Body"
        className="bottom-0 z-10 max-h-[489px] w-2/3 translate-y-1/3 object-contain"
      />
    </VisibilitySensor>
  </section>
)

export default AboutSection
