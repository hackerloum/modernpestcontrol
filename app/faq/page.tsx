'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What areas do you serve?',
        answer: 'We proudly serve over 20 cities across Tanzania, including Dar es Salaam, Arusha, Mwanza, Dodoma, Zanzibar City, Mbeya, Morogoro, Tanga, and many more. Contact us to check if we serve your area.',
      },
      {
        question: 'How quickly can you respond to a pest problem?',
        answer: 'For emergency situations, we offer 24/7 service and can typically respond within 2-4 hours. For regular appointments, we can usually schedule a visit within 24-48 hours.',
      },
      {
        question: 'Are your treatments safe for children and pets?',
        answer: 'Yes, absolutely. We use eco-friendly, family-safe pest control methods. Our technicians will provide specific instructions for any necessary precautions, but our treatments are designed to be safe for your entire family, including pets.',
      },
      {
        question: 'Do you offer free inspections?',
        answer: 'Yes, we offer free inspections for all new customers. Our licensed technicians will thoroughly examine your property, identify any pest issues, and provide a detailed report with treatment recommendations.',
      },
    ],
  },
  {
    category: 'Services & Treatment',
    questions: [
      {
        question: 'What types of pests do you treat?',
        answer: 'We treat all common pests including ants, cockroaches, termites, rodents (rats and mice), bed bugs, mosquitoes, flies, spiders, wasps, and wildlife removal. We also offer specialized treatments for commercial pest control needs.',
      },
      {
        question: 'How long does a treatment take?',
        answer: 'Treatment time varies depending on the type and severity of the infestation. A typical residential treatment takes 1-2 hours, while commercial treatments may take longer. We\'ll provide an estimated timeframe during your free inspection.',
      },
      {
        question: 'Do I need to leave my home during treatment?',
        answer: 'In most cases, you can remain in your home during treatment. However, for certain intensive treatments (like bed bug heat treatment), we may recommend temporarily vacating. Our technician will inform you of any specific requirements before treatment begins.',
      },
      {
        question: 'How often should I schedule pest control services?',
        answer: 'We recommend quarterly treatments (every 3 months) for ongoing protection. However, the frequency depends on your location, property type, and pest pressure. We can create a customized maintenance plan during your inspection.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        question: 'How much does pest control cost?',
        answer: 'Pricing varies based on the type of service, property size, and severity of infestation. We provide free, no-obligation quotes after inspection. Contact us for a personalized estimate.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options for larger projects. We accept cash, mobile money (M-Pesa, Tigo Pesa, Airtel Money), and bank transfers. Payment plans can be discussed during your consultation.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No, we believe in transparent pricing. All costs will be clearly explained during your free inspection and quote. There are no hidden fees or surprise charges.',
      },
    ],
  },
  {
    category: 'Guarantees & Warranties',
    questions: [
      {
        question: 'Do you offer a guarantee?',
        answer: 'Yes, we offer a 100% satisfaction guarantee. If you\'re not satisfied with our service, we\'ll return to re-treat at no additional cost. We also offer warranties on specific treatments - details will be provided with your quote.',
      },
      {
        question: 'What if pests come back after treatment?',
        answer: 'If pests return within the warranty period, we\'ll provide a free re-treatment. Our goal is complete pest elimination, and we stand behind our work.',
      },
      {
        question: 'Are your technicians licensed and insured?',
        answer: 'Yes, all our technicians are fully licensed by the relevant Tanzanian authorities and carry comprehensive insurance. We maintain all required certifications and stay updated with the latest pest control techniques.',
      },
    ],
  },
  {
    category: 'Emergency Services',
    questions: [
      {
        question: 'Do you offer 24/7 emergency service?',
        answer: 'Yes, we offer 24/7 emergency pest control services for urgent situations such as dangerous wildlife, severe infestations, or pest-related health concerns. Call us anytime at +255 754 307 321.',
      },
      {
        question: 'What constitutes a pest emergency?',
        answer: 'Emergencies include: dangerous wildlife in your home (snakes, scorpions), severe infestations affecting health, pests in food preparation areas, or situations requiring immediate attention to prevent property damage.',
      },
      {
        question: 'Is there an extra charge for emergency service?',
        answer: 'Emergency service calls may have a slightly higher rate due to the immediate response required. However, we always provide transparent pricing before beginning any work.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url(https://plus.unsplash.com/premium_photo-1663047003710-59dca9550087?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              }}
            />
            <div className="absolute inset-0 bg-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/60" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <HelpCircle size={64} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Find answers to common questions about our pest control services
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const globalIndex = categoryIndex * 100 + index
                      const isOpen = openIndex === globalIndex
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => toggleQuestion(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`flex-shrink-0 text-primary transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              size={20}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-gray-200 mb-6">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+255754307321"
                  className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
                >
                  Call Us: +255 754 307 321
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

