import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import {
  DEFAULT_ZOOM_LEVEL,
  HOLDERS_WORLDWIDE,
  MAP_CENTER,
  MAP_MIN_ZOOM
} from '@/constants'
import CONTINENTS_POSITION from '@/constants/Continents'
import { IUser } from '@/types'

import CountUp from '../CountUp'
import Cluster from './Cluster'

const MapUpdater = ({ continent }: { continent: string | null }) => {
  const map = useMap()

  useEffect(() => {
    if (continent && CONTINENTS_POSITION[continent]) {
      map.setView(CONTINENTS_POSITION[continent])
      map.setView([MAP_CENTER.lat, MAP_CENTER.lng])
    }
  }, [continent, map])

  return null
}

const Map = ({
  users,
  enableInteraction = false,
  showHolders = false
}: {
  users: IUser[]
  enableInteraction: boolean
  showHolders: boolean
}) => {
  const searchParams = useSearchParams()
  const continent = searchParams.get('continent')
  const mapRef = useRef(null)
  const isMobile = window.matchMedia('(max-width: 600px)').matches
  let zoomEnable = isMobile || enableInteraction
  const router = useRouter()
  if (zoomEnable && router.pathname == '/') {
    zoomEnable = false
  }
  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer
        ref={mapRef}
        center={[MAP_CENTER.lat, MAP_CENTER.lng]}
        zoom={enableInteraction ? DEFAULT_ZOOM_LEVEL : MAP_MIN_ZOOM}
        preferCanvas={true}
        zoomAnimation
        scrollWheelZoom={zoomEnable}
        dragging={zoomEnable}
        zoomControl={zoomEnable}
        doubleClickZoom={zoomEnable}
        touchZoom={zoomEnable}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={12}
        />
        <Cluster users={users} zoomEnable={zoomEnable} />
        <MapUpdater continent={continent} />
        {showHolders ? (
          <div className="absolute right-5 top-5 z-[500] flex flex-col items-end gap-2 rounded-lg bg-black/50 px-5 py-3 text-white">
            <h2 className="relative flex items-center gap-2 text-5xl font-semibold">
              <span className="relative top-0 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <span className="relative flex text-2xl">
                <CountUp end={HOLDERS_WORLDWIDE} />
              </span>
            </h2>
            <p className="text-base">Holders Worldwide</p>
          </div>
        ) : (
          ''
        )}
      </MapContainer>
    </div>
  )
}

export default Map
