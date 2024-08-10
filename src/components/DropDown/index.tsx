import { InputHTMLAttributes, useState } from 'react'

import { cn } from '@/utils/cn'

import FormLine from '../FormLine'

interface IDropDown extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title?: string
  error?: string
  required?: boolean
  className?: string
}

const DropDown = ({
  id,
  title,
  error,
  required,
  className,
  ...props
}: IDropDown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      className={cn('relative flex flex-col', className)}
    >
      <FormLine
        id={id}
        title={title}
        error={error}
        required={required}
        {...props}
      />
      {isOpen && (
        <ul className="absolute top-24 z-[500] w-full overflow-hidden rounded-md bg-white shadow-xl">
          <li className="px-4 py-2 hover:bg-black/10">Item 1</li>
          <li className="px-4 py-2 hover:bg-black/10">Item 1</li>
          <li className="px-4 py-2 hover:bg-black/10">Item 1</li>
        </ul>
      )}
    </div>
  )
}

export default DropDown
