/* eslint-disable @next/next/no-sync-scripts */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://terminal.jup.ag/main-v3.js" data-preload />
      </Head>
      <body>
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
