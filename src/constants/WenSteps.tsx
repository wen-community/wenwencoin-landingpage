import Image from 'next/image'
import Link from 'next/link'

import { ArrowLeftRight, Solana, Wallet } from '@/components'

const IMAGE_URL =
  'https://niwzrpzmgomfotvsyjsy.supabase.co/storage/v1/object/public/assets'

console.log(IMAGE_URL)

const BUY_WEN_STEPS = [
  {
    icon: <Wallet />,
    title: 'Create a Wallet',
    content:
      'Download Phantom or your wallet of choice from the app store, google play store or Chrome extension  for free.'
  },
  {
    icon: <Solana />,
    title: 'Get Solana',
    content:
      'You can buy Solana directly in the phantom wallet or transfer from another exchange and send it to your wallet.'
  },
  {
    icon: (
      <Image
        src={`${IMAGE_URL}/jupiter_logo.png`}
        width={40}
        height={40}
        alt="Jupiter"
      />
    ),
    title: 'Go to Jupiter',
    content: (
      <>
        Go to{' '}
        <Link href="https://jup.ag/swap/SOL-WEN" target="_blank">
          {' '}
          https://jup.ag/swap/SOL-WEN{' '}
        </Link>{' '}
        in the Phantom Mobile app browser and connect your wallet.
      </>
    )
  },
  {
    icon: <ArrowLeftRight />,
    title: 'Convert your SOL to WEN',
    content: 'Now that you are on Jupiter, swap your SOL to WEN.'
  }
]

export default BUY_WEN_STEPS
