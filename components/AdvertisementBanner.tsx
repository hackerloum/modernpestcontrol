'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Phone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Advertisement {
  id: string
  title: string
  message: string
  isActive: boolean
  createdAt: string
}

export default function AdvertisementBanner() {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [currentAd, setCurrentAd] = useState<Advertisement | null>(null)

  useEffect(() => {
    // Load active advertisement from localStorage
    const savedAds = localStorage.getItem('admin_ads')
    if (savedAds) {
      const ads: Advertisement[] = JSON.parse(savedAds)
      const activeAd = ads.find(ad => ad.isActive)
      if (activeAd) {
        setCurrentAd(activeAd)
      }
    }

    // Listen for storage changes (when admin updates ads)
    const handleStorageChange = () => {
      const savedAds = localStorage.getItem('admin_ads')
      if (savedAds) {
        const ads: Advertisement[] = JSON.parse(savedAds)
        const activeAd = ads.find(ad => ad.isActive)
        setCurrentAd(activeAd || null)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    // Also check periodically for changes
    const interval = setInterval(handleStorageChange, 1000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  if (!currentAd || !isVisible) return null

  if (!isVisible) return null

  const phone = '+255 616 041 390'
  const ctaText = language === 'en' ? 'Call Now' : 'Piga Sasa'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-accent via-accent-light to-accent text-white py-3 px-4 shadow-lg z-40"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
            {/* Left side - Icon and content */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 flex-wrap gap-2">
                  <span className="font-bold text-lg">{currentAd.title}</span>
                  <span className="text-sm md:text-base">{currentAd.message}</span>
                </div>
              </div>
            </div>

            {/* Right side - CTA and close button */}
            <div className="flex items-center space-x-3">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 px-4 py-2 bg-white text-accent rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <Phone size={18} />
                <span>{ctaText}</span>
              </a>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

