import Link, { LinkProps } from 'next/link'

import { FC, HTMLProps } from 'react'

import { cn } from '@/utils/cn'

const NextLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  className,
  ...props
}) => (
  <Link
    {...props}
    href={href}
    className={cn(
      'w-max rounded-2.5 bg-black px-5 py-2.5 font-medium text-white',
      className
    )}
  >
    {children}
  </Link>
)

export default NextLink
