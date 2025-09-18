import type { Project } from '../types'
import AuroraMock from '../assets/mockups/Aurora.png'
import DatapathELearningMock from '../assets/mockups/datapath-e-learning-mockup2.png'
import DatapathLandingMock from '../assets/mockups/datapath-landing-mockup.jpeg'
import EclipseMock from '../assets/mockups/eclipse-mockup.png'
import FreshPlaceMock from '../assets/mockups/fresh-place.png'
import ImageClassifierMock from '../assets/mockups/image-classifier.png'
import JewerlyShopMock from '../assets/mockups/jewerly-shop-mockup.jpg'
import NubotMock from '../assets/mockups/nubot-mockup.png'
import RetroModernMock from '../assets/mockups/retromodern-marketplace-mockup.png'
import SiriusAppMock from '../assets/mockups/sirius-mockup.png'
import SiriusLandingMock from '../assets/mockups/sirius-landing-page-mockup2.png'
import PrevPortfolioMock from '../assets/mockups/web2-mockup.png'

export const projects: Project[] = [
  {
    id: "1",
    title: "Datapath Web",
    description: "A web application that showcases various tech courses. It is a platform for learning and testing.",
    longDescription:
      "A comprehensive e-learning platform built with React and modern web technologies. Features course management, interactive learning modules, and real-time progress tracking. Integrated with Firebase for authentication and Google Cloud for scalable infrastructure.",
    technologies: ["React", "CSS3", "JavaScript", "Firebase", "Google Cloud", "MySQL"],
    image: DatapathLandingMock,
    demoUrl: "https://datapath.ai",
    githubUrl: "https://github.com/YummySal/datapath-web",
    featured: true,
    category: "Web",
    status: "Completed",
    year: 2024,
  },
  {
    id: "2",
    title: "Fresh Place",
    description: "A web application of a company distributing fresh groceries.",
    longDescription:
      "A modern e-commerce platform for fresh grocery distribution. Built with React and Node.js, featuring real-time inventory management, order tracking, and responsive design optimized for mobile shopping experiences.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: FreshPlaceMock,
    demoUrl: "https://fresh-place.com",
    githubUrl: "https://github.com/YummySalamy/fresh-place",
    featured: true,
    category: "Web",
    status: "Completed",
    year: 2024,
  },
  {
    id: "3",
    title: "SIRIUS",
    description: "A multi-platform application for physics studies and simulations.",
    longDescription:
      "An educational platform combining web technologies with Arduino integration for physics simulations. Features interactive experiments, real-time data visualization, and educational content for physics students and educators.",
    technologies: ["React", "Node.js", "JavaScript", "Arduino"],
    image: SiriusAppMock,
    demoUrl: "https://sirius-physics.vercel.app",
    githubUrl: "https://github.com/jesusckantillo/expofisica-front/tree/dev_yummy",
    featured: false,
    category: "Research",
    status: "Completed",
    year: 2023,
  },
  {
    id: "4",
    title: "AI Image Classifier",
    description: "A Python application that uses machine learning to classify images.",
    longDescription:
      "A sophisticated image classification system built with Python and TensorFlow. Implements convolutional neural networks for accurate image recognition with support for custom datasets and real-time classification.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    image: ImageClassifierMock,
    demoUrl: "https://ai-classifier-demo.vercel.app",
    githubUrl: "https://github.com/YummySalamy/Image_classifier",
    featured: true,
    category: "AI",
    status: "Completed",
    year: 2023,
  },
  {
    id: "5",
    title: "nubot.io",
    description: "A web application that allows users to auto-manage their companies with AI.",
    longDescription:
      "An AI-driven CRM platform that deploys personalized chatbots over WhatsApp and other channels. Integrates retrieval-augmented generation with real-time analytics to help businesses convert chats into sales, featuring advanced AI automation for company management.",
    technologies: ["React", "Node.js", "Python", "Firebase", "Google Cloud", "TensorFlow", "Tailwind CSS"],
    image: NubotMock,
    demoUrl: "https://nubot.io",
    githubUrl: "https://github.com/YummySal/nubot",
    featured: true,
    category: "AI",
    status: "Completed",
    year: 2024,
  },
  {
    id: "6",
    title: "SIRIUS Landing Page",
    description: "The official landing page for the SIRIUS project.",
    longDescription:
      "A modern, responsive landing page showcasing the SIRIUS physics education platform. Features smooth animations, interactive elements, and optimized performance for showcasing the project's capabilities.",
    technologies: ["React", "CSS3", "JavaScript"],
    image: SiriusLandingMock,
    demoUrl: "https://sirius-landing-page.vercel.app/",
    githubUrl: "https://github.com/YummySal/sirius-landing",
    featured: false,
    category: "Web",
    status: "Completed",
    year: 2023,
  },
  {
    id: "7",
    title: "2024 - Late Portfolio",
    description: "My personal portfolio showcasing my skills and projects.",
    longDescription:
      "A personal portfolio website designed to showcase my skills, projects, and professional journey. Built with React and Tailwind CSS, featuring a clean, minimalistic design that highlights my work and achievements.",
    technologies: ["React", "CSS3", "JavaScript", "Tailwind CSS"],
    image: PrevPortfolioMock,
    demoUrl: "https://sebastian-escobar-portfolio-v2-yummysalamys-projects.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "Web",
    status: "Completed",
    year: 2024,
  },
  {
    id: "8",
    title: "RetroModern Marketplace",
    description: "A web application that allows users to buy and sell retro and modern items.",
    longDescription:
      "An e-commerce marketplace specializing in retro and modern collectibles. Features user authentication, product listings, search functionality, and a clean, intuitive interface for buying and selling unique items.",
    technologies: ["React", "CSS3", "JavaScript"],
    image: RetroModernMock,
    demoUrl: "https://retromodern-market-place.vercel.app/",
    githubUrl: "https://github.com/YummySal/retromodern-marketplace",
    featured: false,
    category: "Web",
    status: "Completed",
    year: 2023,
  },
  {
    id: "9",
    title: "Datapath E-Learning",
    description: "A web application that showcases various tech courses with advanced features.",
    longDescription:
      "An enhanced version of the e-learning platform with advanced course management, interactive testing modules, and comprehensive analytics. Integrated with multiple databases and cloud services for scalable performance.",
    technologies: ["React", "CSS3", "JavaScript", "Firebase", "Google Cloud", "MySQL"],
    image: DatapathELearningMock,
    demoUrl: "https://datapath-e-learning-tests.vercel.app/",
    githubUrl: "https://github.com/YummySal/datapath-elearning",
    featured: false,
    category: "Web",
    status: "Completed",
    year: 2023,
  },
  {
    id: "10",
    title: "Jewelry Shop Landing",
    description: "A minimalistic landing page for a jewelry shop.",
    longDescription:
      "An elegant, minimalist landing page designed for a luxury jewelry shop. Features sophisticated animations, high-quality image galleries, and a clean aesthetic that highlights the premium nature of the products.",
    technologies: ["React", "CSS3", "JavaScript"],
    image: JewerlyShopMock,
    demoUrl: "https://jewerly-shop-landing.vercel.app/",
    githubUrl: "https://github.com/YummySal/jewelry-landing",
    featured: false,
    category: "Web",
    status: "Completed",
    year: 2023,
  },
  {
    id: "11",
    title: "Aurora",
    description: "An innovative web application with advanced insights and analytics.",
    longDescription:
      "A cutting-edge web application focused on data insights and analytics. Built with modern React patterns and featuring advanced data visualization, real-time updates, and intuitive user interfaces.",
    technologies: ["React", "CSS3", "JavaScript", "Chart.js"],
    image: AuroraMock,
    demoUrl: "https://aurora-insight.vercel.app/",
    githubUrl: "https://github.com/YummySal/aurora",
    featured: false,
    category: "Web",
    status: "In Progress",
    year: 2024,
  },
  {
    id: "12",
    title: "Eclipse",
    description: "A web application designed to be an all-in-one platform administrator.",
    longDescription:
      "A comprehensive platform administration tool built with Node.js and integrated with multiple services. Features WhatsApp integration, cloud storage, database management, and real-time monitoring capabilities for complete platform oversight.",
    technologies: ["Node.js", "Firebase", "Google Cloud", "MySQL", "WhatsApp API"],
    image: EclipseMock,
    demoUrl: "https://eclipse-theta.vercel.app/",
    githubUrl: "https://github.com/YummySal/eclipse",
    featured: false,
    category: "Web",
    status: "Completed",
    year: 2024,
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects
  return projects.filter(project => project.category === category)
}

export const getProjectsByYear = (year: number): Project[] => {
  return projects.filter(project => project.year === year)
}

export const getProjectsByStatus = (status: string): Project[] => {
  return projects.filter(project => project.status === status)
}