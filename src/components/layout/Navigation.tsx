import { memo } from 'react'
import type { NavigationItem } from '../../types'

interface NavigationProps {
  activeSection: string
  isDarkTheme: boolean
  onSectionClick: (sectionId: string) => void
}

const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

export const Navigation = memo<NavigationProps>(({ 
  activeSection, 
  isDarkTheme, 
  onSectionClick 
}) => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glassmorphism-strong rounded-full px-4 py-3 hidden md:block">
      <div className="flex items-center gap-4 lg:gap-6">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionClick(item.id)}
            className={`nav-item px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeSection === item.id
                ? isDarkTheme
                  ? "bg-teal-500 text-white"
                  : "bg-teal-600 text-white"
                : isDarkTheme
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
})