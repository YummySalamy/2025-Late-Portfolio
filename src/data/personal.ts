import type { PersonalInfo } from '../types'
import AvatarPic from '../assets/images/sebastian_escobar_horse_pic.png'
import CVFile from '../assets/MyCV.pdf'

export const personalInfo: PersonalInfo = {
  name: "Sebastián Escobar",
  title: "Full-Stack & AI Developer",
  location: "Barranquilla, Colombia",
  email: "carsebastian1013@gmail.com",
  bio: "Passionate and enthusiastic technologist with a deep love for software and artificial intelligence. Over the past few years I have guided the end-to-end creation of web and mobile products, turning complex ideas into reliable, user-centred experiences and pairing them with cloud-native back-ends and automated delivery pipelines. Currently working as a LATAM coding expert on Outlier, Scale AI's contributor platform, crafting high-precision datasets and fine-tuning large language models through RLHF techniques.",
  avatar: AvatarPic,
  resume: CVFile,
  social: {
    website: "https://sebastianescobar.com",
    portfolio: "https://github.com/YummySalamy",
    blog: "https://sebastianescobar.com/",
    email: "mailto:carsebastian1013@gmail.com",
    github: "https://github.com/YummySalamy",
    linkedin: "https://www.linkedin.com/in/sebastian-escobar-55b5b9256/",
  },
}