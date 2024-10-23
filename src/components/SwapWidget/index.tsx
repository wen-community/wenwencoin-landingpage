import React, { useCallback, useEffect, useState } from 'react'

const SwapWidget = () => {
  const WEN_PUBLIC_ADDRESS = process.env.WEN_PUBLIC_ADDRESS
  const QUICKNODE_URL = process.env.QUICKNODE_URL
  const [initialized, setInitialized] = useState(false)

  const initializeJupiter = useCallback(async () => {
    try {
      const mod = await import('@jup-ag/terminal')
      const init = mod.init
      const SOL_MINT = 'So11111111111111111111111111111111111111112'
      init({
        displayMode: 'widget',
        endpoint: QUICKNODE_URL,
        strictTokenList: true,
        formProps: {
          fixedInputMint: false,
          fixedOutputMint: true,
          initialInputMint: SOL_MINT,
          initialOutputMint: WEN_PUBLIC_ADDRESS
        }
      })

      setInitialized(true)
    } catch (error) {
      console.error('Failed to load Jupiter Terminal:', error)
    }
  }, [QUICKNODE_URL, WEN_PUBLIC_ADDRESS])

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      initializeJupiter()
    }
  }, [initialized, initializeJupiter])

  return (
    <div id="jupiter-widget" className="absolute">
      {/* The widget will be rendered here */}
    </div>
  )
}

export default SwapWidget
