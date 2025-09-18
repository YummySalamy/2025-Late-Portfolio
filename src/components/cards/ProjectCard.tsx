import { memo } from 'react'
import { FaEye, FaCode, FaStar } from 'react-icons/fa'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { LazyImage } from '../ui/LazyImage'
import type { Project } from '../../types'
import { getStatusColor } from '../../utils/animations'

interface ProjectCardProps {
  project: Project
  index: number
  isDarkTheme: boolean
  expandedProject: string | null
  setExpandedProject: (id: string | null) => void
  expandedTechs: string | null
  setExpandedTechs: (id: string | null) => void
}

export const ProjectCard = memo<ProjectCardProps>(({ 
  project, 
  index, 
  isDarkTheme,
  expandedProject,
  setExpandedProject,
  expandedTechs,
  setExpandedTechs
}) => {
  const animationDelay = `${index * 0.1}s`
  
  const handleExpandProject = () => {
    setExpandedProject(expandedProject === project.id ? null : project.id)
  }
  
  const handleExpandTechs = () => {
    setExpandedTechs(expandedTechs === project.id ? null : project.id)
  }
  
  return (
    <Card
      variant="strong"
      rounded="2xl"
      padding="none"
      hover
      className="project-card overflow-hidden animate-slide-in-up"
      style={{ animationDelay }}
    >
      <div className="relative">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-40 md:h-48 object-cover"
          placeholder={
            <div className="w-full h-40 md:h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <div className="text-gray-500 dark:text-gray-400">Loading...</div>
            </div>
          }
        />
        
        <div className="absolute top-3 md:top-4 left-3 md:left-4">
          <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
            getStatusColor(project.status)
          }`}>
            {project.status}
          </span>
        </div>
        
        {project.featured && (
          <div className="absolute top-3 md:top-4 right-3 md:right-4">
            <FaStar className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
          </div>
        )}
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className={`text-lg md:text-xl font-semibold mb-3 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
          {expandedProject === project.id ? project.longDescription : project.description}
        </p>
        
        <button
          onClick={handleExpandProject}
          className="text-teal-500 text-sm font-medium mb-4 hover:text-teal-600 transition-colors cursor-pointer"
        >
          {expandedProject === project.id ? "Show Less" : "Read More"}
        </button>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs rounded-full ${
                isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <button
              onClick={handleExpandTechs}
              className={`px-2 py-1 text-xs rounded-full cursor-pointer transition-all ${
                isDarkTheme
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              +{project.technologies.length - 3}
            </button>
          )}
        </div>
        
        {expandedTechs === project.id && (
          <div className="flex flex-wrap gap-2 mb-4 animate-slide-down">
            {project.technologies.slice(3).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 text-xs rounded-full ${
                  isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3">
          <Button
            variant="primary"
            size="sm"
            leftIcon={<FaEye className="w-3 h-3 md:w-4 md:h-4" />}
            className="flex-1"
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            Demo
          </Button>
          
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<FaCode className="w-3 h-3 md:w-4 md:h-4" />}
            className="flex-1"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            Code
          </Button>
        </div>
      </div>
    </Card>
  )
})