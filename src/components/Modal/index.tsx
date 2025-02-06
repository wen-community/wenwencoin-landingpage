import { FC, ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/utils/cn'

interface IModal {
  title?: string
  isVisible: boolean
  onClose?: () => void
  children: ReactElement | ReactElement[]
  type?: 'small' | 'full'
}

const ModalWrapper: FC<IModal> = ({ children, isVisible, onClose, type }) => (
  <div
    className={cn(
      'fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-300 ease-in-out',
      {
        'pointer-events-auto opacity-100': isVisible,
        'pointer-events-none opacity-0': !isVisible
      }
    )}
    onClick={() => onClose && onClose()}
  >
    <div
      className={cn(
        'relative max-h-[90vh] w-full max-w-3xl animate-float-zoom overflow-hidden rounded-lg bg-[#11131C] shadow-lg transition-transform duration-500 ease-in-out',
        {
          'h-auto p-4': type === 'small',
          'h-full max-h-[90vh] p-6': type === 'full'
        }
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex h-full items-center justify-center">
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  </div>
)

const Modal: FC<IModal> = ({ title, children, isVisible, onClose, type }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser && typeof window !== 'undefined') {
    const modalRoot = document.getElementById('modal-root')
    if (modalRoot) {
      return createPortal(
        <ModalWrapper
          type={type}
          title={title}
          isVisible={isVisible}
          onClose={onClose}
        >
          {children}
        </ModalWrapper>,
        modalRoot
      )
    }
  }

  return null
}

export default Modal
