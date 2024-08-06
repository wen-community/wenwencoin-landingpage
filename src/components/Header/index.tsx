import Image from 'next/image'
import Link from 'next/link'

import { Telegram, Twitter } from '@/components'

const Header = () => (
  <header className="mb-[33px] mt-[25px] grid w-full grid-cols-3 py-3.125">
    <Link href="/">
      <Image
        src="/wen_head_logo.png"
        width={73}
        height={52}
        alt="Wen Wen Coin"
      />
    </Link>
    <nav className="justity-self-center flex items-center justify-center gap-x-8 font-semibold">
      <Link href="/about">About</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/brand">Brand</Link>
      <Link href="/faq">FAQ</Link>
    </nav>
    <div className="flex items-center justify-end gap-x-5">
      <Twitter />
      <Telegram />
      <Image src="/birdeye_logo.png" width={16} height={16} alt="Birdeye" />
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
