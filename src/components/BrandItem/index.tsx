'use client'
import Image from 'next/image'

import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/utils/cn'

import { Cross, Download } from '../icons'
import Modal from '../Modal'
import VisibilitySensor from '../VisibilitySensor'

interface ContentItem {
  url: string
  title: string
  width: number
  height: number
}

interface BrandItemProps {
  items: ContentItem[]
}

const BrandItem: React.FC<BrandItemProps> = ({ items }) => {
  const [selected, setSelected] = useState<ContentItem | null>(null)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const openModal = (item: ContentItem) => {
    setSelected(item)
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setSelected(null)
  }

  const downloadImage = async (url: string) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const link = document.createElement('a')
      const objectURL = URL.createObjectURL(blob)

      link.href = objectURL
      link.download = url.split('/').pop() || 'image.jpg'

      link.click()

      URL.revokeObjectURL(objectURL)
      closeModal()
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <div className="relative grid h-full w-full max-w-7xl grid-cols-2 gap-4 p-10 md:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          onClick={() => openModal(item)}
          className={cn(
            'relative flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-tertiary/10'
          )}
          layoutId={`card-${item.url}`}
        >
          <VisibilitySensor
            key={index}
            setIsVisible={setIsVisible}
            className="animate-fadeIn transition-opacity"
          >
            {isVisible && (
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="max-h-[90vh] max-w-full object-contain"
                  priority
                />
              </motion.div>
            )}
          </VisibilitySensor>
        </motion.div>
      ))}

      {selected && (
        <Modal
          title={selected.title}
          isVisible={isModalVisible}
          onClose={closeModal}
          type="full"
        >
          <div className="relative mb-4 flex justify-center">
            <Image
              src={selected.url}
              alt={selected.title}
              width={selected.width}
              height={selected.height}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>

          <div className="absolute bottom-6 right-6 z-[100] flex space-x-4">
            <button
              onClick={closeModal}
              className="relative rounded-2.5 border bg-black px-4 py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Close Image"
            >
              <Cross className="h-6 w-6 invert" />
            </button>

            <button
              onClick={() => downloadImage(selected.url)}
              className="relative rounded-2.5 border bg-black px-4 py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Download Image"
            >
              <Download className="h-6 w-6" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default BrandItem
