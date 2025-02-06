import Image from 'next/image'

import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { motion } from 'framer-motion'

const DexSection = () => {
  const logos = [
    { src: '/bybit_logo.webp', width: 138, height: 36, alt: 'Bybit' },
    { src: '/kraken_logo.webp', width: 164, height: 45, alt: 'Kraken' },
    { src: '/crypto.com_logo.webp', width: 213, height: 41, alt: 'Crypto.com' },
    { src: '/kucoin_logo.webp', width: 149, height: 43, alt: 'Kucoin' },
    { src: '/htx_logo.webp', width: 106, height: 41, alt: 'HTX' },
    { src: '/gate_logo.webp', width: 169, height: 52, alt: 'Gate' },
    { src: '/bitstamp.png', width: 169, height: 52, alt: 'BITSTAMP' },
    { src: '/coinone-1.webp', width: 169, height: 52, alt: 'Coinone' }
  ]

  const duplicatedLogos = [...logos, ...logos, ...logos]
  const [ref, { width }] = useMeasure()
  const [duration, setDuration] = useState(10)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(20)
      } else {
        setDuration(10)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="flex flex-col items-center overflow-hidden !px-0">
      <h3 className="text-md px-4 pb-5 pt-20 text-center font-bold md:px-8 md:text-xl lg:px-16">
        WEN is trusted on 30+ CEXs and DEXes
      </h3>
      <div className="relative w-full overflow-hidden bg-backgroundSecondary py-8">
        <motion.div
          className="flex gap-10 md:gap-32 lg:gap-32"
          animate={{
            x: ['0%', `-${width}px`],
            transition: {
              ease: 'linear',
              duration: duration,
              repeat: Infinity
            }
          }}
          ref={ref}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow basis-[25%] md:basis-[10%] lg:basis-[10%]"
            >
              <div className="flex h-full flex-col items-center justify-center px-4 text-6xl md:px-10 lg:px-36">
                <Image
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  className="md:h-auto md:w-auto"
                  priority
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DexSection
