import React, { useCallback, useEffect, useState } from 'react'

const SwapWidget = () => {
  const WEN_PUBLIC_ADDRESS = process.env.WEN_PUBLIC_ADDRESS
  const QUICKNODE_URL = process.env.QUICKNODE_URL
  const [initialized, setInitialized] = useState(false)

  const initializeJupiter = useCallback(async () => {
    try {
      const mod = await import('@jup-ag/terminal')
      const init = mod.init

      init({
        displayMode: 'widget', // Setting the display mode to widget
        endpoint: QUICKNODE_URL, // Use your QuickNode endpoint
        formProps: {
          fixedInputMint: true, // Allow only SOL as input
          fixedOutputMint: true, // Allow only WEN as output
          swapMode: 'ExactIn', // Swap mode
          initialInputMint: 'So11111111111111111111111111111111111111112', // SOL mint address
          initialOutputMint: WEN_PUBLIC_ADDRESS // WEN token mint address from environment variable
        }
      })

      setInitialized(true) // Mark as initialized
    } catch (error) {
      console.error('Failed to load Jupiter Terminal:', error)
    }
  }, [QUICKNODE_URL, WEN_PUBLIC_ADDRESS]) // Dependencies for useCallback

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      initializeJupiter() // Call the memoized function
    }
  }, [initialized, initializeJupiter]) // Only necessary dependencies

  return (
    <div id="jupiter-widget" className="absolute">
      {/* The widget will be rendered here */}
    </div>
  )
}

export default SwapWidget
