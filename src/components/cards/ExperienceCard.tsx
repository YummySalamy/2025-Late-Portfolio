import { memo } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Card } from '../ui/Card'
import type { Experience } from '../../types'

interface ExperienceCardProps {
  experience: Experience
  index: number
  isDarkTheme: boolean
}

export const ExperienceCard = memo<ExperienceCardProps>(({ 
  experience, 
  index, 
  isDarkTheme 
}) => {
  const animationDelay = `${index * 0.2}s`
  
  return (
    <div
      className="relative animate-slide-in-up"
      style={{ animationDelay }}
    >
      <div className="absolute left-4 md:left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg" />
      
      <div className="ml-16 md:ml-20">
        <Card
          variant="strong"
          rounded="2xl"
          padding="lg"
          hover
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div className="mb-2 lg:mb-0">
              <h3 className={`text-lg md:text-xl font-semibold ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}>
                {experience.position}
              </h3>
              <p className="text-teal-500 font-medium">
                {experience.company}
              </p>
            </div>
            
            <div className="text-left lg:text-right">
              <p className={`font-medium text-sm md:text-base ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}>
                {experience.duration}
              </p>
              <p className={`text-xs md:text-sm ${
                isDarkTheme ? "text-gray-400" : "text-gray-500"
              }`}>
                {experience.location}
              </p>
              {experience.current && (
                <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs rounded-full mt-1">
                  Current
                </span>
              )}
            </div>
          </div>
          
          <ul className={`space-y-2 mb-6 text-sm md:text-base ${
            isDarkTheme ? "text-gray-300" : "text-gray-700"
          }`}>
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaChevronRight className="text-teal-500 mt-1 flex-shrink-0 w-3 h-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full ${
                  isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
})