import React, { memo, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { personalInfo } from '../../data/personal'
import { validateForm } from '../../utils/performance'
import type { ContactForm, FormErrors } from '../../types'

interface ContactProps {
  isDarkTheme: boolean
}

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: personalInfo.social.github },
  { name: "LinkedIn", icon: FaLinkedin, url: personalInfo.social.linkedin }
]

export const Contact = memo<ContactProps>(({ isDarkTheme }) => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle")

  const handleContactSubmit = async (e: React.FormEvent) => {
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
      setFormErrors({})
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
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
  }

  const updateForm = (updates: Partial<ContactForm>) => {
    setContactForm(prev => ({ ...prev, ...updates }))
  }

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          Let's Work Together
        </h2>
        
        <p className={`text-center mb-8 md:mb-12 text-base md:text-lg ${
          isDarkTheme ? "text-gray-300" : "text-gray-600"
        }`}>
          Have a project in mind? Let's discuss how we can bring your ideas to life.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card
            variant="strong"
            rounded="2xl"
            padding="lg"
            className="animate-slide-in-left"
          >
            <h3 className={`text-xl md:text-2xl font-semibold mb-6 ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}>
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-500 rounded-full">
                  <FaEnvelope className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className={`font-medium text-sm md:text-base ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}>
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
                  <p className={`font-medium text-sm md:text-base ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}>
                    Location
                  </p>
                  <p className={`text-sm md:text-base ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className={`text-base md:text-lg font-semibold mb-4 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon p-2 md:p-3 glassmorphism rounded-full cursor-pointer transition-all hover:scale-110 ${
                      isDarkTheme ? "hover:bg-white/10 text-white" : "hover:bg-black/10 text-gray-700"
                    }`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </Card>
          
          <Card
            variant="strong"
            rounded="2xl"
            padding="lg"
            className="animate-slide-in-right"
          >
            <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
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
                  className={`block text-sm font-medium mb-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
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
                  className={`block text-sm font-medium mb-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={contactForm.subject}
                  onChange={(e) => updateForm({ subject: e.target.value })}
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
                  className={`block text-sm font-medium mb-2 ${
                    isDarkTheme ? "text-white" : "text-gray-800"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => updateForm({ message: e.target.value })}
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
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                leftIcon={!isSubmitting ? <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" /> : undefined}
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
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
          </Card>
        </div>
        
        <div className="mt-16 md:mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card variant="strong" rounded="3xl" padding="lg">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
                isDarkTheme ? "text-white" : "text-gray-800"
              }`}>
                Stay Updated
              </h2>
              <p className={`text-base md:text-lg mb-6 md:mb-8 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}>
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
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
})