import Link from 'next/link'

import ReactDOMServer from 'react-dom/server'
import { Marker } from 'react-leaflet'

import { divIcon } from 'leaflet'

import { IUser } from '@/types'

import { TwitterV2 } from '../icons'
import ExternalLink from '../icons/ExternalLink'

const MarkerDiv = ({
  name,
  twitterName
}: {
  name: string
  twitterName: string
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
  </div>
)

const LeafletMarker = ({ user }: { user: IUser }) => {
  const icon = divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv name={user.username} twitterName={user.twitter_name} />
    )
  })

  return (
    <Marker
      icon={icon}
      position={{ lat: Number(user.lat), lng: Number(user.lng) }}
    />
  )
}

export const markerIcon = (user: IUser) =>
  divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv name={user.username} twitterName={user.twitter_name} />
    )
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
