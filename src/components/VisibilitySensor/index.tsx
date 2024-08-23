import { ReactNode, useRef } from 'react'

import useOnScreen from '@/hooks/useOnScreen'

const VisibilitySensor = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div className={className} ref={ref}>
      {isVisible ? children : null}
    </div>
  )
}

export default VisibilitySensor
