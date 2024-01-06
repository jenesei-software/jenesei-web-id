import { useEffect } from 'react'

export const useVibration = () => {
  const vibrate = (duration: number) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(duration)
    }
  }

  useEffect(() => {
    return () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(0)
      }
    }
  }, [])

  return vibrate
}
