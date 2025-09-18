import { useCallback, useRef } from 'react'

export const useDebounce = (callback: () => void, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  
  return useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(callback, delay)
  }, [callback, delay])
}

export const useThrottle = (callback: () => void, delay: number) => {
  const lastCall = useRef<number>(0)
  
  return useCallback(() => {
    const now = Date.now()
    if (now - lastCall.current >= delay) {
      lastCall.current = now
      callback()
    }
  }, [callback, delay])
}