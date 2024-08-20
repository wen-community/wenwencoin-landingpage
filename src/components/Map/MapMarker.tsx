import Image from 'next/image'

import ReactDOMServer from 'react-dom/server'
import { Marker } from 'react-leaflet'

import { divIcon } from 'leaflet'

import { ILocation } from '@/types'

const MarkerDiv = ({
  count,
  cityName
}: {
  count: number
  cityName: string
}) => (
  <div className="flex w-max gap-2 rounded-2xl bg-white p-2 pl-0">
    <Image
      src="/wen_head_logo.png"
      alt="wen head logo"
      width={40}
      height={34}
      className=""
    />
    <div className="flex flex-col text-xs">
      <h6 className="font-bold">{count}</h6>
      <p className="font-light text-black/60">{cityName}</p>
    </div>
  </div>
)

const LeafletMarker = ({ location }: { location: ILocation }) => {
  const icon = divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv count={location.user_count} cityName={location.city} />
    )
  })

  return (
    <Marker
      icon={icon}
      position={{ lat: Number(location.lat), lng: Number(location.lng) }}
    />
  )
}

export const markerIcon = (location: ILocation) =>
  divIcon({
    html: ReactDOMServer.renderToString(
      <MarkerDiv count={location.user_count} cityName={location.city} />
    )
  })

export const pointIcon = (count: number, size: number) =>
  divIcon({
    html: ReactDOMServer.renderToString(
      <div
        className="flex items-center justify-center rounded-full bg-purple p-1 text-base font-semibold text-white"
        style={{ width: `${size}px;`, height: `${size}px;` }}
      >
        {count}
      </div>
    )
  })
export default LeafletMarker
