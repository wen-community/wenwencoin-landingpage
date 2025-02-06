'use client'
import Image from 'next/image'

import React, { useState } from 'react'

import { Cross, Download } from '../icons'
import Modal from '../Modal'
import VisibilitySensor from '../VisibilitySensor'

interface ContentItem {
  url: string
  title: string
  width: number
  height: number
}

interface MasonryGalleryProps {
  items: ContentItem[]
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<ContentItem | null>(null)

  const openModal = (item: ContentItem) => {
    setSelectedImage(item)
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setSelectedImage(null)
  }

  const chunkedItems: ContentItem[][] = [[], [], [], []]

  items.forEach((item, index) => {
    chunkedItems[index % 4].push(item)
  })

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
    <div className="columns-[300px] space-y-4">
      {items.map((item, index) => (
        <VisibilitySensor
          key={index}
          setIsVisible={setIsVisible}
          className="animate-fadeIn transition-opacity"
        >
          {isVisible && (
            <div className="flex h-full items-center justify-center transition-all duration-300 ease-in-out md:justify-start">
              <Image
                src={item.url}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="cursor-pointer rounded-lg bg-tertiary/15 object-cover transition-[max-height] duration-500 ease-in-out"
                onClick={() => openModal(item)}
                style={{ maxHeight: '200px' }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement
                  target.parentElement!.style.height = 'auto'
                  target.style.maxHeight = '700px'
                }}
              />
            </div>
          )}
        </VisibilitySensor>
      ))}
      {selectedImage && (
        <Modal
          title={selectedImage.title}
          isVisible={isModalVisible}
          onClose={closeModal}
          type="full"
        >
          <div className="relative mb-4 flex justify-center">
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={3000}
              height={3000}
              className="max-h-[90vh] w-full max-w-full rounded-xl object-contain"
            />
          </div>

          <div className="absolute right-6 top-6 z-[100] flex space-x-4">
            <button
              onClick={closeModal}
              className="relative rounded-2.5 border bg-black px-4 py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Close Image"
            >
              <Cross className="h-6 w-6 invert" />
            </button>

            <button
              onClick={() => downloadImage(selectedImage.url)}
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

export default MasonryGallery
