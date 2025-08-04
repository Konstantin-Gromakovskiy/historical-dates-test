import { useEffect, useRef, useState, FC } from 'react'

interface AnimatedNumberProps {
  value: number
  duration?: number // ms
}

const AnimatedNumber: FC<AnimatedNumberProps> = ({ value, duration = 800 }) => {
  const [displayedValue, setDisplayedValue] = useState(value)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef(value)

  useEffect(() => {
    cancelAnimationFrame(rafRef.current!)

    startTimeRef.current = null
    startValueRef.current = displayedValue

    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time

      const elapsed = time - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const newValue = Math.round(
        startValueRef.current + (value - startValueRef.current) * easeInOut(progress),
      )

      setDisplayedValue(newValue)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current!)
    }
  }, [value])

  return <span>{displayedValue}</span>
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default AnimatedNumber
