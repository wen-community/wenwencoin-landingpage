import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID
} from '@solana/spl-token'
import { Connection, ParsedAccountData, PublicKey } from '@solana/web3.js'

import { MIN_WEN_AMOUNT } from '@/constants'

interface Solana {
  isPhantom: boolean
  publicKey: PublicKey | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  on: (
    event: 'connect' | 'disconnect',
    handler: (args: unknown) => void
  ) => void
  request: (method: string, params: unknown) => Promise<unknown>
}

// Context type definition
interface PhantomWalletContextType {
  wallet: Solana | null
  publicKey: string | null
  connected: boolean
  isEligible: boolean
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

const PhantomWalletContext = createContext<
  PhantomWalletContextType | undefined
>(undefined)

interface PhantomWalletProviderProps {
  children: ReactNode
}

export const PhantomWalletProvider: React.FC<PhantomWalletProviderProps> = ({
  children
}) => {
  const [wallet, setWallet] = useState<Solana | null>(null)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [connected, setConnected] = useState<boolean>(false)
  const [isEligible, setIsEligible] = useState<boolean>(false)

  useEffect(() => {
    const { solana } = window as unknown as { solana: Solana } // Apply the Solana type here

    if (solana?.isPhantom) {
      setWallet(solana)

      solana.on('connect', () => {
        setPublicKey(solana.publicKey?.toString() || null)
        setConnected(true)
      })

      solana.on('disconnect', () => {
        setPublicKey(null)
        setConnected(false)
      })
    }
  }, [])

  const getTokenBalance = useCallback(async () => {
    if (!publicKey || !wallet) {
      console.error('Wallet is not connected')
      return
    }

    try {
      const connection = new Connection(process.env.QUICKNODE_URL!)
      const ownerPublicKey = new PublicKey(publicKey)
      const mintPublicKey = new PublicKey(process.env.WEN_PUBLIC_ADDRESS!)
      const [associatedTokenAddress] = await PublicKey.findProgramAddress(
        [
          ownerPublicKey.toBuffer(),
          TOKEN_PROGRAM_ID.toBuffer(),
          mintPublicKey.toBuffer()
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
      )
      const info = await connection.getTokenAccountBalance(
        associatedTokenAddress
      )
      const amount = info?.value?.amount || 0
      const mintInfo = await connection.getParsedAccountInfo(mintPublicKey)
      const decimals =
        (mintInfo.value?.data as ParsedAccountData)?.parsed?.info?.decimals || 0
      const WenCoinAmount = Number(amount) / Math.pow(10, decimals)

      if (WenCoinAmount && WenCoinAmount >= Number(MIN_WEN_AMOUNT))
        setIsEligible(true)
    } catch (err) {
      console.error('Failed to get token balance:', err)
      return
    }
  }, [publicKey, wallet])

  const connect = useCallback(async () => {
    if (wallet) {
      try {
        await wallet.connect()
      } catch (err) {
        console.error('Failed to connect Phantom Wallet:', err)
      }
    } else {
      alert('Phantom Wallet is not installed!')
    }
  }, [wallet])

  const disconnect = useCallback(async () => {
    if (wallet) {
      try {
        await wallet.disconnect()
      } catch (err) {
        console.error('Failed to disconnect Phantom Wallet:', err)
      }
    }
  }, [wallet])

  const contextValue: PhantomWalletContextType = {
    wallet,
    publicKey,
    connected,
    connect,
    disconnect,
    isEligible
  }

  useEffect(() => {
    getTokenBalance()
  }, [getTokenBalance])

  return (
    <PhantomWalletContext.Provider value={contextValue}>
      {children}
    </PhantomWalletContext.Provider>
  )
}

export const usePhantomWallet = (): PhantomWalletContextType => {
  const context = useContext(PhantomWalletContext)
  if (!context) {
    throw new Error(
      'usePhantomWallet must be used within a PhantomWalletProvider'
    )
  }
  return context
}
