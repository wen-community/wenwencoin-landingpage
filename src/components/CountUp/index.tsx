import { useEffect, useState } from 'react'

function CountUp({
  end,
  duration = 2000,
  start = 0
}: {
  end: number
  duration?: number
  start?: number
}) {
  const [count, setCount] = useState<number>(start)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp
      const progress: number = timestamp - startTime
      const percentage: number = Math.min(progress / duration, 1)
      const value: number = Math.floor(percentage * (end - start) + start)

      setCount(value)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count.toLocaleString()
}

export default CountUp
