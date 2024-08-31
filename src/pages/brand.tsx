import { BrandItem } from '@/components'
import { BRAND_KIT, CONTENT_KIT } from '@/constants'

const BrandKit = () => (
  <>
    <h1 className="mt-20 text-10 font-bold">Brand</h1>
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
    <h1 className="mt-20 text-10 font-bold">Content</h1>
    <section className="flex flex-wrap gap-8 py-16">
      {CONTENT_KIT.map(({ url, title, width, heigth }) => (
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
