import React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import {
  FaExternalLinkAlt,
  FaCode,
  FaBrain,
  FaGraduationCap,
  FaCertificate,
  FaQuoteLeft,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaChevronRight,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
  FaTimes,
  FaEye,
  FaHeart,
  FaStar,
  FaCalendar,
  FaMapMarkerAlt,
  FaNewspaper,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaRobot,
  FaBars,
  FaGlobe,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaChevronUp,
  FaPlus,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiJest,
  SiJavascript,
  SiFirebase,
  SiGooglecloud,
  SiCss3,
} from "react-icons/si"
import AvatarPic from "./assets/images/sebastian_escobar_horse_pic.png"
import CVFile from "./assets/MyCV.pdf"
// ==================== MOCKUPS ====================
import AuroraMock from "./assets/mockups/Aurora.png"
import DatapathELearningMock from "./assets/mockups/datapath-e-learning-mockup2.png"
import DatapathLandingMock from "./assets/mockups/datapath-landing-mockup.jpeg"
import EclipseMock from "./assets/mockups/eclipse-mockup.png"
import FreshPlaceMock from "./assets/mockups/fresh-place.png"
import ImageClassifierMock from "./assets/mockups/image-classifier.png"
import JewerlyShopMock from "./assets/mockups/jewerly-shop-mockup.jpg"
import NubotMock from "./assets/mockups/nubot-mockup.png"
import RetroModernMock from "./assets/mockups/retromodern-marketplace-mockup.png"
import SiriusAppMock from "./assets/mockups/sirius-mockup.png"
import SiriusLandingMock from "./assets/mockups/sirius-landing-page-mockup2.png"
import PrevPortfolioMock from "./assets/mockups/web2-mockup.png"

// ==================== INTERFACES ====================
interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: "Frontend" | "Backend" | "AI/ML" | "DevOps" | "Mobile"
  icon: React.ReactNode
  description: string
}

interface Project {
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

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  current: boolean
}

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  location: string
  gpa?: string
  honors?: string[]
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
}

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

