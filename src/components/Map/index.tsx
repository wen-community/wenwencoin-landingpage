import { useMemo } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { MAP_CENTER, ZOOM_LEVEL } from '@/constants'
import { ILocation } from '@/types'

import Marker from './MapMarker'

const Map = ({ markers }: { markers: ILocation[] }) => {
  const markerList = useMemo(
    () =>
      markers.map((location) => (
        <Marker key={location.id} location={location} />
      )),
    [markers]
  )

  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer
        center={{ lat: MAP_CENTER.lat, lng: MAP_CENTER.lng }}
        zoom={ZOOM_LEVEL}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={10}
        />
        {markerList}
      </MapContainer>
    </div>
  )
}

export default Map
