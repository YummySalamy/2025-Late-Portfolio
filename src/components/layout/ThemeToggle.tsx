import { memo } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

interface ThemeToggleProps {
  isDarkTheme: boolean
  onToggle: () => void
}

export const ThemeToggle = memo<ThemeToggleProps>(({ isDarkTheme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95 animate-pulse-glow cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDarkTheme ? (
        <FaSun className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
      ) : (
        <FaMoon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      )}
    </button>
  )
})