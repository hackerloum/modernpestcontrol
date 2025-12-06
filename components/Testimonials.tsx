'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const testimonials = [
  {
    id: 1,
    name: 'Oscar Herman',
    location: 'Dar es Salaam',
    rating: 5,
    text: 'Kingo Pest Control eliminated our termite problem completely. The technicians were professional, knowledgeable, and respectful of our home. Highly recommend!',
    initials: 'OH',
  },
  {
    id: 2,
    name: 'Agnes Zaabron',
    location: 'Arusha',
    rating: 5,
    text: 'We had a severe rodent issue at our restaurant. They came out immediately, identified the problem, and solved it within days. Our health inspection passed with flying colors!',
    initials: 'AZ',
  },
  {
    id: 3,
    name: 'DART',
    location: 'Mwanza',
    rating: 5,
    text: 'The bed bug treatment was thorough and effective. They used eco-friendly methods which was important to us with young children. No issues since!',
    initials: 'DT',
  },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-lime/10 flex items-center justify-center mb-6">
                  <Quote className="text-accent" size={32} />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-accent text-accent"
                      size={24}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-primary text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

