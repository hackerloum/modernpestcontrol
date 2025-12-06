'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

const serviceTypeKeys = [
  'residential',
  'commercial',
  'termite',
  'rodent',
  'bedbug',
  'wildlife',
  'other',
]

export default function ContactCTA() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Save booking to localStorage for admin dashboard
    const booking = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceType: data.serviceType,
      message: data.message || '',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    }
    
    // Get existing bookings
    try {
      const existingBookings = localStorage.getItem('admin_bookings')
      let bookings: typeof booking[] = []
      
      if (existingBookings) {
        try {
          bookings = JSON.parse(existingBookings)
          if (!Array.isArray(bookings)) {
            bookings = []
          }
        } catch (e) {
          bookings = []
        }
      }
      
      bookings.push(booking)
      localStorage.setItem('admin_bookings', JSON.stringify(bookings))
      
      // Trigger storage event for admin dashboard to refresh
      window.dispatchEvent(new Event('storage'))
    } catch (error) {
      console.error('Error saving booking:', error)
    }
    
    // Create WhatsApp message with form data
    const whatsappNumber = '255616041390'
    const message = `*New Inspection Request*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Service Type:* ${data.serviceType}\n` +
      `*Message:* ${data.message || 'No additional message'}\n\n` +
      `_This request was submitted through the website._`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {t('contact.subtitle')}
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="tel:+255616041390"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">{t('contact.phone')}</div>
                  <div className="text-white font-semibold text-lg">
                    +255 616 041 390
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@modernpestcontrol.co.tz"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">{t('contact.email')}</div>
                  <div className="text-white font-semibold text-lg">
                    info@modernpestcontrol.co.tz
                  </div>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-gray-300 text-sm">{t('contact.address')}</div>
                  <div className="text-white font-semibold">
                    Boko Basihaya, Kinondoni
                    <br />
                    Dar es Salaam, Tanzania
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-4">{t('contact.hours')}</h3>
              <div className="space-y-2 text-gray-200">
                <div className="flex justify-between">
                  <span>{t('contact.monFri')}</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday')}</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday')}</span>
                  <span>{t('contact.emergencyOnly')}</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <span className="text-accent font-semibold">
                    {t('contact.emergency24')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: t('contact.form.error.name') })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: t('contact.form.error.email'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('contact.form.error.emailInvalid'),
                    },
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.phone')}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: t('contact.form.error.phone'),
                    pattern: {
                      value: /^[\d\s\-\(\)]+$/,
                      message: t('contact.form.error.phoneInvalid'),
                    },
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.phone')}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.service')}
                </label>
                <select
                  id="serviceType"
                  {...register('serviceType', {
                    required: t('contact.form.error.service'),
                  })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="">{t('contact.form.selectService')}</option>
                  {serviceTypeKeys.map((key) => (
                    <option key={key} value={t(`contact.service.${key}`)}>
                      {t(`contact.service.${key}`)}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.serviceType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.form.placeholder.message')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>{t('contact.form.submitting')}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
                >
                  {t('contact.form.success')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

