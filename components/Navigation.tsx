'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Shield, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const navItems = [
  { key: 'services', href: '/#services' },
  { key: 'about', href: '/about' },
  { key: 'blog', href: '/blog' },
  { key: 'gallery', href: '/gallery' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/#contact' },
]

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position (only on home page)
      if (window.location.pathname === '/') {
        const sections = navItems
          .filter(item => item.href.startsWith('/#'))
          .map(item => item.href.substring(2)) // Remove '/#'
        const scrollPosition = window.scrollY + 100
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.querySelector(`#${sections[i]}`)
          if (section) {
            const offsetTop = (section as HTMLElement).offsetTop
            if (scrollPosition >= offsetTop) {
              setActiveSection(`/#${sections[i]}`)
              break
            }
          }
        }
      } else {
        // On other pages, check current pathname
        const currentPath = window.location.pathname
        const matchingItem = navItems.find(item => item.href === currentPath)
        if (matchingItem) {
          setActiveSection(matchingItem.href)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      // Handle hash links
      if (window.location.pathname === '/') {
        // If on home page, scroll to section
        const element = document.querySelector(href)
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80
          window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
      } else {
        // If on different page, navigate to home page with hash
        window.location.href = `/${href}`
      }
    } else {
      // Handle route links (different pages)
      window.location.href = href
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault()
                window.location.href = '/'
              }
            }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 flex-shrink-0 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Shield className="text-white" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">
                Kingo Pest Control
              </span>
              <span className="text-xs text-gray-500 font-medium leading-tight">
                Tanzania
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {t(`nav.${item.key}`)}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-all duration-200"
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span className="uppercase font-semibold">{language === 'en' ? 'EN' : 'SW'}</span>
            </motion.button>
            <motion.a
              href="tel:+255754307321"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2.5 bg-accent text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">+255 754 307 321</span>
              <span className="xl:hidden">{t('nav.call')}</span>
            </motion.a>
            <motion.a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:bg-primary-light transition-all duration-200"
            >
              {t('nav.freeQuote')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.a>
                )
              })}
              <div className="pt-6 mt-4 space-y-3 border-t border-gray-200">
                {/* Language Toggle for Mobile */}
                <motion.button
                  onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all"
                >
                  <Languages size={18} />
                  <span>{language === 'en' ? 'English' : 'Kiswahili'}</span>
                  <span className="text-sm">({language === 'en' ? 'SW' : 'EN'})</span>
                </motion.button>
                <motion.a
                  href="tel:+255754307321"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Phone size={18} />
                  <span>+255 754 307 321</span>
                </motion.a>
                <motion.a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  {t('nav.getFreeQuote')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

