import { useEffect, useCallback } from 'react'
import type { SectionRefs } from '../types'
import { useThrottle } from './useDebounce'

export const useScroll = (
  sectionRefs: React.MutableRefObject<SectionRefs>,
  setActiveSection: (section: string) => void
) => {
  const handleScroll = useCallback(() => {
    const sections = Object.keys(sectionRefs.current)
    const scrollPosition = window.scrollY + 100
    
    requestAnimationFrame(() => {
      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    })
  }, [sectionRefs, setActiveSection])

  const throttledHandleScroll = useThrottle(handleScroll, 100)

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [throttledHandleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [sectionRefs])

  return { scrollToSection }
}