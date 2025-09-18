import type { Certification } from '../types'

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Data Structures & JavaScript Certification",
    issuer: "FreeCodeCamp.org",
    date: "2021",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "2",
    name: "Responsive Web Design Certification",
    issuer: "FreeCodeCamp.org",
    date: "2022",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "3",
    name: "Frontend Development Libraries Course",
    issuer: "FreeCodeCamp.org",
    date: "2021",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "4",
    name: "Backend Development & API's Certification",
    issuer: "FreeCodeCamp.org",
    date: "2021",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "5",
    name: "Scientific Computing with Python Certification",
    issuer: "FreeCodeCamp.org",
    date: "2022",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "6",
    name: "Data Analysis with Python Certification",
    issuer: "FreeCodeCamp.org",
    date: "2022",
    url: "https://freecodecamp.org/certification",
  },
  {
    id: "7",
    name: "Machine Learning with Python Certification",
    issuer: "FreeCodeCamp.org",
    date: "2022",
    url: "https://freecodecamp.org/certification",
  },
]

export const getCertificationsByIssuer = (issuer: string): Certification[] => {
  return certifications.filter(cert => 
    cert.issuer.toLowerCase().includes(issuer.toLowerCase())
  )
}

export const getCertificationsByYear = (year: string): Certification[] => {
  return certifications.filter(cert => cert.date.includes(year))
}

export const getCertificationsByTechnology = (technology: string): Certification[] => {
  return certifications.filter(cert => 
    cert.name.toLowerCase().includes(technology.toLowerCase())
  )
}

export const getVerifiableCertifications = (): Certification[] => {
  return certifications.filter(cert => cert.url && cert.url.trim() !== '')
}

export const getCertificationsWithCredentials = (): Certification[] => {
  return certifications.filter(cert => cert.credentialId && cert.credentialId.trim() !== '')
}

export const getRecentCertifications = (years: number = 3): Certification[] => {
  const currentYear = new Date().getFullYear()
  const cutoffYear = currentYear - years
  
  return certifications.filter(cert => {
    const certYear = parseInt(cert.date)
    return certYear >= cutoffYear
  })
}

export const getCertificationCount = (): number => {
  return certifications.length
}

export const getCertificationsByCategory = () => {
  const categories = {
    frontend: [] as Certification[],
    backend: [] as Certification[],
    python: [] as Certification[],
    general: [] as Certification[],
  }

  certifications.forEach(cert => {
    const name = cert.name.toLowerCase()
    
    if (name.includes('frontend') || name.includes('responsive') || name.includes('javascript')) {
      categories.frontend.push(cert)
    } else if (name.includes('backend') || name.includes('api')) {
      categories.backend.push(cert)
    } else if (name.includes('python')) {
      categories.python.push(cert)
    } else {
      categories.general.push(cert)
    }
  })

  return categories
}

export const getLatestCertification = (): Certification | undefined => {
  return certifications.reduce((latest, current) => {
    const latestYear = parseInt(latest.date)
    const currentYear = parseInt(current.date)
    return currentYear > latestYear ? current : latest
  })
}