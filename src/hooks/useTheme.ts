import { useState, useEffect, useCallback } from 'react'

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme")
      if (savedTheme) {
        return savedTheme === "dark"
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch (error) {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", isDarkTheme ? "dark" : "light")
    } catch (error) {
      console.warn("Could not save theme preference:", error)
    }
  }, [isDarkTheme])

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => !prev)
  }, [])

  return {
    isDarkTheme,
    toggleTheme
  }
}