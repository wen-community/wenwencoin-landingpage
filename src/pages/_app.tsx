import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'

import { Layout } from '@/components'
import { AnimationProvider } from '@/contexts/AnimationContext'
import { PhantomWalletProvider } from '@/contexts/PhantomWalletContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PhantomWalletProvider>
      <AnimationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimationProvider>
      <Toaster
        position="bottom-right"
        containerStyle={{
          bottom: '1.25rem',
          right: '1.25rem'
        }}
      />
    </PhantomWalletProvider>
  )
}
