import { memo } from 'react'
import { ExperienceCard } from '../cards/ExperienceCard'
import { experiences } from '../../data/experiences'

interface ExperienceProps {
  isDarkTheme: boolean
}

export const Experience = memo<ExperienceProps>(({ isDarkTheme }) => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          Professional Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-amber-500" />
          
          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isDarkTheme={isDarkTheme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})