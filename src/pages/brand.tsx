import { BrandItem } from '@/components'
import { BRAND_KIT } from '@/constants'

const BrandKit = () => (
  <>
    <h1 className="mt-20 text-10 font-bold">Brand kit</h1>
    <section className="flex flex-wrap gap-8 py-16">
      {BRAND_KIT.map(({ url, title, width, heigth }) => (
        <BrandItem
          key={title}
          url={url}
          title={title}
          width={width}
          height={heigth}
        />
      ))}
    </section>
  </>
)

export default BrandKit
