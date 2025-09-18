import { useState, useCallback } from 'react'
import type { ContactForm, FormErrors } from '../types'

export const useForm = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = useCallback((form: ContactForm): FormErrors => {
    const errors: FormErrors = {}
    
    if (!form.name.trim()) {
      errors.name = "Name is required"
    }
    
    if (!form.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email"
    }
    
    if (!form.subject.trim()) {
      errors.subject = "Subject is required"
    }
    
    if (!form.message.trim()) {
      errors.message = "Message is required"
    } else if (form.message.length < 10) {
      errors.message = "Message must be at least 10 characters"
    }
    
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
        // Simulate API call
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
    },
    [contactForm, validateForm]
  )

  const updateForm = useCallback((updates: Partial<ContactForm>) => {
    setContactForm(prev => ({ ...prev, ...updates }))
  }, [])

  return {
    contactForm,
    formErrors,
    isSubmitting,
    submitStatus,
    handleContactSubmit,
    updateForm,
    setFormErrors
  }
}