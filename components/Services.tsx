'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Home,
  Building2,
  Bug,
  Rat,
  BedDouble,
  Squirrel,
  ArrowRight,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const services = [
  {
    icon: Home,
    key: 'residential',
    slug: 'residential',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Building2,
    key: 'commercial',
    slug: 'commercial',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Bug,
    key: 'termite',
    slug: 'termite-control',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Rat,
    key: 'rodent',
    slug: 'rodent-control',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: BedDouble,
    key: 'bedbug',
    slug: 'bed-bug-treatment',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Squirrel,
    key: 'wildlife',
    slug: 'wildlife-removal',
    color: 'from-teal-500 to-teal-600',
  },
]

export default function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section-padding bg-white">
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
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`services.${service.key}.desc`)}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-accent font-semibold group-hover:space-x-3 transition-all duration-300"
                  >
                    <span>{t('services.learnMore')}</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

