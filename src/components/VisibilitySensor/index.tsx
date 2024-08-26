import { ReactNode, useEffect, useRef } from 'react'

import useOnScreen from '@/hooks/useOnScreen'

const VisibilitySensor = ({
  children,
  className,
  setIsVisible
}: {
  children: ReactNode
  className?: string
  setIsVisible: (isVisible: boolean) => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    setIsVisible(isVisible)
  }, [isVisible, setIsVisible])

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}

export default VisibilitySensor
