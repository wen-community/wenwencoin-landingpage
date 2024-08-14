import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { Telegram, Twitter } from '@/components'
import { cn } from '@/utils/cn'

import { Cross, Hamburger } from '../icons'

const Header = ({
  className,
  style = 'primary'
}: {
  className?: string
  style?: 'primary' | 'secondary'
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={cn(
        'h-full max-h-36 w-full overflow-y-hidden transition-[max-height] duration-500 ease-in-out',
        {
          'fixed z-[1001] flex max-h-screen flex-col bg-white md:static md:max-h-36':
            isOpen
        }
      )}
    >
      <div
        className={cn(
          'flex w-full items-center justify-between border-b border-lightGray pb-[55px] pt-[37px] md:border-b-0',
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
        <div
          className={cn(
            'flex flex-col-reverse items-center justify-end gap-x-5 gap-y-8 md:flex-row',
            { 'flex-row': style === 'primary' }
          )}
        >
          <div
            className={cn('items-center gap-x-5 md:flex', {
              hidden: style === 'primary',
              flex: style === 'secondary'
            })}
          >
            <Twitter />
            <Telegram />
            <Image
              src="/birdeye_logo.png"
              width={16}
              height={16}
              alt="Birdeye"
            />
          </div>

          <button
            type="button"
            className="rounded-2.5 bg-black px-5 py-2.5 font-medium text-white"
          >
            Trade WEN
          </button>
          <button
            onClick={() => setIsOpen((val) => !val)}
            type="button"
            title="Toggle menu"
            className={cn('md:hidden', {
              hidden: style === 'secondary'
            })}
          >
            {isOpen ? <Cross /> : <Hamburger />}
          </button>
        </div>
      </div>
      {isOpen && style === 'primary' && (
        <div className="flex h-full flex-col justify-between py-14 md:hidden">
          <nav className="flex flex-col gap-5 text-2xl font-bold">
            <Link href="/about">About</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/brand">Brand</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/community">Community</Link>
          </nav>
          <div className="flex items-center gap-x-5">
            <Twitter />
            <Telegram />
            <Image
              src="/birdeye_logo.png"
              width={16}
              height={16}
              alt="Birdeye"
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
