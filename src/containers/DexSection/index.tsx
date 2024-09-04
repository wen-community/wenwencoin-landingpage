import Image from 'next/image'

import IMAGE_URL from '@/constants/ImageURL'

const DexSection = () => (
  <section className="flex flex-col items-center !px-0">
    <h3 className="px-4 pb-5 pt-20 text-center text-xl font-bold md:px-8 lg:px-16">
      WEN is trusted on 30+ CEXs and DEXes
    </h3>
    <div className="w-full overflow-hidden bg-backgroundSecondary">
      <div className="flex w-full animate-slider items-center justify-center gap-x-16 gap-y-12 py-20 md:animate-none md:flex-wrap md:gap-x-24">
        <Image
          src={`${IMAGE_URL}/bybit_logo.webp`}
          width={115}
          height={38}
          alt="Bybit"
        />
        <Image
          src={`${IMAGE_URL}/kraken_logo.webp`}
          width={137}
          height={37}
          alt="Kraken"
        />
        <Image
          src={`${IMAGE_URL}/crypto.com_logo.webp`}
          width={178}
          height={34}
          alt="crpyto.com"
        />
        <Image
          src={`${IMAGE_URL}/kucoin_logo.webp`}
          width={124}
          height={36}
          alt="Kucoin"
        />
        <Image
          src={`${IMAGE_URL}/htx_logo.webp`}
          width={88}
          height={34}
          alt="Kucoin"
        />
        <Image
          src={`${IMAGE_URL}/gate_logo.webp`}
          width={141}
          height={43}
          alt="Gate"
        />
      </div>
    </div>
  </section>
)

export default DexSection
