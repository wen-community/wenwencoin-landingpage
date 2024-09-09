import { BrandItem } from '@/components'
import { BRAND_KIT, CONTENT_KIT } from '@/constants'

const BrandKit = () => (
  <>
    <h1 className="mt-20 text-10 font-bold">Brand</h1>
    <div className="flex gap-4">
      <div className="group relative">
        <div className="size-5 rounded-full border bg-[#ff0020]" />
        <div className="absolute left-0 top-8 space-x-1 rounded-md border border-gray-300 bg-white p-2 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <span>Red</span>
          <span>#ff0020</span>
        </div>
      </div>
      <div className="group relative">
        <div className="size-5 rounded-full border bg-[#444444]" />
        <div className="absolute left-0 top-8 space-x-1 rounded-md border border-gray-300 bg-white p-2 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <span>Gray</span>
          <span>#444444</span>
        </div>
      </div>
      <div className="group relative">
        <div className="size-5 rounded-full border bg-[#121212]" />
        <div className="absolute left-0 top-8 space-x-1 rounded-md border border-gray-300 bg-white p-2 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <span>OfBlack</span>
          <span>#121212</span>
        </div>
      </div>
      <div className="group relative">
        <div className="size-5 rounded-full border bg-[#45a0d1]" />
        <div className="absolute left-0 top-8 space-x-1 rounded-md border border-gray-300 bg-white p-2 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <span>Blue</span>
          <span>#45a0d1</span>
        </div>
      </div>
      <div className="group relative">
        <div className="size-5 rounded-full border bg-white" />
        <div className="absolute left-0 top-8 space-x-1 rounded-md border border-gray-300 bg-white p-2 text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <span>White</span>
          <span>#ffffff</span>
        </div>
      </div>
    </div>
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
