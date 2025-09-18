import { memo, useState } from 'react'
import { FaLaptopCode, FaDatabase, FaBrain, FaCloud, FaMobile, FaChevronUp, FaPlus } from 'react-icons/fa'
import { Card } from '../ui/Card'
import { SkillCard } from '../cards/SkillCard'
import { getSkillsByCategory } from '../../data/skills'
import { getCategoryColor } from '../../utils/animations'

interface SkillsProps {
  isDarkTheme: boolean
}

const categoryIcons = {
  Frontend: FaLaptopCode,
  Backend: FaDatabase,
  'AI/ML': FaBrain,
  DevOps: FaCloud,
  Mobile: FaMobile,
}

export const Skills = memo<SkillsProps>(({ isDarkTheme }) => {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({})
  const skillsByCategory = getSkillsByCategory()

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          Technical Skills & Expertise
        </h2>
        
        <p className={`text-center mb-8 md:mb-12 text-base md:text-lg ${
          isDarkTheme ? "text-gray-300" : "text-gray-600"
        }`}>
          Explore my expertise across different technology domains
        </p>
        
        <div className="relative">
          <div className="overflow-x-auto scroll-container pb-4">
            <div className="flex gap-6 md:gap-8 min-w-max px-4">
              {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
                const isExpanded = expandedCategories[category]
                const displayedSkills = isExpanded ? categorySkills : categorySkills.slice(0, 4)
                const remainingCount = categorySkills.length - 4
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
                const colors = getCategoryColor(category)

                return (
                  <div
                    key={category}
                    className="flex-shrink-0 w-80 md:w-96 animate-slide-in-up"
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <Card variant="strong" rounded="3xl" padding="lg" className="h-full">
                      <div className="text-center mb-6 md:mb-8">
                        <div className="flex justify-center mb-4">
                          <div className={`p-4 rounded-full ${colors.bg}`}>
                            <IconComponent className={`${colors.primary} w-8 h-8 md:w-10 md:h-10`} />
                          </div>
                        </div>
                        
                        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                          isDarkTheme ? "text-white" : "text-gray-800"
                        }`}>
                          {category}
                        </h3>
                        
                        <div className={`w-16 h-1 mx-auto rounded-full bg-gradient-to-r ${colors.gradient}`} />
                      </div>
                      
                      <div className="space-y-4">
                        {displayedSkills.map((skill, skillIndex) => (
                          <SkillCard
                            key={skill.name}
                            skill={skill}
                            categoryIndex={categoryIndex}
                            skillIndex={skillIndex}
                            isDarkTheme={isDarkTheme}
                          />
                        ))}
                      </div>
                      
                      {categorySkills.length > 4 && (
                        <div className="mt-6 pt-6 border-t border-white/10 text-center">
                          <button
                            onClick={() => toggleCategory(category)}
                            className={`flex items-center justify-center gap-2 mx-auto px-4 py-2 rounded-lg transition-all cursor-pointer ${
                              isDarkTheme
                                ? "text-gray-400 hover:text-white hover:bg-white/10"
                                : "text-gray-500 hover:text-gray-800 hover:bg-black/10"
                            }`}
                          >
                            {isExpanded ? (
                              <>
                                <FaChevronUp className="w-3 h-3" />
                                <span className="text-sm">Show Less</span>
                              </>
                            ) : (
                              <>
                                <FaPlus className="w-3 h-3" />
                                <span className="text-sm">+{remainingCount} more</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                      
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex justify-between items-center text-sm">
                          <span className={isDarkTheme ? "text-gray-400" : "text-gray-500"}>
                            {categorySkills.length} Skills
                          </span>
                          <div className="flex gap-1">
                            {categorySkills.map((skill, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                  skill.level === "Expert"
                                    ? "bg-green-500"
                                    : skill.level === "Advanced"
                                      ? "bg-blue-500"
                                      : skill.level === "Intermediate"
                                        ? "bg-yellow-500"
                                        : "bg-gray-500"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 lg:hidden">
            <div className={`flex items-center gap-2 text-sm ${
              isDarkTheme ? "text-gray-400" : "text-gray-500"
            }`}>
              <span>Swipe to explore more skills</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <div
                  className="w-2 h-2 rounded-full bg-teal-500/50 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-teal-500/25 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16">
          <Card variant="strong" rounded="2xl" padding="lg">
            <h3 className={`text-xl md:text-2xl font-bold text-center mb-6 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}>
              Skills Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                const expertCount = categorySkills.filter(skill => skill.level === "Expert").length
                const advancedCount = categorySkills.filter(skill => skill.level === "Advanced").length
                const colors = getCategoryColor(category)

                return (
                  <div key={category} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold mb-1 ${colors.primary}`}>
                      {categorySkills.length}
                    </div>
                    <div className={`text-xs md:text-sm font-medium mb-1 ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}>
                      {category}
                    </div>
                    <div className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                      {expertCount + advancedCount} Advanced+
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
})