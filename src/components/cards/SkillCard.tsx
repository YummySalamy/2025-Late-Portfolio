import { memo } from 'react'
import { Card } from '../ui/Card'
import type { Skill } from '../../types'
import { getLevelColor, getSkillLevelWidth } from '../../utils/animations'

interface SkillCardProps {
  skill: Skill
  categoryIndex: number
  skillIndex: number
  isDarkTheme: boolean
}

export const SkillCard = memo<SkillCardProps>(({ 
  skill, 
  categoryIndex, 
  skillIndex, 
  isDarkTheme 
}) => {
  const animationDelay = `${categoryIndex * 0.1 + skillIndex * 0.05}s`
  
  return (
    <Card
      variant="glassmorphism"
      rounded="xl"
      padding="md"
      hover
      className="group animate-slide-in-up"
      style={{ animationDelay }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className={`skill-icon text-lg transition-all duration-300 group-hover:scale-110 group-hover:text-teal-500 ${
            isDarkTheme ? "text-gray-300" : "text-gray-700"
          }`}>
            {skill.icon}
          </div>
          <span className={`font-semibold text-sm md:text-base ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}>
            {skill.name}
          </span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
          getLevelColor(skill.level)
        }`}>
          {skill.level}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
        <div
          className="skill-level-bar h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg bg-gradient-to-r from-teal-400 to-teal-600"
          style={{ width: getSkillLevelWidth(skill.level) }}
        />
      </div>
      
      <div className={`text-xs md:text-sm leading-relaxed transition-all duration-300 ${
        isDarkTheme
          ? "text-gray-300 group-hover:text-gray-200"
          : "text-gray-600 group-hover:text-gray-700"
      }`}>
        {skill.description}
      </div>
    </Card>
  )
})