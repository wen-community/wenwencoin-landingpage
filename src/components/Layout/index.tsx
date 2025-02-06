import { Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { ReactNode } from 'react'

import { Overlay } from '@/containers'
import { cn } from '@/utils/cn'

import Header from '../Header'

const inter = Source_Code_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <>
      <Head>
        <title>Wen Wen Coin</title>
        <meta name="description" content="Wen Wen Coin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      {pathname === '/' && <Overlay />}
      <main
        className={cn(
          'h-full w-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent [&>*]:px-4 md:[&>*]:px-8 lg:[&>*]:px-16',
          inter.className
        )}
      >
        {/* <Header className="bg-transparent" /> */}
        {children}
        <Header
          style="secondary"
          className="flex-col gap-y-8 border-b-0 md:flex-row"
          removeImage={true}
        />
        <footer className="flex flex-col-reverse items-center justify-center gap-6 border-t py-8 text-sm md:flex-row">
          <p>© 2024 WEN. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}

export default Layout
