import { useRef } from 'react'

import { Header, ToolTip } from '@/components'
import MasonryGrid from '@/components/MasonaryGallery'
import { BRAND_KIT, CONTENT_KIT, PFPKIT } from '@/constants'
import { BRAND_COLORS } from '@/constants/BrandKit'

const BrandKit = () => {
  const brandRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pfpsRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <div className="p-8">
        <ul
          className="mb-0 flex list-none flex-row flex-wrap pb-4 pt-3"
          role="tablist"
        >
          <li className="group -mb-px mr-2 flex-auto text-center last:mr-0">
            <a
              className="relative inline-block rounded px-5 py-3 font-semibold uppercase leading-normal"
              onClick={(e) => {
                e.preventDefault()
                handleTabClick(brandRef)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Brand
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-puce transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
          <li className="group -mb-px mr-2 flex-auto text-center last:mr-0">
            <a
              className="relative inline-block rounded px-5 py-3 font-semibold uppercase leading-normal"
              onClick={(e) => {
                e.preventDefault()
                handleTabClick(contentRef)
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Content
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-puce transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
          <li className="group -mb-px mr-2 flex-auto text-center last:mr-0">
            <a
              className="relative inline-block rounded px-5 py-3 font-semibold uppercase leading-normal"
              onClick={(e) => {
                e.preventDefault()
                handleTabClick(pfpsRef)
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              PFPs
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-puce transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
        </ul>
      </div>

      <div ref={brandRef} className="mt-20">
        <h1 className="text-4xl font-bold">Brand</h1>
        <div className="mt-4 flex gap-4">
          <ToolTip items={BRAND_COLORS} />
        </div>
        <div className="py-16">
          <MasonryGrid items={BRAND_KIT} />
        </div>
      </div>

      <div ref={contentRef} className="mt-20">
        <h1 className="text-4xl font-bold">Content</h1>
        <div className="py-16">
          <MasonryGrid items={CONTENT_KIT} />
        </div>
      </div>

      <div ref={pfpsRef} className="mt-20">
        <h1 className="text-4xl font-bold">PFPs</h1>
        <div className="py-16">
          <MasonryGrid items={PFPKIT} />
        </div>
      </div>
    </>
  )
}

export default BrandKit
