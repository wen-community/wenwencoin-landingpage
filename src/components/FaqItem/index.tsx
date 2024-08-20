import { ReactNode, useState } from 'react'

import { cn } from '@/utils/cn'

import { Chevron } from '../icons'

type IFaqItem = {
  title: string
  content: ReactNode
}

const FaqItem = ({ title, content }: IFaqItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div className="flex w-full max-w-screen-md flex-col gap-5 p-5">
      <button
        onClick={() => {
          setIsOpen((val) => !val)
        }}
        className="flex w-full items-center justify-between gap-6 text-start text-xl font-bold"
      >
        {title}
        <Chevron
          className={cn('transition-transform', {
            'rotate-180 opacity-40': isOpen
          })}
        />
      </button>
      <p
        className={cn('w-full max-w-xl', {
          hidden: !isOpen
        })}
      >
        {content}
      </p>
    </div>
  )
}

export default FaqItem
