'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'
import { Phone, Clock, AlertTriangle, Shield, Zap, CheckCircle } from 'lucide-react'

const metadata = {
  title: '24/7 Emergency Pest Control | Modern Pest Control Tanzania',
  description: '24/7 emergency pest control services across Tanzania. Fast response for urgent pest situations. Call +255 754 307 321 anytime.',
}

const emergencyTypes = [
  {
    icon: AlertTriangle,
    title: 'Dangerous Wildlife',
    description: 'Snakes, scorpions, or other dangerous animals in your home or business',
    urgency: 'Immediate',
  },
  {
    icon: Shield,
    title: 'Health Threat',
    description: 'Pests in food preparation areas, hospitals, or affecting vulnerable individuals',
    urgency: 'High',
  },
  {
    icon: Zap,
    title: 'Severe Infestation',
    description: 'Large-scale infestations requiring immediate attention to prevent property damage',
    urgency: 'High',
  },
  {
    icon: Clock,
    title: 'Business Critical',
    description: 'Pest issues affecting business operations, health inspections, or customer safety',
    urgency: 'High',
  },
]

const responseTimes = [
  { area: 'Dar es Salaam', time: '1-2 hours' },
  { area: 'Arusha', time: '2-3 hours' },
  { area: 'Mwanza', time: '2-4 hours' },
  { area: 'Other Cities', time: '3-4 hours' },
]

export default function EmergencyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <Phone size={64} className="text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                24/7 Emergency Pest Control
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Fast, professional response when you need it most
              </p>
              <motion.a
                href="tel:+255754307321"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-yellow-400 text-red-900 rounded-lg font-bold text-xl shadow-2xl hover:bg-yellow-300 transition-colors"
              >
                <Phone size={28} />
                <span>Call Now: +255 754 307 321</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Emergency Types */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                When to Call Emergency Service
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don&apos;t wait - call immediately for these urgent situations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.title}
                    className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:border-red-400 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-primary">
                            {type.title}
                          </h3>
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {type.urgency}
                          </span>
                        </div>
                        <p className="text-gray-700">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Fast Response Times
              </h2>
              <p className="text-xl text-gray-600">
                We&apos;re committed to rapid response across Tanzania
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {responseTimes.map((item, index) => (
                <div
                  key={item.area}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.time}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {item.area}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What to Expect
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Call Us',
                  description: 'Call our 24/7 emergency line. Our team will assess the situation and dispatch a technician immediately.',
                },
                {
                  step: '2',
                  title: 'Fast Arrival',
                  description: 'Our emergency technician arrives within 1-4 hours depending on your location, fully equipped to handle the situation.',
                },
                {
                  step: '3',
                  title: 'Immediate Action',
                  description: 'We take immediate action to resolve the emergency, ensuring your safety and preventing further damage.',
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Emergency Service Right Now?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Don&apos;t wait - call us immediately for fast, professional emergency pest control
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+255754307321"
                className="px-8 py-4 bg-yellow-400 text-red-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              >
                <Phone className="inline mr-2" size={24} />
                Call Emergency: +255 754 307 321
              </a>
              <a
                href="https://wa.me/255754307321"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

