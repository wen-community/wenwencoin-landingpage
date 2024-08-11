import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'

import { cn } from '@/utils/cn'

interface IFormLine extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title?: string
  error?: string
  required?: boolean
  className?: string
}

const FormLine: ForwardRefRenderFunction<HTMLInputElement, IFormLine> = (
  { id, title, error, required, className, ...restProps },
  ref
) => {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-1 duration-0 ease-in-out',
        className
      )}
    >
      <label
        title={title}
        htmlFor={id}
        className={cn('flex flex-col gap-2', className)}
      >
        {title}
        {required && '*'}
        <input
          {...restProps}
          id={id}
          className="rounded-lg border border-black p-2 outline-none"
          ref={ref}
          required={required}
          aria-label={title}
        />
      </label>
      <div
        className={cn(
          'text-red whitespace-pre text-sm font-semibold leading-4 duration-300 ease-in-out',
          { 'text-red-400': !error }
        )}
      >
        {error}
      </div>
    </div>
  )
}

export default forwardRef(FormLine)
