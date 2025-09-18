import { memo } from 'react'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from '../ui/Card'
import { personalInfo } from '../../data/personal'
import { education } from '../../data/education'
import { certifications } from '../../data/certifications'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'

interface AboutProps {
  isDarkTheme: boolean
}

export const About = memo<AboutProps>(({ isDarkTheme }) => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Card
            variant="strong"
            rounded="3xl"
            padding="lg"
            className="animate-slide-in-left"
          >
            <p className={`text-base md:text-lg leading-relaxed mb-6 ${
              isDarkTheme ? "text-gray-200" : "text-gray-700"
            }`}>
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${
                  isDarkTheme ? "text-teal-300" : "text-teal-600"
                }`}>
                  4+
                </div>
                <div className={`text-xs md:text-sm ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}>
                  Years Experience
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${
                  isDarkTheme ? "text-teal-300" : "text-teal-600"
                }`}>
                  {projects.length}+
                </div>
                <div className={`text-xs md:text-sm ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}>
                  Projects Completed
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${
                  isDarkTheme ? "text-teal-300" : "text-teal-600"
                }`}>
                  {skills.length}+
                </div>
                <div className={`text-xs md:text-sm ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}>
                  Technical Skills
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${
                  isDarkTheme ? "text-teal-300" : "text-teal-600"
                }`}>
                  {certifications.length}
                </div>
                <div className={`text-xs md:text-sm ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}>
                  Certifications
                </div>
              </div>
            </div>
          </Card>
          
          <div className="space-y-6 animate-slide-in-right">
            <Card variant="glassmorphism" rounded="2xl" padding="lg">
              <h3 className={`text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}>
                <FaGraduationCap className="text-teal-500" />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-teal-500 pl-4">
                    <h4 className={`font-semibold text-sm md:text-base ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}>
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className={`text-sm ${
                      isDarkTheme ? "text-teal-300" : "text-teal-600"
                    }`}>
                      {edu.institution}
                    </p>
                    <p className={`text-xs md:text-sm ${
                      isDarkTheme ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {edu.duration} • {edu.location}
                    </p>
                    {edu.honors && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {edu.honors.map((honor, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded-full ${
                              isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card variant="glassmorphism" rounded="2xl" padding="lg">
              <h3 className={`text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}>
                <FaCertificate className="text-amber-500" />
                Certifications
              </h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-sm md:text-base ${
                        isDarkTheme ? "text-white" : "text-gray-800"
                      }`}>
                        {cert.name}
                      </h4>
                      <p className={`text-xs md:text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:text-teal-600 transition-colors ml-2 flex-shrink-0 cursor-pointer"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
})