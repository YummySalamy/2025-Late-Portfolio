import { memo } from 'react'
import { FaMapMarkerAlt, FaEye, FaEnvelope, FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { LazyImage } from '../ui/LazyImage'
import { personalInfo } from '../../data/personal'

interface HeroProps {
  isDarkTheme: boolean
  onSectionClick: (sectionId: string) => void
}

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: personalInfo.social.github },
  { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin },
  { name: "Email", icon: FaEnvelope, url: personalInfo.social.email },
]

export const Hero = memo<HeroProps>(({ isDarkTheme, onSectionClick }) => {
  const viewResume = () => {
    window.open(personalInfo.resume, "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
        <Card
          variant="strong"
          rounded="3xl"
          padding="lg"
          className="mb-8"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-6 md:mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-purple-500 to-amber-400 rounded-full animate-pulse-glow" />
            <LazyImage
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-full h-full rounded-full border-4 border-white/50 shadow-2xl object-cover"
              containerClassName="relative w-full h-full"
              placeholder={
                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-2xl font-bold">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
              }
            />
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-colors ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}>
            {personalInfo.name}
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 transition-colors ${
            isDarkTheme ? "text-teal-300" : "text-teal-600"
          }`}>
            {personalInfo.title}
          </p>
          
          <div className={`flex items-center justify-center gap-2 mb-6 md:mb-8 text-sm md:text-lg ${
            isDarkTheme ? "text-gray-300" : "text-gray-600"
          }`}>
            <FaMapMarkerAlt />
            <span>{personalInfo.location}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<FaEye className="w-4 h-4" />}
              onClick={viewResume}
            >
              View Resume
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<FaEnvelope className="w-4 h-4" />}
              onClick={() => onSectionClick("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon p-3 md:p-4 glassmorphism rounded-full cursor-pointer transition-all hover:scale-110 ${
                  isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                }`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </Card>
        
        <button 
          onClick={() => onSectionClick("about")} 
          className="animate-bounce cursor-pointer"
        >
          <FaChevronDown className={`w-6 h-6 md:w-8 md:h-8 ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`} />
        </button>
      </div>
    </section>
  )
})