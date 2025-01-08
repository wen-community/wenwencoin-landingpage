import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useCallback } from 'react'

import { Telegram, Twitter } from '@/components'
import IMAGE_URL from '@/constants/ImageURL'
import { cn } from '@/utils/cn'

import { Cross, Hamburger } from '../icons'

const Header = ({
  className,
  style = 'primary',
  removeImage
}: {
  className?: string
  style?: 'primary' | 'secondary'
  removeImage?: boolean
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
        'h-max max-h-36 w-full overflow-y-hidden px-6 transition-[max-height] duration-500 ease-in-out md:px-16',
        {
          'fixed z-[1001] flex h-full max-h-screen flex-col bg-spaceBackground md:static md:max-h-36':
            menu === 'open' && style === 'primary',
          'h-max max-h-72': style === 'secondary'
        }
      )}
    >
      <div
        className={cn(
          'relative flex w-full items-center justify-between py-5 md:py-[55px]',
          className
        )}
      >
        <Link
          href="/"
          className={cn(
            'group relative left-0 w-max transition-transform duration-300 hover:scale-110 md:relative',
            { invisible: removeImage }
          )}
        >
          <Image
            src="/wenlogo.png"
            width={100}
            height={100}
            alt="Wen Wen Coin"
          />
          <span className="absolute bottom-[-6px] left-0 h-[2px] w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
        </Link>

        <nav
          className={cn(
            'font-white hidden w-full items-center justify-center gap-x-8 font-semibold md:flex',
            'md:ml-4 lg:ml-8 xl:ml-12'
          )}
        >
          <Link href="/#about">About</Link>
          <Link href="/brand">Content</Link>
          <Link href="/community">Map</Link>
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
            <Link
              href="https://x.com/wenwencoin"
              target="_blank"
              className="group relative text-gray-800 transition-transform duration-300 hover:scale-110"
            >
              <Twitter color="white" />
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              href="https://t.me/wenwencoinsol"
              target="_blank"
              className="group relative text-gray-800 transition-transform duration-300 hover:scale-110"
            >
              <Telegram color="white" />
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-white filter-none transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              href="https://birdeye.so/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk?chain=solana"
              target="_blank"
              className="group relative text-gray-800 transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={`${IMAGE_URL}/birdeye_logo.webp`}
                width={20}
                height={20}
                alt="Birdeye"
                className="invert filter sm:h-[20px] sm:w-[20px] md:h-[18px] md:w-[35px]"
              />
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-full scale-x-0 transform bg-white filter-none transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
          {/* <NextLink
            href="https://jup.ag/swap/USDC-WEN"
            target="_blank"
            className={`w-30 ${showBtnForMobile ? '' : 'hidden md:flex'} md:w-32`}
          >
            Buy WEN
          </NextLink> */}
          <button
            onClick={menu === 'open' ? handleClose : handleOpen}
            type="button"
            title="Toggle menu"
            className={cn('invert md:hidden', {
              hidden: style === 'secondary'
            })}
          >
            {menu === 'open' ? <Cross /> : <Hamburger />}
          </button>
        </div>
      </div>
      {menu === 'open' && style === 'primary' && (
        <div className="flex h-full flex-col justify-between py-14 md:hidden">
          <nav className="flex flex-col gap-5 text-2xl font-bold text-white">
            <Link href="/#about" className="group relative w-max">
              About
            </Link>
            <Link href="/brand" className="group relative w-max">
              Content
            </Link>
            <Link href="/community" className="group relative w-max">
              Map
            </Link>
          </nav>
          <div className="flex items-center gap-x-5">
            <Link
              href="https://x.com/wenwencoin"
              target="_blank"
              className="invert"
            >
              <Twitter />
            </Link>
            <Link
              href="https://t.me/wenwencoinsol"
              target="_blank"
              className="invert"
            >
              <Telegram />
            </Link>
            <Link
              href="https://birdeye.so/token/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk?chain=solana"
              target="_blank"
              className="invert"
            >
              <Image
                src={`${IMAGE_URL}/birdeye_logo.webp`}
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
