import { memo } from 'react'
import { TestimonialCard } from '../cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'

interface TestimonialsProps {
  isDarkTheme: boolean
}

export const Testimonials = memo<TestimonialsProps>(({ isDarkTheme }) => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}>
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
      </div>
    </section>
  )
})