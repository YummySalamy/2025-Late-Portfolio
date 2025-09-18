import type { Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lucas Romero",
    position: "Software Developer & AI Engineer",
    company: "Scale - LATAM Coders Program",
    content:
      "Sebastian is an exceptional developer who consistently delivers high-quality solutions. His expertise in both full-stack development and AI has been invaluable to our team. He has the rare ability to translate complex technical concepts into practical business solutions.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGYSb4KhqYQBA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724113903525?e=1756339200&v=beta&t=twwsyGPHIBj1c1J6H7Y-6QvDUwQjj4vuQVOdG7SCJuo",
    rating: 5,
  },
  {
    id: "2",
    name: "Haxell Gomez",
    position: "Lead Back-End Developer",
    company: "AI CHAIN",
    content:
      "Working with Sebastian was a game-changer for our AI product development. His deep understanding of machine learning combined with his full-stack skills allowed us to build sophisticated AI applications that actually work in production.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQHhbBf4bmJIdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724569574488?e=1756339200&v=beta&t=w23vbZBSVES-EPU679e9BrLHx_0R6SB7oPCbQqQdrts",
    rating: 5,
  },
  {
    id: "3",
    name: "Oliver Ardila",
    position: "CTO",
    company: "TuMaquinaYa",
    content:
      "Sebastian's academic performance and practical application of engineering principles were outstanding. His ability to bridge theoretical knowledge with real-world solutions makes him a valuable asset to any technical team.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEO6XBQIYxTzw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718839981511?e=1756339200&v=beta&t=-YyxSM-lNVJpMxfUW6Hz70m6PCbkMz1a3B0Q6apVhqA",
    rating: 5,
  },
]

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating)
}

export const getTestimonialsByCompany = (company: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.company.toLowerCase().includes(company.toLowerCase())
  )
}

export const getFiveStarTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating === 5)
}

export const getTestimonialByName = (name: string): Testimonial | undefined => {
  return testimonials.find(testimonial => 
    testimonial.name.toLowerCase().includes(name.toLowerCase())
  )
}

export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getAverageRating = (): number => {
  if (testimonials.length === 0) return 0
  
  const totalRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)
  return Math.round((totalRating / testimonials.length) * 10) / 10
}

export const getTestimonialsByPosition = (position: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.position.toLowerCase().includes(position.toLowerCase())
  )
}

export const getTechnicalTestimonials = (): Testimonial[] => {
  const technicalKeywords = ['developer', 'engineer', 'cto', 'technical', 'software', 'ai']
  
  return testimonials.filter(testimonial => 
    technicalKeywords.some(keyword => 
      testimonial.position.toLowerCase().includes(keyword) ||
      testimonial.company.toLowerCase().includes(keyword)
    )
  )
}

export const getTestimonialsWithAvatars = (): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.avatar && testimonial.avatar.trim() !== ''
  )
}

export const getTestimonialCount = (): number => {
  return testimonials.length
}

export const getCompaniesFromTestimonials = (): string[] => {
  return [...new Set(testimonials.map(testimonial => testimonial.company))].sort()
}

export const getPositionsFromTestimonials = (): string[] => {
  return [...new Set(testimonials.map(testimonial => testimonial.position))].sort()
}