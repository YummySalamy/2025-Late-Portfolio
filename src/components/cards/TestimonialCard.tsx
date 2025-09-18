import { memo } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Card } from '../ui/Card'
import { LazyImage } from '../ui/LazyImage'
import type { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  isDarkTheme: boolean
}

export const TestimonialCard = memo<TestimonialCardProps>(({ 
  testimonial, 
  index, 
  isDarkTheme 
}) => {
  const animationDelay = `${index * 0.1}s`
  
  return (
    <Card
      variant="strong"
      rounded="2xl"
      padding="md"
      hover
      className="animate-slide-in-up"
      style={{ animationDelay }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 w-3 h-3 md:w-4 md:h-4" />
        ))}
      </div>
      
      <FaQuoteLeft className="text-teal-500 w-5 h-5 md:w-6 md:h-6 mb-4" />
      
      <p className={`mb-6 text-sm md:text-base leading-relaxed ${
        isDarkTheme ? "text-gray-300" : "text-gray-700"
      }`}>
        {testimonial.content}
      </p>
      
      <div className="flex items-center gap-3">
        <LazyImage
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          containerClassName="flex-shrink-0"
          placeholder={
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          }
        />
        
        <div className="min-w-0 flex-1">
          <h4 className={`font-semibold text-sm md:text-base truncate ${
            isDarkTheme ? "text-white" : "text-gray-800"
          }`}>
            {testimonial.name}
          </h4>
          <p className={`text-xs md:text-sm truncate ${
            isDarkTheme ? "text-gray-400" : "text-gray-600"
          }`}>
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  )
})