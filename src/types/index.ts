import React from "react"

export interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: "Frontend" | "Backend" | "AI/ML" | "DevOps" | "Mobile"
  icon: React.ReactNode
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  demoUrl: string
  githubUrl: string
  featured: boolean
  category: "Web" | "AI" | "Mobile" | "Research"
  status: "Completed" | "In Progress" | "Planned"
  year: number
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  current: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  gpa?: string
  honors?: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface Article {
  id: string
  title: string
  excerpt: string
  publishDate: string
  readTime: string
  url: string
  category: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  email: string
  bio: string
  avatar: string
  resume: string
  social: {
    website: string
    portfolio: string
    blog: string
    email: string
    github: string
    linkedin: string
  }
}

export interface NavigationItem {
  id: string
  label: string
}

export interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  url: string
}

export interface ThemeContextType {
  isDarkTheme: boolean
  toggleTheme: () => void
}

export interface SectionRefs {
  [key: string]: HTMLElement | null
}