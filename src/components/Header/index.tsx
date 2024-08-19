import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useCallback } from 'react'

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
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const menu = searchParams.get('menu')

  const handleOpen = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('menu', 'open')
    router.push(`${pathname}?${newSearchParams.toString()}`)
  }, [pathname, router, searchParams])

  const handleClose = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('menu')
    router.push(`${pathname}?${newSearchParams.toString()}`)
  }, [pathname, router, searchParams])

  return (
    <header
      className={cn(
        'h-full max-h-36 w-full overflow-y-hidden px-4 transition-[max-height] duration-500 ease-in-out md:px-16',
        {
          'fixed z-[1001] flex max-h-screen flex-col bg-white md:static md:max-h-36':
            menu === 'open' && style === 'primary',
          'h-max max-h-72': style === 'secondary'
        }
      )}
    >
      <div
        className={cn(
          'relative flex w-full items-center justify-between border-b border-lightGray py-5 md:py-[55px]',
          className
        )}
      >
        <Link href="/" className="static left-0 w-max md:absolute">
          <Image
            src="/wen_head_logo.png"
            width={73}
            height={52}
            alt="Wen Wen Coin"
          />
        </Link>
        <nav
          className={cn(
            'justity-self-center hidden w-full items-center justify-center gap-x-8 font-semibold lg:flex',
            {
              hidden: style === 'primary',
              'flex gap-x-4': style === 'secondary'
            }
          )}
        >
          <Link href="/#about">About</Link>
          <Link href="/brand">Brand</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/community">Community</Link>
        </nav>
        <div
          className={cn(
            'static right-0 flex flex-col-reverse items-center justify-end gap-x-5 gap-y-8 md:absolute md:flex-row',
            { 'flex-row': style === 'primary' }
          )}
        >
          <div
            className={cn('items-center gap-x-5 md:flex', {
              hidden: style === 'primary',
              flex: style === 'secondary'
            })}
          >
            <Link href="https://x.com/wenwencoin" target="_blank">
              <Twitter />
            </Link>
            <Link href="https://t.me/wenwencoinsol" target="_blank">
              <Telegram />
            </Link>
            <Link
              href="https://birdeye.so/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk?chain=solana"
              target="_blank"
            >
              <Image
                src="/birdeye_logo.png"
                width={16}
                height={16}
                alt="Birdeye"
              />
            </Link>
          </div>

          <Link
            href="https://jup.ag/swap/USDC-WEN"
            className="rounded-2.5 bg-black px-5 py-2.5 font-medium text-white"
            target="_blank"
          >
            Trade WEN
          </Link>
          <button
            onClick={menu === 'open' ? handleClose : handleOpen}
            type="button"
            title="Toggle menu"
            className={cn('md:hidden', {
              hidden: style === 'secondary'
            })}
          >
            {menu === 'open' ? <Cross /> : <Hamburger />}
          </button>
        </div>
      </div>
      {menu === 'open' && style === 'primary' && (
        <div className="flex h-full flex-col justify-between py-14 md:hidden">
          <nav className="flex flex-col gap-5 text-2xl font-bold">
            <Link href="/#about">About</Link>
            <Link href="/brand">Brand</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/community">Community</Link>
          </nav>
          <div className="flex items-center gap-x-5">
            <Link href="https://x.com/wenwencoin" target="_blank">
              <Twitter />
            </Link>
            <Link href="https://t.me/wenwencoinsol" target="_blank">
              <Telegram />
            </Link>
            <Link
              href="https://birdeye.so/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk?chain=solana"
              target="_blank"
            >
              <Image
                src="/birdeye_logo.png"
                width={16}
                height={16}
                alt="Birdeye"
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
