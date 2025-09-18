import { memo } from 'react'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../../data/personal'

interface FooterProps {
  isDarkTheme: boolean
  onSectionClick: (sectionId: string) => void
}

const quickLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
]

const services = [
  "Full-Stack Development",
  "AI/ML Solutions", 
  "Technical Consulting",
  "Code Review & Mentoring"
]

const socialLinks = [
  { 
    name: "GitHub", 
    icon: FaGithub, 
    url: personalInfo.social.github 
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    url: personalInfo.social.linkedin 
  }
]

export const Footer = memo<FooterProps>(({ isDarkTheme, onSectionClick }) => {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className={`text-lg md:text-xl font-semibold mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}>
              {personalInfo.name}
            </h3>
            <p className={`mb-4 text-sm md:text-base ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}>
              Full-Stack & AI Developer passionate about creating innovative solutions that make a difference.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon p-2 glassmorphism rounded-full cursor-pointer transition-all hover:scale-110 ${
                    isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                  }`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`text-base md:text-lg font-semibold mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionClick(link.id)}
                    className={`transition-colors hover:text-teal-500 text-sm md:text-base cursor-pointer ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`text-base md:text-lg font-semibold mb-4 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}>
              Services
            </h4>
            <ul className={`space-y-2 text-sm md:text-base ${
              isDarkTheme ? "text-gray-300" : "text-gray-600"
            }`}>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`pt-6 md:pt-8 border-t border-white/10 text-center text-sm md:text-base ${
          isDarkTheme ? "text-gray-400" : "text-gray-500"
        }`}>
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by {personalInfo.name}
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
})