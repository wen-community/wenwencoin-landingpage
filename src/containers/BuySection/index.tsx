import { BuyWenStep, NextLink } from '@/components'
import BUY_WEN_STEPS from '@/constants/BuyWenSteps'

const BuySection = () => (
  <section className="flex flex-wrap gap-10 py-[2rem] md:py-[7rem]">
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h2 className="text-10 font-bold">How to buy WEN</h2>
      <p className="flex max-w-screen-sm flex-col gap-8 font-semibold">
        Head over to one of your favorite crypto central exchanges like Bybit,
        Kraken, Crypto.com, etc or follow the steps to buy Wen on chain through
        a crypto wallet.
      </p>
      <NextLink target="_blank" href="https://jup.ag/swap/USDC-WEN">
        Buy Wen Now
      </NextLink>
    </div>
    <div className="flex flex-col gap-10">
      {BUY_WEN_STEPS.map(({ content, icon, title }) => (
        <BuyWenStep icon={icon} title={title} content={content} key={title} />
      ))}
    </div>
  </section>
)

export default BuySection
