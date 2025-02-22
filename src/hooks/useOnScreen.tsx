import { RefObject, useEffect, useMemo, useState } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      return new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      )
    }
    return null
  }, [])

  useEffect(() => {
    if (!ref.current || !observer) return
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [observer, ref])

  return isIntersecting
}
