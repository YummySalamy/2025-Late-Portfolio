import { useState, useCallback } from 'react'

export const useNewsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle")

  const handleNewsletterSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      
      if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
        setNewsletterStatus("error")
        return
      }
      
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Newsletter signup:", newsletterEmail)
        setNewsletterStatus("success")
        setNewsletterEmail("")
      } catch (error) {
        setNewsletterStatus("error")
      }
    },
    [newsletterEmail]
  )

  const resetNewsletterStatus = useCallback(() => {
    setNewsletterStatus("idle")
  }, [])

  return {
    newsletterEmail,
    setNewsletterEmail,
    newsletterStatus,
    handleNewsletterSubmit,
    resetNewsletterStatus
  }
}