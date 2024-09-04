import Image from 'next/image'

const DexSection = () => (
  <section className="flex flex-col items-center !px-0">
    <h3 className="px-4 pb-5 pt-20 text-center text-xl font-bold md:px-8 lg:px-16">
      WEN is trusted on 30+ CEXs and DEXes
    </h3>
    <div className="w-full overflow-hidden bg-backgroundSecondary">
      <div className="flex w-full animate-slider items-center justify-center gap-x-16 gap-y-12 py-20 md:animate-none md:flex-wrap md:gap-x-24">
        <Image
          src="/bybit_logo.webp"
          width={115}
          height={38}
          alt="Bybit"
          priority
        />
        <Image
          src="/kraken_logo.webp"
          width={137}
          height={37}
          alt="Kraken"
          priority
        />
        <Image
          src="/crypto.com_logo.webp"
          width={178}
          height={34}
          alt="crpyto.com"
          priority
        />
        <Image
          src="/kucoin_logo.webp"
          width={124}
          height={36}
          alt="Kucoin"
          priority
        />
        <Image
          src="/htx_logo.webp"
          width={88}
          height={34}
          alt="Kucoin"
          priority
        />
        <Image
          src="/gate_logo.webp"
          width={141}
          height={43}
          alt="Gate"
          priority
        />
      </div>
    </div>
  </section>
)

export default DexSection
