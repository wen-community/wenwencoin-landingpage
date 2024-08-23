import Image from 'next/image'

import { PawPrint } from '@/components'

const Overlay = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1.8,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="relative w-max items-center">
        <Image
          src="/wen_full_body.png"
          width={278.5}
          height={321}
          className="relative z-20 w-40 transition-transform duration-300 ease-in-out hover:scale-125 md:h-80 md:w-72"
          alt="Wen Wen Coin"
        />
      </div>
      <button
        title="view content"
        type="button"
        onClick={handleScroll}
        className="absolute bottom-10 flex h-14 w-8 rounded-full border-[1.5px] border-white"
      >
        <PawPrint className="animate-travel px-1" color="white" />
      </button>
    </>
  )
}

export default Overlay
