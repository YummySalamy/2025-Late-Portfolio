export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = reject
      img.src = src
    })
}
  
export const preloadImages = async (imageSources: string[]): Promise<void> => {
    const validSources = imageSources.filter(src => src && src.trim() !== '')
    
    try {
      await Promise.all(validSources.map(src => preloadImage(src)))
    } catch (error) {
      console.warn('Some images failed to preload:', error)
    }
}
  
export const isElementInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}
  
export const getElementOffsetTop = (element: HTMLElement): number => {
    let offsetTop = 0
    let currentElement: HTMLElement | null = element
    
    while (currentElement) {
      offsetTop += currentElement.offsetTop
      currentElement = currentElement.offsetParent as HTMLElement
    }
    
    return offsetTop
}
  
export const smoothScrollTo = (element: HTMLElement, offset: number = 0): void => {
    const elementPosition = getElementOffsetTop(element) - offset
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
}
  
export const optimizeScrollHandler = (callback: () => void): (() => void) => {
    let ticking = false
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback()
          ticking = false
        })
        ticking = true
      }
    }
}
  
export const createIntersectionObserver = (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    }
    
    return new IntersectionObserver(callback, defaultOptions)
}
  
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
}
  
export const validateForm = (form: { [key: string]: string }): { [key: string]: string } => {
    const errors: { [key: string]: string } = {}
    
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
      }
    })
    
    if (form.email && !validateEmail(form.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (form.message && form.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    
    return errors
}
  
export const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      return dateString
    }
}
  
export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textArea)
      return success
    }
}