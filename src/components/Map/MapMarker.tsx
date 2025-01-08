import Link from 'next/link'

import ReactDOMServer from 'react-dom/server'
import { Marker } from 'react-leaflet'

import { divIcon } from 'leaflet'

import { IUser } from '@/types'

import { Pin, TelegramV2, TwitterV2 } from '../icons'
import ExternalLink from '../icons/ExternalLink'

export const MarkerDiv = ({
  name,
  twitterName,
  telegramName
}: {
  name: string
  twitterName: string
  telegramName: string | null
}) => (
  <div className="flex w-40 flex-col rounded-lg bg-black/90 px-3 py-2 text-white">
    {twitterName ? (
      <>
        <span className="text-sm font-bold">{name}</span>
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
        className="flex items-center gap-1 text-xs !text-white"
      >
        <TelegramV2 />
        {telegramName}
        <ExternalLink className="-translate-y-0.5" />
      </Link>
    ) : (
      <span className="flex items-center gap-1 text-xs text-white/60">
        <TelegramV2 /> N/A
      </span>
    )}
  </div>
)

const LeafletMarker = ({ user }: { user: IUser }) => {
  const icon = divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv
        name={user.username}
        twitterName={user.twitter_name}
        telegramName={user.telegram_name}
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
        style={{ width: `${size}px;`, height: `${size}px;` }}
      >
        {count}
      </div>
    )
  })
export default LeafletMarker
