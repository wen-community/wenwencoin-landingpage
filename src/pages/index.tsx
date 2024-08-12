import Image from 'next/image'

import { useState } from 'react'

import {
  Arrow,
  Asterisk,
  Bandaids,
  BuyWenStep,
  Clover,
  CoinVertical,
  FaqItem,
  GlobeSimple,
  HandHeart,
  Heart,
  NextLink,
  PawPrint,
  Plugs,
  Smiley
} from '@/components'
import { BUY_WEN_STEPS, FAQ_ITEMS } from '@/constants'
import { cn } from '@/utils/cn'

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
export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <>
      <section className="radialGradient flex h-[calc(100%-136px)] flex-col backdrop-blur-xl">
        <div className="flex h-full flex-col items-center justify-center gap-16 overflow-hidden border-t border-lightGray">
          <div
            className="relative flex size-[502px] items-center justify-center"
            onMouseLeave={() => setIsHovered(false)}
          >
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-skyBlue transition-transform"
                style={{
                  transform: cn({
                    [`rotate(${index * 45}deg) translate(220px) rotate(-${index * 45}deg)`]:
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
              className="z-10 mx-auto"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="w-96 text-center text-xl font-bold">
              Onboarding mainstream audiences via the ultimate culture coin
            </p>
            <NextLink href="/join">Learn More</NextLink>
          </div>
          <Arrow className="animate-bounce" />
        </div>
      </section>
      <section className="flex flex-col overflow-hidden py-4 lg:flex-row">
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
              Wen is a coin on the Solana blockchain aiming to disrupt
              mainstream audiences and become the ultimate social culture coin.
            </p>
            <p>
              Wen started as a free airdrop to 1M+ recipients to give back to
              the crypto community. There were zero influencers, whales, or
              insiders involved and each recipient received the exact same
              amount - this made Wen the fairest and widest distributed airdrop
              ever on Solana. Emphasizing Wen is a coin for the people.
            </p>
            <p>
              Wen is the proud owner of the #1 and #2 cat accounts in the world
              (@shouldhavecat & @postsofcats) The mission for Wen is to take
              over mainstream audiences and onboard the masses to the cutest cat
              in crypto.
            </p>
          </div>
          <div className="flex gap-6 gap-x-28 pt-7">
            <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
              <HandHeart />
              <h2 className="text-4xl font-bold">280,000+</h2>
              <p>Holders Worldwide</p>
            </div>
            <div className="flex flex-col justify-between gap-2 [&>*]:h-14">
              <Plugs />
              <h2 className="text-4xl font-bold">90+</h2>
              <p>Integrations</p>
            </div>
          </div>
        </div>
        <div className="relative flex w-full justify-center pb-[33%] lg:pb-0">
          <div className="defaultGradient absolute top-1/20 aspect-4/3 w-full max-w-screen-sm rounded-3xl" />
          <Image
            src={'/wen_full_body.png'}
            width={581}
            height={489}
            alt="Wen Wen Full Body"
            className="bottom-0 z-10 max-h-[489px] w-2/3 translate-y-1/3 object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-24 bg-backgroundSecondary py-20">
        <h3 className="text-xl font-bold">
          WEN is trusted on 30+ CEXs and DEXes
        </h3>
        <div className="scrollbar-none flex items-center justify-center gap-x-24 overflow-x-scroll">
          <Image src="/bybit_logo.png" width={115} height={38} alt="Bybit" />
          <Image src="/kraken_logo.png" width={137} height={37} alt="Kraken" />
          <Image
            src="/crypto.com_logo.png"
            width={178}
            height={34}
            alt="crpyto.com"
          />
          <Image src="/kucoin_logo.png" width={124} height={36} alt="Kucoin" />
          <Image src="/htx_logo.png" width={88} height={34} alt="Kucoin" />
          <Image src="/gate_logo.png" width={141} height={43} alt="Gate" />
        </div>
      </section>
      <section className="flex flex-wrap gap-10 py-28">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h2 className="text-10 font-bold">How to buy WEN</h2>
          <p className="flex max-w-screen-sm flex-col gap-8 font-semibold">
            Head over to one of your favorite crypto central exchanges like
            Bybit, Kraken, Crypto.com, etc or follow the steps to buy Wen on
            chain through a crypto wallet.
          </p>
          <NextLink
            href="/buy"
            // className="mt-7 w-max rounded-2.5 bg-black px-5 py-2.5 font-medium text-white"
          >
            Buy Wen Now
          </NextLink>
        </div>
        <div className="flex flex-col gap-10">
          {BUY_WEN_STEPS.map(({ content, icon, title }) => (
            <BuyWenStep
              icon={icon}
              title={title}
              content={content}
              key={title}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-wrap gap-10 bg-backgroundSecondary py-28">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h2 className="text-10 font-bold">FAQ</h2>
          <p className="flex max-w-screen-sm flex-col gap-8 font-semibold">
            Find answers to everything around the cute cat
          </p>
          <NextLink href="/" className="text-lg">
            Learn more about WEN
          </NextLink>
          <div className="mt-7 space-y-1 text-xs">
            <h4 className="font-bold">Disclaimer</h4>
            <p className="max-w-48">
              Wen is a coin with no intrinsic value or expectation of financial
              return. The coin is for entertainment purposes only.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map(({ title, content }) => (
            <FaqItem content={content} title={title} key={title} />
          ))}
        </div>
      </section>
    </>
  )
}
