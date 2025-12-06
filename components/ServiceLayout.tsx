'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import {
  CheckCircle2,
  Phone,
  Calendar,
  Home,
  Building2,
  Bug,
  Rat,
  BedDouble,
  Squirrel,
  LucideIcon,
} from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Bug,
  Rat,
  BedDouble,
  Squirrel,
}

interface ServiceLayoutProps {
  iconName: string
  title: string
  description: string
  color: string
  children: ReactNode
  features: string[]
  heroImage?: string
  processSteps?: Array<{
    step: string
    description: string
  }>
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export default function ServiceLayout({
  iconName,
  title,
  description,
  color,
  children,
  features,
  heroImage,
  processSteps,
  faqs,
}: ServiceLayoutProps) {
  const Icon = iconMap[iconName] || Home
  
  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.querySelector('#contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])
  
  const handleScheduleClick = (e: React.MouseEvent) => {
    // If on a service page, navigate to home page contact section
    if (window.location.pathname !== '/') {
      e.preventDefault()
      window.location.href = '/#contact'
    } else {
      // If already on home page, scroll to contact section
      e.preventDefault()
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            />
            <div className="absolute inset-0 bg-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/60" />
          </div>
        )}
        {!heroImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-6`}
            >
              <Icon className="text-white" size={40} />
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${heroImage ? 'text-white' : 'text-primary'}`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl leading-relaxed ${heroImage ? 'text-gray-200' : 'text-gray-600'}`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.a
                href="/#contact"
                onClick={handleScheduleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-accent-dark transition-colors"
              >
                <Calendar size={20} />
                <span>Schedule Inspection</span>
              </motion.a>
              <motion.a
                href="tel:+255754307321"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Our {title} Service?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
                >
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our {title} Process
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a free inspection and customized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/#contact"
                onClick={handleScheduleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-accent-dark transition-colors"
              >
                <Calendar size={20} />
                <span>Schedule Free Inspection</span>
              </motion.a>
              <motion.a
                href="tel:+255754307321"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>+255 754 307 321</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

