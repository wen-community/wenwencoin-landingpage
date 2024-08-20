import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { MAP_CENTER, ZOOM_LEVEL } from '@/constants'
import { ILocation } from '@/types'

import Cluster from './Cluster'

const Map = ({ markers }: { markers: ILocation[] }) => {
  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer
        center={{ lat: MAP_CENTER.lat, lng: MAP_CENTER.lng }}
        zoom={ZOOM_LEVEL}
        preferCanvas={true}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=yLxcIp3UUDBGuYbjZXuk"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={10}
        />
        <Cluster locations={markers} />
      </MapContainer>
    </div>
  )
}

export default Map
