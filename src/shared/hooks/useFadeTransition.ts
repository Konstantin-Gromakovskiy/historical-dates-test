import { useEffect, useState } from 'react'

export function useFadeTransition<T>(data: T, duration: number = 1000): { visible: boolean, currentData: T } {
  const [visible, setVisible] = useState(true)
  const [currentData, setCurrentData] = useState(data)

  useEffect(() => {
    if (data !== currentData) {
      setVisible(false)

      const timeout = setTimeout(() => {
        setCurrentData(data)
        setVisible(true)
      }, duration)

      return () => clearTimeout(timeout)
    }
  }, [data, currentData, duration])

  return { visible, currentData }
}
