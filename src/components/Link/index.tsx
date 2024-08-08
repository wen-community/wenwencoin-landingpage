import Link from 'next/link'

import { ReactNode } from 'react'

import { cn } from '@/utils/cn'

const NextLink = ({
  href,
  children,
  className
}: {
  href: string
  children: ReactNode
  className?: string
}) => (
  <Link
    href={href}
    className={cn(
      'rounded-2.5 bg-black px-5 py-2.5 font-medium text-white',
      className
    )}
  >
    {children}
  </Link>
)

export default NextLink
