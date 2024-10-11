import { useSearchParams } from 'next/navigation'

import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { DEFAULT_ZOOM_LEVEL, MAP_CENTER, MAP_MIN_ZOOM } from '@/constants'
import CONTINENTS_POSITION from '@/constants/Continents'
import { IUser } from '@/types'

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
  enableInteraction = false
}: {
  users: IUser[]
  enableInteraction: boolean
}) => {
  const searchParams = useSearchParams()
  const continent = searchParams.get('continent')
  const mapRef = useRef(null)
  const isMobile = window.matchMedia('(max-width: 600px)').matches
  const zoomEnable = isMobile || enableInteraction
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
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=yLxcIp3UUDBGuYbjZXuk"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={12}
        />
        <Cluster users={users} />
        <MapUpdater continent={continent} />
      </MapContainer>
    </div>
  )
}

export default Map
