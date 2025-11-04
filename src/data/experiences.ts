import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: "0",
    company: "TICIO",
    position: "Backend Engineer & AI Developer",
    duration: "October 2025 - Present",
    location: "Remote",
    description: [
      "Design and implement scalable backend systems for AI-driven applications",
      "Develop RESTful APIs and microservices to support AI functionalities",
      "Integrate machine learning models into production environments",
      "Optimize database performance and ensure data integrity for AI datasets",
    ],
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL", "Gemini AI" ],
    current: true,
  },
  {
    id: "1",
    company: "Outlier (Scale AI)",
    position: "LATAM Coders Member, Coding Expertise & AI Trainer",
    duration: "November 2024 - October 2025",
    location: "Remote",
    description: [
      "Craft high-precision datasets for training large language models with focus on LATAM coding expertise",
      "Develop chain-of-thought prompts and evaluation code for model fine-tuning through RLHF techniques",
      "Implement multi-step prompting strategies to enhance AI reasoning across diverse programming domains",
      "Collaborate with international teams to improve model performance and accuracy in Spanish and English",
    ],
    technologies: ["Python", "LangChain", "RLHF", "Machine Learning", "Data Science"],
    current: false,
  },
  {
    id: "2",
    company: "AI CHAIN",
    position: "AI Researcher & Software Developer",
    duration: "June 2023 - November 2024",
    location: "Remote",
    description: [
      "Developed AI-powered solutions combining machine learning research with practical software implementation",
      "Built and deployed scalable web applications with integrated AI capabilities serving thousands of users",
      "Conducted research on natural language processing and computer vision applications",
      "Collaborated with cross-functional teams to deliver end-to-end AI products from concept to production",
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS", "Docker"],
    current: false,
  },
  {
    id: "3",
    company: "nubot.io",
    position: "Full-Stack Developer",
    duration: "2023 - 2024",
    location: "Remote",
    description: [
      "Built AI-driven CRM platform with personalized chatbots for WhatsApp and other messaging channels",
      "Implemented retrieval-augmented generation (RAG) technology for intelligent conversation handling",
      "Developed real-time analytics dashboard to track chat-to-sales conversion metrics",
      "Integrated multiple APIs and services to create seamless user experiences for business automation",
    ],
    technologies: ["React", "Node.js", "Python", "Firebase", "Google Cloud", "WhatsApp API"],
    current: false,
  },
]

export const getCurrentExperience = (): Experience | undefined => {
  return experiences.find(exp => exp.current)
}

export const getPreviousExperiences = (): Experience[] => {
  return experiences.filter(exp => !exp.current)
}

export const getExperienceByCompany = (company: string): Experience | undefined => {
  return experiences.find(exp => 
    exp.company.toLowerCase().includes(company.toLowerCase())
  )
}

export const getTotalYearsOfExperience = (): number => {
  // Calculate based on the earliest start date
  // This is a simplified calculation - you might want to make it more precise
  const startYear = 2023 // Based on the earliest experience
  const currentYear = new Date().getFullYear()
  return currentYear - startYear + 1
}

export const getAllTechnologies = (): string[] => {
  const allTechs = experiences.flatMap(exp => exp.technologies)
  return [...new Set(allTechs)].sort()
}

export const getExperiencesByTechnology = (technology: string): Experience[] => {
  return experiences.filter(exp => 
    exp.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}