import { memo, useState } from 'react'
import { Button } from '../ui/Button'
import { ProjectCard } from '../cards/ProjectCard'
import { getProjectsByCategory } from '../../data/projects'

interface ProjectsProps {
  isDarkTheme: boolean
}

const categories = ["All", "Web", "AI", "Mobile", "Research"]

export const Projects = memo<ProjectsProps>(({ isDarkTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedTechs, setExpandedTechs] = useState<string | null>(null)
  
  const filteredProjects = getProjectsByCategory(selectedCategory)

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          Featured Projects
        </h2>
        
        <p className={`text-center mb-8 md:mb-12 text-base md:text-lg ${
          isDarkTheme ? "text-gray-300" : "text-gray-600"
        }`}>
          A showcase of my recent work in full-stack development and AI research
        </p>
        
        <div className="flex justify-center mb-8 md:mb-12 px-2">
          <div className="glassmorphism rounded-full p-2 max-w-full overflow-x-auto scroll-container">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDarkTheme={isDarkTheme}
              expandedProject={expandedProject}
              setExpandedProject={setExpandedProject}
              expandedTechs={expandedTechs}
              setExpandedTechs={setExpandedTechs}
            />
          ))}
        </div>
      </div>
    </section>
  )
})