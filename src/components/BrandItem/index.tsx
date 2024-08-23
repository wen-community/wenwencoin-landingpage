import Image from 'next/image'
import Link from 'next/link'

import { Download } from '../icons'
import VisibilitySensor from '../VisibilitySensor'

const BrandItem = ({
  url,
  title,
  width,
  height
}: {
  url: string
  title: string
  width: number
  height: number
}) => (
  <VisibilitySensor className="w-full max-w-[416px]">
    <div className="flex animate-fadeIn flex-col gap-8">
      <div className="flex aspect-square w-full items-center justify-center bg-tertiary">
        <Image src={url} width={width} height={height} alt="Wen Wen Coin" />
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <Link
          href={url}
          download
          target="_blank"
          title="Download"
          type="button"
        >
          <Download className="opacity-30" />
        </Link>
      </div>
    </div>
  </VisibilitySensor>
)

export default BrandItem
