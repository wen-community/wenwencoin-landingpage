import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'
import '@jup-ag/terminal/css'

import { Layout, SwapWidget } from '@/components'
import { AnimationProvider } from '@/contexts/AnimationContext'
import { PhantomWalletProvider } from '@/contexts/PhantomWalletContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PhantomWalletProvider>
      <SwapWidget />
      <AnimationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimationProvider>
      <Toaster
        position="top-right"
        containerStyle={{
          top: '1.25rem',
          right: '1.25rem'
        }}
      />
    </PhantomWalletProvider>
  )
}