interface Article {
  id: string
  title: string
  excerpt: string
  publishDate: string
  readTime: string
  url: string
  category: string
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

// ==================== DATA ====================
const personalInfo = {
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

const skills: Skill[] = [
  {
    name: "HTML",
    level: "Expert",
    category: "Frontend",
    icon: <FaCode />,
    description: "Semantic HTML5, accessibility best practices, and modern web standards",
  },
  {
    name: "CSS",
    level: "Expert",
    category: "Frontend",
    icon: <SiCss3 />,
    description: "Advanced CSS3, Flexbox, Grid, animations, and responsive design",
  },
  {
    name: "JavaScript",
    level: "Expert",
    category: "Frontend",
    icon: <SiJavascript />,
    description: "ES6+, DOM manipulation, async programming, and modern JavaScript patterns",
  },
  {
    name: "TypeScript",
    level: "Expert",
    category: "Frontend",
    icon: <SiTypescript />,
    description: "Type-safe development with advanced patterns, generics, and enterprise-level applications",
  },
  {
    name: "React",
    level: "Expert",
    category: "Frontend",
    icon: <FaReact />,
    description: "Building modern, responsive web applications with hooks, context, and performance optimization",
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    icon: <SiNextdotjs />,
    description: "Full-stack React framework with SSR, SSG, API routes, and performance optimization",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    icon: <SiTailwindcss />,
    description: "Utility-first CSS framework for rapid UI development and consistent design systems",
  },
  {
    name: "GraphQL",
    level: "Advanced",
    category: "Backend",
    icon: <SiGraphql />,
    description: "API design, schema definition, resolvers, and efficient data fetching patterns with Apollo",
  },
  {
    name: "Node.js",
    level: "Expert",
    category: "Backend",
    icon: <FaNodeJs />,
    description: "Server-side JavaScript with Express, microservices architecture, and real-time applications",
  },
  {
    name: "NestJS",
    level: "Advanced",
    category: "Backend",
    icon: <SiNestjs />,
    description: "Enterprise-grade Node.js framework with TypeScript, decorators, and modular architecture",
  },
  {
    name: "Express",
    level: "Expert",
    category: "Backend",
    icon: <SiExpress />,
    description: "Lightweight web framework for building RESTful APIs and web applications",
  },
  {
    name: "Python",
    level: "Expert",
    category: "AI/ML",
    icon: <FaPython />,
    description: "Data science, machine learning, web development, and automation with various frameworks",
  },
  {
    name: "FastAPI",
    level: "Advanced",
    category: "Backend",
    icon: <SiFastapi />,
    description: "Modern Python web framework for building high-performance APIs with automatic documentation",
  },
  {
    name: "Django",
    level: "Advanced",
    category: "Backend",
    icon: <SiDjango />,
    description: "Full-featured Python web framework for rapid development and clean design",
  },
  {
    name: "PyTorch",
    level: "Advanced",
    category: "AI/ML",
    icon: <SiPytorch />,
    description: "Research-oriented deep learning, custom architectures, and experimental model development",
  },
  {
    name: "scikit-learn",
    level: "Advanced",
    category: "AI/ML",
    icon: <FaBrain />,
    description: "Classical machine learning algorithms, data preprocessing, and model evaluation",
  },
  {
    name: "TensorFlow",
    level: "Advanced",
    category: "AI/ML",
    icon: <SiTensorflow />,
    description: "Deep learning models, neural networks, computer vision, and production ML pipelines",
  },
  {
    name: "Keras",
    level: "Advanced",
    category: "AI/ML",
    icon: <FaBrain />,
    description: "High-level neural networks API for rapid prototyping and experimentation",
  },
  {
    name: "LangChain",
    level: "Advanced",
    category: "AI/ML",
    icon: <FaRobot />,
    description: "Framework for developing applications with large language models and RAG systems",
  },
  {
    name: "Docker",
    level: "Advanced",
    category: "DevOps",
    icon: <FaDocker />,
    description: "Containerization, multi-stage builds, Docker Compose, and container orchestration",
  },
  {
    name: "Kubernetes",
    level: "Intermediate",
    category: "DevOps",
    icon: <SiKubernetes />,
    description: "Container orchestration, deployments, services, and scalable microservices architecture",
  },
  {
    name: "AWS",
    level: "Advanced",
    category: "DevOps",
    icon: <FaAws />,
    description: "Cloud architecture, Lambda, S3, ECS, and serverless application deployment",
  },
  {
    name: "Google Cloud",
    level: "Advanced",
    category: "DevOps",
    icon: <SiGooglecloud />,
    description: "Cloud Functions, Firestore, Vertex AI, and scalable cloud solutions",
  },
  {
    name: "Firebase",
    level: "Advanced",
    category: "DevOps",
    icon: <SiFirebase />,
    description: "Real-time database, authentication, hosting, and rapid application development",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    category: "Backend",
    icon: <SiPostgresql />,
    description: "Advanced SQL, query optimization, indexing, and database design for high-performance apps",
  },
  {
    name: "MySQL",
    level: "Advanced",
    category: "Backend",
    icon: <FaDatabase />,
    description: "Relational database management, optimization, and enterprise-level data solutions",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    category: "Backend",
    icon: <SiMongodb />,
    description: "NoSQL database design, aggregation pipelines, and scalable document-based applications",
  },
  {
    name: "Redis",
    level: "Advanced",
    category: "Backend",
    icon: <SiRedis />,
    description: "In-memory data structure store for caching, session management, and real-time applications",
  },
  {
    name: "Jest",
    level: "Advanced",
    category: "Frontend",
    icon: <SiJest />,
    description: "JavaScript testing framework with mocking, coverage reports, and test automation",
  },
  {
    name: "React Native",
    level: "Intermediate",
    category: "Mobile",
    icon: <FaMobile />,
    description: "Cross-platform mobile development with native performance and platform-specific features",
  }
]

const projects: Project[] = [
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

const experiences: Experience[] = [
  {
    id: "1",
    company: "Outlier (Scale AI)",
    position: "LATAM Coders Member, Coding Expertise & AI Trainer",
    duration: "November 2024 - Present",
    location: "Remote",
    description: [
      "Craft high-precision datasets for training large language models with focus on LATAM coding expertise",
      "Develop chain-of-thought prompts and evaluation code for model fine-tuning through RLHF techniques",
      "Implement multi-step prompting strategies to enhance AI reasoning across diverse programming domains",
      "Collaborate with international teams to improve model performance and accuracy in Spanish and English",
    ],
    technologies: ["Python", "LangChain", "RLHF", "Machine Learning", "Data Science"],
    current: true,
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

const education: Education[] = [
  {
    id: "1",
    institution: "Universidad del Norte",
    degree: "Bachelor of Engineering",
    field: "Electrical Engineering",
    duration: "2022",
    location: "Barranquilla, Colombia",
    honors: ["IEEE Student Member", "University Scholarship Recipient", "GeoEXPO 2023 Honorable Mention", "GeoEXPO 2024 Winner"],
  },
]

const certifications: Certification[] = [
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

const testimonials: Testimonial[] = [
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

const articles: Article[] = [
  {
    id: "1",
    title: "Building Scalable AI Applications with React and Python",
    excerpt:
      "A comprehensive guide on integrating machine learning models into modern web applications while maintaining performance and user experience.",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    url: "https://medium.com/@sebastianescobar/building-scalable-ai-apps",
    category: "AI/ML",
  },
  {
    id: "2",
    title: "The Future of Full-Stack Development in Latin America",
    excerpt: "Exploring emerging trends and opportunities for developers in the Latin American tech ecosystem.",
    publishDate: "2023-12-10",
    readTime: "6 min read",
    url: "https://dev.to/sebastianescobar/future-fullstack-latam",
    category: "Career",
  },
  {
    id: "3",
    title: "Implementing RAG Systems with LangChain",
    excerpt:
      "Deep dive into building retrieval-augmented generation systems for enhanced AI applications with practical examples.",
    publishDate: "2023-11-22",
    readTime: "12 min read",
    url: "https://sebastianescobar.dev/rag-langchain",
    category: "AI/ML",
  },
]

// ==================== MAIN COMPONENT ====================
const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme")
      if (savedTheme) {
        return savedTheme === "dark"
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch (error) {
      return false
    }
  })
  const [activeSection, setActiveSection] = useState("hero")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedTechs, setExpandedTechs] = useState<string | null>(null)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSkillCategories, setExpandedSkillCategories] = useState<{ [key: string]: boolean }>({})
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // ==================== EFFECTS ====================

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", isDarkTheme ? "dark" : "light")
    } catch (error) {
      console.warn("Could not save the theme preference due to:", error)
    }
  }, [isDarkTheme])

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs.current)
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // ==================== HANDLERS ====================
  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }, [])

  const validateForm = useCallback((form: ContactForm): FormErrors => {
    const errors: FormErrors = {}
    if (!form.name.trim()) errors.name = "Name is required"
    if (!form.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!form.subject.trim()) errors.subject = "Subject is required"
    if (!form.message.trim()) errors.message = "Message is required"
    else if (form.message.length < 10) errors.message = "Message must be at least 10 characters"
    return errors
  }, [])

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const errors = validateForm(contactForm)
      setFormErrors(errors)
      if (Object.keys(errors).length > 0) return
      setIsSubmitting(true)
      setSubmitStatus("idle")
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Contact form submitted:", contactForm)
        setSubmitStatus("success")
        setContactForm({ name: "", email: "", subject: "", message: "" })
      } catch (error) {
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    },
    [contactForm, validateForm],
  )

  const handleNewsletterSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
        setNewsletterStatus("error")
        return
      }
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Newsletter signup:", newsletterEmail)
        setNewsletterStatus("success")
        setNewsletterEmail("")
      } catch (error) {
        setNewsletterStatus("error")
      }
    },
    [newsletterEmail],
  )

  const viewResume = useCallback(() => {
    window.open(personalInfo.resume, "_blank")
  }, [])

  const toggleSkillCategory = useCallback((category: string) => {
    setExpandedSkillCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }, [])

  // ==================== FILTERED DATA ====================
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  // ==================== RENDER ====================
  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkTheme ? "dark" : ""}`}>
      {/* Background */}
      <div className="fixed inset-0 -z-10 transition-all duration-500">
        <div
          className={`absolute inset-0 ${
            isDarkTheme
              ? "bg-gradient-to-br from-gray-900 via-teal-900 to-gray-800"
              : "bg-gradient-to-br from-teal-50 via-amber-50 to-white"
          }`}
        />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full filter blur-3xl opacity-40 animate-float" />
          <div
            className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-amber-400 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glassmorphism-strong rounded-full px-4 py-3 hidden md:block">
        <div className="flex items-center gap-4 lg:gap-6">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeSection === item.id
                  ? isDarkTheme
                    ? "bg-teal-500 text-white"
                    : "bg-teal-600 text-white"
                  : isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Toggle menu"
        >
          <FaBars className={`w-5 h-5 ${isDarkTheme ? "text-white" : "text-gray-800"}`} />
        </button>
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-16 left-0 glassmorphism-strong rounded-2xl p-4 min-w-[200px] animate-slide-down">
            <div className="flex flex-col gap-2">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeSection === item.id
                      ? isDarkTheme
                        ? "bg-teal-500 text-white"
                        : "bg-teal-600 text-white"
                      : isDarkTheme
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 glassmorphism-strong rounded-full transition-all hover:scale-110 active:scale-95 animate-pulse-glow cursor-pointer"
        aria-label="Toggle theme"
      >
        {isDarkTheme ? (
          <FaSun className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
        ) : (
          <FaMoon className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        )}
      </button>

      {/* Main Container */}
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionRefs.current["hero"] = el)}
          className="min-h-screen flex items-center justify-center px-4 py-20"
        >
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            <div className="glassmorphism-strong rounded-3xl p-6 md:p-12 mb-8">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-6 md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-purple-500 to-amber-400 rounded-full animate-pulse-glow" />
                <img
                  src={personalInfo.avatar || "/placeholder.svg"}
                  alt={personalInfo.name}
                  className="relative w-full h-full rounded-full border-4 border-white/50 shadow-2xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-colors ${
                  isDarkTheme ? "text-white" : "text-gray-800"
                }`}
              >
                {personalInfo.name}
              </h1>
              <p
                className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 transition-colors ${
                  isDarkTheme ? "text-teal-300" : "text-teal-600"
                }`}
              >
                {personalInfo.title}
              </p>
              <div
                className={`flex items-center justify-center gap-2 mb-6 md:mb-8 text-sm md:text-lg ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaMapMarkerAlt />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                <button
                  onClick={viewResume}
                  className="button-hover flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-sm md:text-base cursor-pointer"
                >
                  <FaEye className="w-4 h-4" />
                  View Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`button-hover flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 glassmorphism rounded-full font-semibold text-sm md:text-base cursor-pointer ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  <FaEnvelope className="w-4 h-4" />
                  Get In Touch
                </button>
              </div>
              <div className="flex justify-center gap-3 md:gap-4">
                {[
                  { name: "GitHub", icon: FaGithub, url: personalInfo.social.github },
                  { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin },
                  { name: "Email", icon: FaEnvelope, url: personalInfo.social.email },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon p-3 md:p-4 glassmorphism rounded-full cursor-pointer ${
                      isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                    }`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
            <button onClick={() => scrollToSection("about")} className="animate-bounce cursor-pointer">
              <FaChevronDown className={`w-6 h-6 md:w-8 md:h-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section ref={(el) => (sectionRefs.current["about"] = el)} className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="glassmorphism-strong rounded-3xl p-6 md:p-8 animate-slide-in-left">
                <p
                  className={`text-base md:text-lg leading-relaxed mb-6 ${isDarkTheme ? "text-gray-200" : "text-gray-700"}`}
                >
                  {personalInfo.bio}
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8">
                  <div className="text-center">
                    <div
                      className={`text-2xl md:text-3xl font-bold ${isDarkTheme ? "text-teal-300" : "text-teal-600"}`}
                    >
                      4+
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl md:text-3xl font-bold ${isDarkTheme ? "text-teal-300" : "text-teal-600"}`}
                    >
                      {projects.length}+
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl md:text-3xl font-bold ${isDarkTheme ? "text-teal-300" : "text-teal-600"}`}
                    >
                      {skills.length}+
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Technical Skills
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-2xl md:text-3xl font-bold ${isDarkTheme ? "text-teal-300" : "text-teal-600"}`}
                    >
                      {certifications.length}
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      Certifications
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 animate-slide-in-right">
                <div className="glassmorphism rounded-2xl p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <FaGraduationCap className="text-teal-500" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id} className="border-l-2 border-teal-500 pl-4">
                        <h4
                          className={`font-semibold text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                        >
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className={`text-sm ${isDarkTheme ? "text-teal-300" : "text-teal-600"}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
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
                </div>
                <div className="glassmorphism rounded-2xl p-4 md:p-6">
                  <h3
                    className={`text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 ${
                      isDarkTheme ? "text-white" : "text-gray-800"
                    }`}
                  >
                    <FaCertificate className="text-amber-500" />
                    Certifications
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    {certifications.map((cert) => (
                      <div key={cert.id} className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-medium text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                          >
                            {cert.name}
                          </h4>
                          <p className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section ref={(el) => (sectionRefs.current["skills"] = el)} className="py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Technical Skills & Expertise
            </h2>
            <p
              className={`text-center mb-8 md:mb-12 text-base md:text-lg ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
            >
              Explore my expertise across different technology domains
            </p>
            <div className="relative">
              <div className="overflow-x-auto scroll-container pb-4">
                <div className="flex gap-6 md:gap-8 min-w-max px-4">
                  {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
                    const isExpanded = expandedSkillCategories[category]
                    const displayedSkills = isExpanded ? categorySkills : categorySkills.slice(0, 4)
                    const remainingCount = categorySkills.length - 4

                    return (
                      <div
                        key={category}
                        className="flex-shrink-0 w-80 md:w-96 animate-slide-in-up"
                        style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                      >
                        <div className="glassmorphism-strong rounded-3xl p-6 md:p-8 h-full">
                          <div className="text-center mb-6 md:mb-8">
                            <div className="flex justify-center mb-4">
                              <div
                                className={`p-4 rounded-full ${
                                  category === "Frontend"
                                    ? "bg-blue-500/20"
                                    : category === "Backend"
                                      ? "bg-green-500/20"
                                      : category === "AI/ML"
                                        ? "bg-purple-500/20"
                                        : category === "DevOps"
                                          ? "bg-orange-500/20"
                                          : "bg-pink-500/20"
                                }`}
                              >
                                {category === "Frontend" && (
                                  <FaLaptopCode className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />
                                )}
                                {category === "Backend" && (
                                  <FaDatabase className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
                                )}
                                {category === "AI/ML" && (
                                  <FaBrain className="text-purple-500 w-8 h-8 md:w-10 md:h-10" />
                                )}
                                {category === "DevOps" && (
                                  <FaCloud className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />
                                )}
                                {category === "Mobile" && (
                                  <FaMobile className="text-pink-500 w-8 h-8 md:w-10 md:h-10" />
                                )}
                              </div>
                            </div>
                            <h3
                              className={`text-xl md:text-2xl font-bold mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                            >
                              {category}
                            </h3>
                            <div
                              className={`w-16 h-1 mx-auto rounded-full ${
                                category === "Frontend"
                                  ? "bg-blue-500"
                                  : category === "Backend"
                                    ? "bg-green-500"
                                    : category === "AI/ML"
                                      ? "bg-purple-500"
                                      : category === "DevOps"
                                        ? "bg-orange-500"
                                        : "bg-pink-500"
                              }`}
                            />
                          </div>
                          <div className="space-y-4">
                            {displayedSkills.map((skill, skillIndex) => (
                              <div
                                key={skill.name}
                                className="skill-card glassmorphism rounded-xl p-4 group"
                                style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                              >
                                <div className="flex justify-between items-center mb-3">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`skill-icon text-lg transition-all duration-300 group-hover:scale-110 group-hover:text-teal-500 ${
                                        isDarkTheme ? "text-gray-300" : "text-gray-700"
                                      }`}
                                    >
                                      {skill.icon}
                                    </div>
                                    <span
                                      className={`font-semibold text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                                    >
                                      {skill.name}
                                    </span>
                                  </div>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
                                      skill.level === "Expert"
                                        ? "bg-green-500 text-white group-hover:bg-green-400"
                                        : skill.level === "Advanced"
                                          ? "bg-blue-500 text-white group-hover:bg-blue-400"
                                          : skill.level === "Intermediate"
                                            ? "bg-yellow-500 text-white group-hover:bg-yellow-400"
                                            : "bg-gray-500 text-white group-hover:bg-gray-400"
                                    }`}
                                  >
                                    {skill.level}
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
                                  <div
                                    className={`skill-level-bar h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg ${
                                      skill.level === "Expert"
                                        ? "bg-gradient-to-r from-green-400 to-green-600 skill-level-expert"
                                        : skill.level === "Advanced"
                                          ? "bg-gradient-to-r from-blue-400 to-blue-600 skill-level-advanced"
                                          : skill.level === "Intermediate"
                                            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 skill-level-intermediate"
                                            : "bg-gradient-to-r from-gray-400 to-gray-600 skill-level-beginner"
                                    }`}
                                  />
                                </div>
                                <div
                                  className={`text-xs md:text-sm leading-relaxed transition-all duration-300 ${
                                    isDarkTheme
                                      ? "text-gray-300 group-hover:text-gray-200"
                                      : "text-gray-600 group-hover:text-gray-700"
                                  }`}
                                >
                                  {skill.description}
                                </div>
                              </div>
                            ))}
                          </div>
                          {categorySkills.length > 4 && (
                            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                              <button
                                onClick={() => toggleSkillCategory(category)}
                                className={`flex items-center justify-center gap-2 mx-auto px-4 py-2 rounded-lg transition-all cursor-pointer ${
                                  isDarkTheme
                                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                                    : "text-gray-500 hover:text-gray-800 hover:bg-black/10"
                                }`}
                              >
                                {isExpanded ? (
                                  <>
                                    <FaChevronUp className="w-3 h-3" />
                                    <span className="text-sm">Show Less</span>
                                  </>
                                ) : (
                                  <>
                                    <FaPlus className="w-3 h-3" />
                                    <span className="text-sm">+{remainingCount} more</span>
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex justify-between items-center text-sm">
                              <span className={isDarkTheme ? "text-gray-400" : "text-gray-500"}>
                                {categorySkills.length} Skills
                              </span>
                              <div className="flex gap-1">
                                {categorySkills.map((skill, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                      skill.level === "Expert"
                                        ? "bg-green-500"
                                        : skill.level === "Advanced"
                                          ? "bg-blue-500"
                                          : skill.level === "Intermediate"
                                            ? "bg-yellow-500"
                                            : "bg-gray-500"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:hidden">
                <div className={`flex items-center gap-2 text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                  <span>Swipe to explore more skills</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <div
                      className="w-2 h-2 rounded-full bg-teal-500/50 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-teal-500/25 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <div className="glassmorphism-strong rounded-2xl p-6 md:p-8">
                <h3
                  className={`text-xl md:text-2xl font-bold text-center mb-6 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                >
                  Skills Overview
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                  {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                    const expertCount = categorySkills.filter((skill) => skill.level === "Expert").length
                    const advancedCount = categorySkills.filter((skill) => skill.level === "Advanced").length
                    return (
                      <div key={category} className="text-center">
                        <div
                          className={`text-2xl md:text-3xl font-bold mb-1 ${
                            category === "Frontend"
                              ? "text-blue-500"
                              : category === "Backend"
                                ? "text-green-500"
                                : category === "AI/ML"
                                  ? "text-purple-500"
                                  : category === "DevOps"
                                    ? "text-orange-500"
                                    : "text-pink-500"
                          }`}
                        >
                          {categorySkills.length}
                        </div>
                        <div
                          className={`text-xs md:text-sm font-medium mb-1 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                        >
                          {category}
                        </div>
                        <div className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                          {expertCount + advancedCount} Advanced+
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={(el) => (sectionRefs.current["projects"] = el)} className="py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-center mb-8 md:mb-12 text-base md:text-lg ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
            >
              A showcase of my recent work in full-stack development and AI research
            </p>
            <div className="flex justify-center mb-8 md:mb-12 px-2">
              <div className="glassmorphism rounded-full p-2 max-w-full overflow-x-auto scroll-container">
                <div className="flex gap-2 min-w-max">
                  {["All", "Web", "AI", "Mobile", "Research"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`button-hover px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base whitespace-nowrap cursor-pointer ${
                        selectedCategory === category
                          ? "bg-teal-500 text-white"
                          : isDarkTheme
                            ? "text-gray-300 hover:text-white hover:bg-white/10"
                            : "text-gray-600 hover:text-gray-800 hover:bg-black/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card glassmorphism-strong rounded-2xl overflow-hidden animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <div className="absolute top-3 md:top-4 left-3 md:left-4">
                      <span
                        className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500 text-white"
                            : project.status === "In Progress"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-500 text-white"
                        }`}
                      >
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
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-3 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      {expandedProject === project.id ? project.longDescription : project.description}
                    </p>
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
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
                          onClick={() => setExpandedTechs(expandedTechs === project.id ? null : project.id)}
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
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-hover flex items-center gap-2 px-3 md:px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium flex-1 justify-center cursor-pointer"
                      >
                        <FaEye className="w-3 h-3 md:w-4 md:h-4" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`button-hover flex items-center gap-2 px-3 md:px-4 py-2 glassmorphism rounded-lg text-sm font-medium flex-1 justify-center cursor-pointer ${
                          isDarkTheme ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-black/10"
                        }`}
                      >
                        <FaCode className="w-3 h-3 md:w-4 md:h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={(el) => (sectionRefs.current["experience"] = el)} className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Professional Experience
            </h2>
            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-amber-500" />
              <div className="space-y-8 md:space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute left-4 md:left-6 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg" />
                    <div className="ml-16 md:ml-20 glassmorphism-strong rounded-2xl p-6 md:p-8 button-hover">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="mb-2 lg:mb-0">
                          <h3
                            className={`text-lg md:text-xl font-semibold ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                          >
                            {exp.position}
                          </h3>
                          <p className="text-teal-500 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-left lg:text-right">
                          <p
                            className={`font-medium text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
                          >
                            {exp.duration}
                          </p>
                          <p className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                            {exp.location}
                          </p>
                          {exp.current && (
                            <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs rounded-full mt-1">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <ul
                        className={`space-y-2 mb-6 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaChevronRight className="text-teal-500 mt-1 flex-shrink-0 w-3 h-3" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full ${
                              isDarkTheme ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="glassmorphism-strong rounded-2xl p-4 md:p-6 animate-slide-in-up button-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-3 h-3 md:w-4 md:h-4" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-teal-500 w-5 h-5 md:w-6 md:h-6 mb-4" />
                  <p className={`mb-6 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-700"}`}>
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4
                        className={`font-semibold text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                      >
                        {testimonial.name}
                      </h4>
                      <p className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}>
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog/Articles Section - Coming Soon - These are generic and AI made info, :) */}

        {/* <section className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Latest Articles
            </h2>
            <p
              className={`text-center mb-8 md:mb-12 text-base md:text-lg ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
            >
              Sharing insights on technology, development, and AI research
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="glassmorphism-strong rounded-2xl overflow-hidden button-hover animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaNewspaper className="text-teal-500" />
                      <span className={`text-xs md:text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`}>
                        {article.category}
                      </span>
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-3 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      {article.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
                        <span className={`flex items-center gap-1 ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}>
                          <FaCalendar className="w-3 h-3" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                        <span className={isDarkTheme ? "text-gray-400" : "text-gray-500"}>{article.readTime}</span>
                      </div>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
                      >
                        <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section - Mail Feature is already building :) */}
        <section ref={(el) => (sectionRefs.current["contact"] = el)} className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
            >
              Let's Work Together
            </h2>
            <p
              className={`text-center mb-8 md:mb-12 text-base md:text-lg ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}
            >
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 animate-slide-in-left">
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-6 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                >
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500 rounded-full">
                      <FaEnvelope className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className={`font-medium text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                        Email
                      </p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-teal-500 hover:text-teal-600 transition-colors text-sm md:text-base break-all cursor-pointer"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-500 rounded-full">
                      <FaMapMarkerAlt className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className={`font-medium text-sm md:text-base ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                        Location
                      </p>
                      <p className={`text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4
                    className={`text-base md:text-lg font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                  >
                    Follow Me
                  </h4>
                  <div className="flex gap-3 md:gap-4">
                    {[
                      { name: "GitHub", icon: FaGithub, url: personalInfo.social.github },
                      { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-icon p-2 md:p-3 glassmorphism rounded-full cursor-pointer ${
                          isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                        }`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glassmorphism-strong rounded-2xl p-6 md:p-8 animate-slide-in-right">
                <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                        formErrors.name
                          ? "border-red-500"
                          : isDarkTheme
                            ? "border-gray-600 text-white placeholder-gray-400"
                            : "border-gray-300 text-gray-800 placeholder-gray-500"
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <FaTimes className="w-3 h-3" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                        formErrors.email
                          ? "border-red-500"
                          : isDarkTheme
                            ? "border-gray-600 text-white placeholder-gray-400"
                            : "border-gray-300 text-gray-800 placeholder-gray-500"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <FaTimes className="w-3 h-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                        formErrors.subject
                          ? "border-red-500"
                          : isDarkTheme
                            ? "border-gray-600 text-white placeholder-gray-400"
                            : "border-gray-300 text-gray-800 placeholder-gray-500"
                      }`}
                      placeholder="Project discussion, collaboration, etc."
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <FaTimes className="w-3 h-3" />
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-sm md:text-base ${
                        formErrors.message
                          ? "border-red-500"
                          : isDarkTheme
                            ? "border-gray-600 text-white placeholder-gray-400"
                            : "border-gray-300 text-gray-800 placeholder-gray-500"
                      }`}
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <FaTimes className="w-3 h-3" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-hover w-full flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <FaCheck className="text-green-500 w-4 h-4 md:w-5 md:h-5" />
                      <p className="text-green-500 font-medium text-sm md:text-base">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <FaTimes className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                      <p className="text-red-500 font-medium text-sm md:text-base">
                        Something went wrong. Please try again or contact me directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section - The send email feature is already under construction :) */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glassmorphism-strong rounded-3xl p-8 md:p-12">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                Stay Updated
              </h2>
              <p className={`text-base md:text-lg mb-6 md:mb-8 ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                Get notified about my latest projects, articles, and tech insights
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg glassmorphism border transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base ${
                    isDarkTheme
                      ? "border-gray-600 text-white placeholder-gray-400"
                      : "border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <button
                  type="submit"
                  className="button-hover px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold text-sm md:text-base whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              {newsletterStatus === "success" && (
                <p className="text-green-500 mt-4 flex items-center justify-center gap-2 text-sm md:text-base">
                  <FaCheck />
                  Thanks for subscribing!
                </p>
              )}
              {newsletterStatus === "error" && (
                <p className="text-red-500 mt-4 flex items-center justify-center gap-2 text-sm md:text-base">
                  <FaTimes />
                  Please enter a valid email address
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <h3 className={`text-lg md:text-xl font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
                  Sebastián Escobar
                </h3>
                <p className={`mb-4 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  Full-Stack & AI Developer passionate about creating innovative solutions that make a difference.
                </p>
                <div className="flex gap-3 md:gap-4">
                  {[
                    { name: "GitHub", icon: FaGithub, url: personalInfo.social.github },
                    { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon p-2 glassmorphism rounded-full cursor-pointer ${
                        isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                      }`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4
                  className={`text-base md:text-lg font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                >
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "About", id: "about" },
                    { label: "Projects", id: "projects" },
                    { label: "Experience", id: "experience" },
                    { label: "Contact", id: "contact" },
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className={`transition-colors hover:text-teal-500 text-sm md:text-base cursor-pointer ${
                          isDarkTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  className={`text-base md:text-lg font-semibold mb-4 ${isDarkTheme ? "text-white" : "text-gray-800"}`}
                >
                  Services
                </h4>
                <ul className={`space-y-2 text-sm md:text-base ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                  <li>Full-Stack Development</li>
                  <li>AI/ML Solutions</li>
                  <li>Technical Consulting</li>
                  <li>Code Review & Mentoring</li>
                </ul>
              </div>
            </div>
            <div
              className={`pt-6 md:pt-8 border-t border-white/10 text-center text-sm md:text-base ${isDarkTheme ? "text-gray-400" : "text-gray-500"}`}
            >
              <p className="flex items-center justify-center gap-2">
                Made with <FaHeart className="text-red-500" /> by Sebastián Escobar
              </p>
              <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App