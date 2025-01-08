import { Header, ToolTip } from '@/components'
import MasonryGrid from '@/components/MasonaryGallery'
import { BRAND_KIT, CONTENT_KIT } from '@/constants'
import { BRAND_COLORS } from '@/constants/BrandKit'

const BrandKit = () => (
  <>
    <Header />
    <h1 className="mt-20 text-10 font-bold">Brand</h1>
    <div className="mt-4 flex gap-4">
      <ToolTip items={BRAND_COLORS} />
    </div>
    <div className="py-16">
      <MasonryGrid items={BRAND_KIT} />
    </div>

    <h1 className="mt-10 text-10 font-bold">Content</h1>
    <div className="py-16">
      <MasonryGrid items={CONTENT_KIT} />
    </div>
  </>
)

export default BrandKit
