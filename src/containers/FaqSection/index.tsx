import { FaqItem, NextLink } from '@/components'
import { FAQ_ITEMS } from '@/constants'

const FaqSection = () => (
  <section
    id="faq"
    className="relative flex flex-wrap gap-10 bg-backgroundSecondary py-28"
  >
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h2 className="text-10 font-bold">FAQ</h2>
      <p className="flex max-w-screen-sm flex-col gap-8 font-semibold">
        Find answers to everything around the cute cat
      </p>
      <NextLink href="#about" className="text-lg">
        Learn more about WEN
      </NextLink>
    </div>
    <div className="flex flex-col gap-4">
      {FAQ_ITEMS.map(({ title, content }) => (
        <FaqItem content={content} title={title} key={title} />
      ))}
    </div>
    <div className="md:8 absolute bottom-4 left-0 mt-7 flex gap-2 px-4 text-xs lg:px-16">
      <h4 className="font-bold">Disclaimer:</h4>
      <p className="">
        Wen is a coin with no intrinsic value or expectation of financial
        return. The coin is for entertainment purposes only.
      </p>
    </div>
  </section>
)

export default FaqSection
