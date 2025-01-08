import { ReactNode, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

import { Chevron } from '../icons'
type IFaqItem = {
  title: string
  content: ReactNode
}

const FaqItem = ({ title, content }: IFaqItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex w-full max-w-screen-md flex-col gap-5 p-5">
      <button
        onClick={() => {
          setIsOpen((val) => !val)
        }}
        className="flex w-full items-center justify-between gap-6 text-start text-xl font-bold"
      >
        <span className="w-[calc(100%-1.125rem)]">{title}</span>
        <Chevron
          className={cn('invert transition-transform', {
            'rotate-180 opacity-40': isOpen
          })}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FaqItem
