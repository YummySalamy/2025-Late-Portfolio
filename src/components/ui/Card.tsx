import React from 'react'

interface CardProps {
  variant?: 'default' | 'glassmorphism' | 'strong'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  shadow?: boolean
  className?: string
  style?: React.CSSProperties;
  children: React.ReactNode
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = false,
  padding = 'md',
  rounded = 'lg',
  shadow = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const baseClasses = 'transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    glassmorphism: 'glassmorphism',
    strong: 'glassmorphism-strong'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8'
  }
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  }
  
  const hoverClasses = hover ? 'button-hover cursor-pointer' : ''
  const shadowClasses = shadow ? 'shadow-lg hover:shadow-xl' : ''
  const clickableClasses = onClick ? 'cursor-pointer' : ''
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${roundedClasses[rounded]}
    ${hoverClasses}
    ${shadowClasses}
    ${clickableClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ')
  
  const Component = onClick ? 'button' : 'div'
  
  return (
    <Component
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  )
}

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
)

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => (
  <div className={className}>
    {children}
  </div>
)

interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = ({ className = '', children }) => (
  <div className={`mt-4 ${className}`}>
    {children}
  </div>
)