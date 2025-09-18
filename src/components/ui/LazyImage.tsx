import React, { useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
  placeholder?: React.ReactNode
  containerClassName?: string
  fadeIn?: boolean
  threshold?: number
  rootMargin?: string
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallback = '/placeholder.svg',
  placeholder,
  containerClassName = '',
  fadeIn = true,
  threshold = 0.1,
  rootMargin = '50px',
  className = '',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>('')
  
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin
  })

  React.useEffect(() => {
    if (hasIntersected && !imageSrc && src && src.trim() !== '') {
      setImageSrc(src)
    }
  }, [hasIntersected, src, imageSrc])

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true)
    onLoad?.(event)
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true)
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback)
      setHasError(false)
    }
    onError?.(event)
  }

  const imageClasses = `
    ${className}
    ${fadeIn ? 'transition-opacity duration-300' : ''}
    ${isLoaded ? 'opacity-100' : 'opacity-0'}
  `.trim().replace(/\s+/g, ' ')

  const containerClasses = `
    relative overflow-hidden
    ${containerClassName}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div ref={elementRef} className={containerClasses}>
      {!hasIntersected && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          {placeholder}
        </div>
      )}
      
      {!hasIntersected && !placeholder && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}
      
      {hasIntersected && imageSrc && (
        <>
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-teal-500 border-t-transparent" />
            </div>
          )}
          
          <img
            src={imageSrc}
            alt={alt}
            className={imageClasses}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            {...props}
          />
          
          {hasError && !fallback && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <div className="text-2xl mb-2">🖼️</div>
                <div className="text-sm">Failed to load image</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

interface LazyBackgroundImageProps {
  src: string
  children?: React.ReactNode
  className?: string
  fallback?: string
  threshold?: number
  rootMargin?: string
}

export const LazyBackgroundImage: React.FC<LazyBackgroundImageProps> = ({
  src,
  children,
  className = '',
  fallback,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin
  })

  React.useEffect(() => {
    if (hasIntersected && !backgroundImage) {
      const img = new Image()
      img.onload = () => {
        setBackgroundImage(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        if (fallback) {
          setBackgroundImage(fallback)
          setIsLoaded(true)
        }
      }
      img.src = src
    }
  }, [hasIntersected, src, backgroundImage, fallback])

  const containerClasses = `
    ${className}
    transition-opacity duration-300
    ${isLoaded ? 'opacity-100' : 'opacity-0'}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div
      ref={elementRef}
      className={containerClasses}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
      )}
      {children}
    </div>
  )
}