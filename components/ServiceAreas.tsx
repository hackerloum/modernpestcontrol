'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const serviceAreas = [
  'Dar es Salaam',
  'Arusha',
  'Mwanza',
  'Dodoma',
  'Zanzibar City',
  'Mbeya',
  'Morogoro',
  'Tanga',
  'Kigoma',
  'Mtwara',
  'Iringa',
  'Tabora',
  'Sumbawanga',
  'Moshi',
  'Bukoba',
  'Singida',
  'Shinyanga',
  'Lindi',
  'Musoma',
  'Bagamoyo',
]

export default function ServiceAreas() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAreas = serviceAreas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="service-areas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('areas.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('areas.subtitle')}
          </p>
        </motion.div>


        {/* Area Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t('areas.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-gray-50 rounded-lg p-4 hover:bg-accent/10 transition-colors cursor-pointer border border-gray-200 hover:border-accent"
              >
                <MapPin className="text-accent flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">{area}</span>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              {t('areas.notFound')}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            {t('areas.cta')}
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            {t('areas.contact')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

