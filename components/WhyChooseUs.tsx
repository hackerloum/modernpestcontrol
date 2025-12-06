'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  Award,
  Leaf,
  Clock,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const differentiators = [
  { icon: Award, key: 'licensed' },
  { icon: Leaf, key: 'eco' },
  { icon: Clock, key: 'emergency' },
  { icon: ShieldCheck, key: 'guarantee' },
]

const stats = [
  { value: 25, suffix: '+', key: 'years' },
  { value: 5000, suffix: '+', key: 'customers' },
  { value: 98, suffix: '%', key: 'success' },
]

// Counter animation component
function Counter({ value, suffix, label, isInView }: {
  value: number
  suffix: string
  label: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

export default function WhyChooseUs() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="why-choose-us"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
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
            {t('why.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {t(`why.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`why.${item.key}.desc`)}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Statistics Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={t(`why.stats.${stat.key}`)}
                  isInView={isInView}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

