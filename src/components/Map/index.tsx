import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import MapMarker from './MapMarker'

const Map = () => {
  const ZOOM_LEVEL = 3

  const lat = 52.5162
  const lng = 13.3777
  return (
    <div className="relative flex h-[695px] w-full">
      <MapContainer center={{ lat, lng }} zoom={ZOOM_LEVEL}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={10}
        />
        <>
          <div className="absolute z-[400] h-full w-full bg-gradient-to-b from-lightBlue/50 to-purple/50" />
          <MapMarker />
        </>
      </MapContainer>
    </div>
  )
}

export default Map
