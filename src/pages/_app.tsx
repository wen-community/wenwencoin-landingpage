import type { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast'

import '@/styles/globals.css'

import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster
        position="bottom-right"
        containerStyle={{
          bottom: '1.25rem',
          right: '1.25rem'
        }}
      />
    </>
  )
}
