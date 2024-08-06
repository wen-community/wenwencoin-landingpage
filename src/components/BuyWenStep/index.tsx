import { ReactNode } from 'react'

import { ArrowRight } from '../icons'

type IBuyWenStep = {
  icon: ReactNode
  title: string
  content: string
}

const BuyWenStep = ({ icon, title, content }: IBuyWenStep) => (
  <div className="flex h-20 items-center gap-10">
    <div className="flex aspect-square h-full items-center justify-center rounded-full bg-skyBlue">
      {icon}
    </div>
    <div className="w-full max-w-md">
      <h3 className="flex items-center gap-x-3.5 text-lg font-bold">
        {title} <ArrowRight />
      </h3>
      <p className="text-sm font-semibold">{content}</p>
    </div>
  </div>
)

export default BuyWenStep
