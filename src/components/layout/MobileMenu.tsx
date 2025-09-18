import { memo, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import type { NavigationItem } from '../../types'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
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

export const MobileMenu = memo<MobileMenuProps>(({ 
  isOpen, 
  setIsOpen, 
  activeSection, 
  isDarkTheme, 
  onSectionClick 
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setIsOpen])

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 left-4 z-50 md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Toggle menu"
      >
        <FaBars className={`w-5 h-5 ${isDarkTheme ? "text-white" : "text-gray-800"}`} />
      </button>
      
      {isOpen && (
        <div className="mobile-menu absolute top-16 left-0 glassmorphism-strong rounded-2xl p-4 min-w-[200px] animate-slide-down">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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
        </div>
      )}
    </div>
  )
})