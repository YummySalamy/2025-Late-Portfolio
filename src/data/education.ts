import type { Education } from '../types'

export const education: Education[] = [
  {
    id: "1",
    institution: "Universidad del Norte",
    degree: "Bachelor of Engineering",
    field: "Electrical Engineering",
    duration: "2022",
    location: "Barranquilla, Colombia",
    honors: [
      "IEEE Student Member", 
      "University Scholarship Recipient", 
      "GeoEXPO 2023 Honorable Mention", 
      "GeoEXPO 2024 Winner"
    ],
  },
]

export const getPrimaryEducation = (): Education | undefined => {
  return education[0] // Returns the main/most recent education
}

export const getEducationByInstitution = (institution: string): Education | undefined => {
  return education.find(edu => 
    edu.institution.toLowerCase().includes(institution.toLowerCase())
  )
}

export const getEducationByField = (field: string): Education[] => {
  return education.filter(edu => 
    edu.field.toLowerCase().includes(field.toLowerCase())
  )
}

export const getAllHonors = (): string[] => {
  const allHonors = education.flatMap(edu => edu.honors || [])
  return [...new Set(allHonors)]
}

export const getEducationByYear = (year: string): Education[] => {
  return education.filter(edu => edu.duration.includes(year))
}

export const hasHonors = (): boolean => {
  return education.some(edu => edu.honors && edu.honors.length > 0)
}

export const getLatestEducation = (): Education | undefined => {
  // Since we only have one education entry, return it
  return education[0]
}