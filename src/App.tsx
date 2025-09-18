import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScroll } from './hooks/useScroll'
import { preloadImages } from './utils/performance'
import type { SectionRefs } from './types'

// Layout Components
import { Navigation } from './components/layout/Navigation'
import { MobileMenu } from './components/layout/MobileMenu'
import { ThemeToggle } from './components/layout/ThemeToggle'
import { Footer } from './components/layout/Footer'

// Section Components
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

// Data
import { personalInfo } from './data/personal'
import { projects } from './data/projects'

const App: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRefs = useRef<SectionRefs>({})

  const { scrollToSection } = useScroll(sectionRefs, setActiveSection)

  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      personalInfo.avatar,
      ...projects.slice(0, 3).map(p => p.image)
    ]
    preloadImages(criticalImages)
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkTheme ? "dark" : ""}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 transition-all duration-500">
        <div className={`absolute inset-0 ${
          isDarkTheme
            ? "bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800"
            : "bg-gradient-to-br from-teal-50 via-amber-50 to-white"
        }`} />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full filter blur-3xl opacity-40 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-amber-400 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        isDarkTheme={isDarkTheme}
        onSectionClick={scrollToSection}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        isDarkTheme={isDarkTheme}
        onSectionClick={scrollToSection}
      />

      {/* Theme Toggle */}
      <ThemeToggle
        isDarkTheme={isDarkTheme}
        onToggle={toggleTheme}
      />

      {/* Main Content */}
      <div className="relative min-h-screen">
        <section ref={(el) => { sectionRefs.current["hero"] = el }}>
          <Hero
            isDarkTheme={isDarkTheme}
            onSectionClick={scrollToSection}
          />
        </section>

        <section ref={(el) => { sectionRefs.current["about"] = el }}>
          <About isDarkTheme={isDarkTheme} />
        </section>

        <section ref={(el) => { sectionRefs.current["skills"] = el }}>
          <Skills isDarkTheme={isDarkTheme} />
        </section>

        <section ref={(el) => { sectionRefs.current["projects"] = el }}>
          <Projects isDarkTheme={isDarkTheme} />
        </section>

        <section ref={(el) => { sectionRefs.current["experience"] = el }}>
          <Experience isDarkTheme={isDarkTheme} />
        </section>

        <Testimonials isDarkTheme={isDarkTheme} />

        <section ref={(el) => { sectionRefs.current["contact"] = el }}>
          <Contact isDarkTheme={isDarkTheme} />
        </section>
      </div>

      {/* Footer */}
      <Footer
        isDarkTheme={isDarkTheme}
        onSectionClick={scrollToSection}
      />
    </div>
  )
}

export default App