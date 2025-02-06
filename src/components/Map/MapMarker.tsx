import Link from 'next/link'

import ReactDOMServer from 'react-dom/server'
import { Marker } from 'react-leaflet'

import { divIcon } from 'leaflet'

import { usePhantomWallet } from '@/contexts/PhantomWalletContext'
import { IUser } from '@/types'

import { Pin, TelegramV2, TrashIcon, TwitterV2 } from '../icons'
import ExternalLink from '../icons/ExternalLink'

export const MarkerDiv = ({
  name,
  twitterName,
  telegramName,
  walletAddress,
  onDelete
}: {
  name: string
  twitterName: string
  telegramName: string | null
  walletAddress: string | null
  onDelete: () => void
}) => {
  const { publicKey } = usePhantomWallet()
  return (
    <div className="flex w-40 flex-col rounded-lg bg-black/90 px-3 py-2 pb-10 text-white">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">{name}</span>
      </div>
      {twitterName ? (
        <>
          <Link
            href={`https://x.com/${twitterName}`}
            target="_blank"
            className="flex items-center gap-1 text-xs !text-white"
          >
            <TwitterV2 />
            {twitterName}
            <ExternalLink className="-translate-y-0.5" />
          </Link>
        </>
      ) : (
        <>
          <span className="text-sm font-bold">{name}</span>
          <span className="flex items-center gap-1 text-xs text-white/60">
            <TwitterV2 /> N/A
          </span>
        </>
      )}

      {telegramName ? (
        <Link
          href={`https://t.me/${telegramName}`}
          target="_blank"
          className="mb-6 flex items-center gap-1 text-xs !text-white"
        >
          <TelegramV2 />
          {telegramName}
          <ExternalLink className="-translate-y-0.5" />
        </Link>
      ) : (
        <span className="mb-6 flex items-center gap-1 text-xs text-white/60">
          <TelegramV2 /> N/A
        </span>
      )}
      {walletAddress === publicKey && (
        <button
          className="absolute bottom-2 right-2 gap-2 text-white"
          aria-label="Delete"
          onClick={onDelete}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  )
}

const LeafletMarker = ({
  user,
  onDelete
}: {
  user: IUser
  onDelete: (walletAddress: string) => void
}) => {
  const icon = divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv
        name={user.username}
        twitterName={user.twitter_name}
        telegramName={user.telegram_name}
        walletAddress={user.wallet_address}
        onDelete={() => onDelete(user.wallet_address!)}
      />
    )
  })

  return (
    <Marker
      icon={icon}
      position={{ lat: Number(user.lat), lng: Number(user.lng) }}
    />
  )
}

export const markerIcon = () =>
  divIcon({
    html: ReactDOMServer.renderToString(<Pin />)
  })

export const pointIcon = (count: number, size: number) =>
  divIcon({
    html: ReactDOMServer.renderToString(
      <div
        className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-base font-semibold text-white"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {count}
      </div>
    )
  })
export default LeafletMarker
