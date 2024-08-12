import Image from 'next/image'

const MapMarker = () => (
  <div className="absolute z-[401] flex w-max gap-2 rounded-2xl bg-white p-2 pl-0">
    <Image
      src="/wen_head_logo.png"
      alt="wen head logo"
      width={40}
      height={34}
      className=""
    />
    <div className="flex flex-col text-xs">
      <h6 className="font-bold">20.2k</h6>
      <p className="font-light text-black/60">PORTUGAL</p>
    </div>
  </div>
)

export default MapMarker
