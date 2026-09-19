import Script from 'next/script'

const PLUGIN_SRC = 'https://plugin.jup.ag/plugin-v1.js'
const SOL_MINT = 'So11111111111111111111111111111111111111112'

let initialised = false

// Jupiter Plugin is served from Jupiter's CDN and renders its own floating
// widget, so none of @jup-ag/* (or the wallet adapters it drags in) is part of
// our bundle. Loaded lazily so it never competes with the page itself.
const SwapWidget = () => {
  const WEN_MINT = process.env.WEN_PUBLIC_ADDRESS

  const initJupiter = () => {
    if (initialised || !window.Jupiter || !WEN_MINT) return
    initialised = true
    window.Jupiter.init({
      displayMode: 'widget',
      widgetStyle: { position: 'bottom-right', size: 'default' },
      formProps: {
        initialInputMint: SOL_MINT,
        initialOutputMint: WEN_MINT,
        fixedMint: WEN_MINT,
        swapMode: 'ExactInOrOut'
      }
    })
  }

  return <Script src={PLUGIN_SRC} strategy="lazyOnload" onReady={initJupiter} />
}

export default SwapWidget
