import { useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { divIcon } from 'leaflet'

import MapMarker from './MapMarker'

const Map = () => {
  const customMarker = useRef<HTMLDivElement | null>(null)

  const ZOOM_LEVEL = 3

  const lat = 52.5162
  const lng = 13.3777

  const createCustomMarkerIcon = () => {
    return divIcon({
      className: 'custom-marker-icon',
      html: `<div ref={${customMarker}}>${(<MapMarker />)}</div>`
    })
  }

  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer center={{ lat, lng }} zoom={ZOOM_LEVEL}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={10}
        />
        <Marker
          icon={createCustomMarkerIcon()}
          position={{ lat, lng }}
        ></Marker>
        <div className="absolute z-[400] h-full w-full bg-gradient-to-b from-lightBlue/50 to-purple/50" />
      </MapContainer>
    </div>
  )
}

export default Map
