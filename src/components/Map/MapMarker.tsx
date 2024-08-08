import Image from 'next/image'

const MapMarker = () => (
  <div className="absolute left-1/2 top-1/2 z-[401]">
    <Image
      src="/map_marker.png"
      alt="map marker"
      width={118}
      height={50}
      className="h-16"
    />
    <div className="absolute left-1 top-2.5 flex gap-2">
      <Image
        src="/wen_head_logo.png"
        alt="wen head logo"
        width={37}
        height={34}
        className=""
      />
      <div className="flex flex-col text-xs">
        <h6 className="font-bold">20.2k</h6>
        <p className="font-light">PORTUGAL</p>
      </div>
    </div>
  </div>
)

export default MapMarker
