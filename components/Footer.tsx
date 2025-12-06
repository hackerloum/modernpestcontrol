'use client'

import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  CheckCircle,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/#services' },
  { key: 'blog', href: '/blog' },
  { key: 'gallery', href: '/gallery' },
  { key: 'faq', href: '/faq' },
  { key: 'emergency', href: '/emergency' },
  { key: 'contact', href: '/#contact' },
]

const companyLinks = [
  { key: 'guarantee', href: '/guarantee' },
  { key: 'privacy', href: '/privacy' },
  { key: 'terms', href: '/terms' },
]

const serviceKeys = [
  'residential',
  'commercial',
  'termite',
  'rodent',
  'bedbug',
  'wildlife',
]

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/kingopest_tz', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/KingoPest_tz/', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const { t } = useLanguage()
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // Handle hash links (same page)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href.startsWith('/#')) {
      // Handle route with hash (e.g., /#contact)
      const hash = href.substring(1)
      if (window.location.pathname === '/') {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
    } else {
      // Handle route links (different pages)
      window.location.href = href
    }
  }

  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Kingo Pest Control
              </span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {t(`footer.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('#services')
                    }}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {t(`services.${key}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {t(`footer.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-accent flex-shrink-0 mt-1" size={18} />
                <a
                  href="tel:+255754307321"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  +255 754 307 321
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-accent flex-shrink-0 mt-1" size={18} />
                <a
                  href="mailto:info@modernpestcontrol.co.tz"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  info@modernpestcontrol.co.tz
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Boko Basihaya, Kinondoni
                  <br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-accent flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 9AM-4PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Award className="text-accent" size={24} />
              <span>25+ {t('why.stats.years')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="text-accent" size={24} />
              <span>{t('hero.licensed')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="text-accent" size={24} />
              <span>5,000+ {t('why.stats.customers')}</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Kingo Pest Control Tanzania. {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

