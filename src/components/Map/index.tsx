import {
  MapContainer,
  // Marker,
  TileLayer
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import MapMarker from './MapMarker'

// import { Icon } from 'leaflet'

// const customIcon = new Icon({
//   iconUrl: '/wen_head_logo.png', // Replace with your icon path
//   iconSize: [41, 30],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
//   className: 'custom-icon' // We'll use this to style the icon
// })

const Map = () => {
  const ZOOM_LEVEL = 3

  const lat = 52.5162
  const lng = 13.3777
  return (
    <div className="relative flex aspect-21/9 w-full">
      <MapContainer center={{ lat, lng }} zoom={ZOOM_LEVEL}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          minZoom={2}
          maxZoom={10}
        />
        {/* <Marker position={{ lat, lng }} icon={customIcon}></Marker> */}
      </MapContainer>
      <div className="absolute z-[400] h-full w-full bg-gradient-to-b from-lightBlue/50 to-purple/50" />
      <MapMarker />
    </div>
  )
}

export default Map
