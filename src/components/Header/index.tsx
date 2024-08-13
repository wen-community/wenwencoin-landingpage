import Image from 'next/image'
import Link from 'next/link'

import { Telegram, Twitter } from '@/components'
import { cn } from '@/utils/cn'

const Header = ({
  className,
  style = 'primary'
}: {
  className?: string
  style?: 'primary' | 'secondary'
}) => (
  <header
    className={cn(
      'mb-[33px] mt-[25px] flex w-full items-center justify-between py-3.125',
      className
    )}
  >
    <Link href="/" className="w-max">
      <Image
        src="/wen_head_logo.png"
        width={73}
        height={52}
        alt="Wen Wen Coin"
      />
    </Link>
    <nav
      className={cn(
        'justity-self-center hidden items-center justify-center gap-x-8 font-semibold lg:flex',
        {
          hidden: style === 'primary',
          'flex gap-x-4': style === 'secondary'
        }
      )}
    >
      <Link href="/about">About</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/brand">Brand</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/community">Community</Link>
    </nav>
    <div className="flex flex-col-reverse items-center justify-end gap-x-5 gap-y-8 md:flex-row">
      <div
        className={cn('items-center gap-x-5 md:flex', {
          hidden: style === 'primary',
          flex: style === 'secondary'
        })}
      >
        <Twitter />
        <Telegram />
        <Image src="/birdeye_logo.png" width={16} height={16} alt="Birdeye" />
      </div>
      <button
        type="button"
        className="rounded-2.5 bg-black px-5 py-2.5 font-medium text-white"
      >
        Trade WEN
      </button>
    </div>
  </header>
)

export default Header
