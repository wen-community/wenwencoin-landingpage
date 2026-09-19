import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'

import Layout from '@/components/Layout'
import SwapWidget from '@/components/SwapWidget'
import { AnimationProvider } from '@/contexts/AnimationContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  )
}
