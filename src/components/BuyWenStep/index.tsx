import { ReactNode } from 'react'

import { ArrowRight } from '../icons'

type IBuyWenStep = {
  icon: ReactNode
  title: string
  content: ReactNode
}

const BuyWenStep = ({ icon, title, content }: IBuyWenStep) => (
  <div className="group flex items-center gap-10">
    <div className="flex aspect-square w-24 items-center justify-center rounded-full bg-skyBlue transition-all duration-300 ease-in-out group-hover:invert">
      {icon}
    </div>
    <div className="flex w-full max-w-md flex-col gap-1">
      <h3 className="flex items-center gap-x-3.5 text-xl font-bold transition-all">
        {title}{' '}
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-10" />
      </h3>
      <p>{content}</p>
    </div>
  </div>
)

export default BuyWenStep
