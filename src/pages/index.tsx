import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wen Wen Coin</title>
        <meta name="description" content="Wen Wen Coin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white selection:top-0">Hello Wen Wen Coin</main>
    </>
  )
}
