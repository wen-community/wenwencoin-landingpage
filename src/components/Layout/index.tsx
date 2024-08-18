import { Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ReactNode, useEffect } from 'react'

import Lenis from 'lenis'

import { cn } from '@/utils/cn'

import Header from '../Header'

const inter = Source_Code_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Head>
        <title>Wen Wen Coin</title>
        <meta name="description" content="Wen Wen Coin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wen_head_logo.png" />
      </Head>
      <main
        className={cn(
          'max-w-screen h-full [&>*]:px-4 md:[&>*]:px-8 lg:[&>*]:px-16',
          inter.className
        )}
      >
        {pathname !== '/' && <Header className="bg-transparent" />}
        {children}
        <Header
          style="secondary"
          className="flex-col gap-y-8 border-b-0 md:flex-row"
        />
        <footer className="flex flex-col-reverse items-center justify-center gap-6 border-t py-8 text-sm md:flex-row">
          <p>© 2024 WEN. All rights reserved.</p>
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
            {/* <Link href="/cookies" className="underline">
              Cookies Settings
            </Link> */}
          </div>
        </footer>
      </main>
    </>
  )
}

export default Layout
