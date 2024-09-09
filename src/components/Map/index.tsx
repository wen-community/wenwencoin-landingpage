import { useSearchParams } from 'next/navigation'

import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { MAP_CENTER, ZOOM_LEVEL } from '@/constants'
import CONTINENTS_POSITION from '@/constants/Continents'
import { IUser } from '@/types'

import Cluster from './Cluster'

const MapUpdater = ({ continent }: { continent: string | null }) => {
  const map = useMap()

  useEffect(() => {
    if (continent && CONTINENTS_POSITION[continent]) {
      map.setView(CONTINENTS_POSITION[continent], ZOOM_LEVEL)
    } else {
      map.setView([MAP_CENTER.lat, MAP_CENTER.lng], 2)
    }
  }, [continent, map])

  return null
}

const Map = ({ users }: { users: IUser[] }) => {
  const searchParams = useSearchParams()
  const continent = searchParams.get('continent')
  const mapRef = useRef(null)

  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer
        ref={mapRef}
        center={[MAP_CENTER.lat, MAP_CENTER.lng]}
        zoom={5}
        preferCanvas={true}
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
