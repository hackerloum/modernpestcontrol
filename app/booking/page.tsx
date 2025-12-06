'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Send, Calendar, Clock, User, Mail, Phone, CheckCircle2, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import AddressMapPicker from '@/components/AddressMapPicker'

interface BookingFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  address: string
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

export default function BookingPage() {
  const { language, t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | undefined>()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<BookingFormData>()

  const addressValue = watch('address')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)

    // Save booking to localStorage for admin dashboard
    const booking = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      serviceType: data.serviceType,
      message: data.message || '',
      address: data.address || '',
      coordinates: coordinates,
      date: data.preferredDate || new Date().toLocaleDateString(),
      time: data.preferredTime || new Date().toLocaleTimeString(),
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
    const message = `*New Booking Request*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Service Type:* ${data.serviceType}\n` +
      `*Preferred Date:* ${data.preferredDate}\n` +
      `*Preferred Time:* ${data.preferredTime}\n` +
      `*Address:* ${data.address}\n` +
      `*Message:* ${data.message || 'No additional message'}\n\n` +
      `_This booking was submitted through the website._`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

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
                <Calendar className="text-accent" size={64} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {language === 'en' ? 'Book Your Service' : 'Panga Huduma Yako'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {language === 'en'
                  ? 'Schedule your pest control service today. Fill out the form below and we\'ll contact you to confirm your appointment.'
                  : 'Panga huduma yako ya uongozi wa wadudu leo. Jaza fomu hapa chini na tutawasiliana nawe ili kuthibitisha miadi yako.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <User size={18} />
                    <span>{language === 'en' ? 'Full Name *' : 'Jina Kamili *'}</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', {
                      required: language === 'en' ? 'Name is required' : 'Jina linahitajika',
                    })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder={language === 'en' ? 'John Doe' : 'John Doe'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Mail size={18} />
                    <span>{language === 'en' ? 'Email Address *' : 'Anwani ya Barua Pepe *'}</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: language === 'en' ? 'Email is required' : 'Barua pepe inahitajika',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:
                          language === 'en'
                            ? 'Invalid email address'
                            : 'Anwani ya barua pepe si sahihi',
                      },
                    })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder={language === 'en' ? 'john@example.com' : 'john@example.com'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Phone size={18} />
                    <span>{language === 'en' ? 'Phone Number *' : 'Nambari ya Simu *'}</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required:
                        language === 'en' ? 'Phone number is required' : 'Nambari ya simu inahitajika',
                      pattern: {
                        value: /^[\d\s\-\(\)]+$/,
                        message:
                          language === 'en'
                            ? 'Invalid phone number'
                            : 'Nambari ya simu si sahihi',
                      },
                    })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+255 712 345 678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="serviceType"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <CheckCircle2 size={18} />
                    <span>{language === 'en' ? 'Service Type *' : 'Aina ya Huduma *'}</span>
                  </label>
                  <select
                    id="serviceType"
                    {...register('serviceType', {
                      required:
                        language === 'en'
                          ? 'Please select a service type'
                          : 'Tafadhali chagua aina ya huduma',
                    })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">
                      {language === 'en' ? 'Select a service...' : 'Chagua huduma...'}
                    </option>
                    {serviceTypeKeys.map((key) => (
                      <option key={key} value={t(`contact.service.${key}`)}>
                        {t(`contact.service.${key}`)}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Calendar size={18} />
                    <span>
                      {language === 'en' ? 'Preferred Date *' : 'Tarehe Inayopendelewa *'}
                    </span>
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    {...register('preferredDate', {
                      required:
                        language === 'en' ? 'Date is required' : 'Tarehe inahitajika',
                    })}
                    min={today}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Clock size={18} />
                    <span>
                      {language === 'en' ? 'Preferred Time *' : 'Muda Unayopendelea *'}
                    </span>
                  </label>
                  <select
                    id="preferredTime"
                    {...register('preferredTime', {
                      required:
                        language === 'en' ? 'Time is required' : 'Muda unahitajika',
                    })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">
                      {language === 'en' ? 'Select time...' : 'Chagua muda...'}
                    </option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>

                {/* Address with Map Picker */}
                <div>
                  <label
                    htmlFor="address"
                    className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MapPin size={18} />
                    <span>{language === 'en' ? 'Service Address' : 'Anwani ya Huduma'}</span>
                  </label>
                  <AddressMapPicker
                    value={addressValue || ''}
                    onChange={(address, coords) => {
                      setValue('address', address)
                      if (coords) {
                        setCoordinates(coords)
                      }
                    }}
                  />
                  <input
                    type="hidden"
                    {...register('address')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 mb-2 block"
                  >
                    {language === 'en' ? 'Additional Message' : 'Ujumbe wa Ziada'}
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder={
                      language === 'en'
                        ? 'Tell us about your pest problem or any special requirements...'
                        : 'Tuambie kuhusu tatizo lako la wadudu au mahitaji maalum...'
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>
                        {language === 'en' ? 'Submitting...' : 'Inatumwa...'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>
                        {language === 'en' ? 'Submit Booking Request' : 'Wasilisha Ombi la Kukaribisha'}
                      </span>
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
                    <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold">
                      {language === 'en'
                        ? 'Thank you! Your booking request has been submitted. We will contact you shortly to confirm your appointment.'
                        : 'Asante! Ombi lako la kukaribisha limetumwa. Tutawasiliana nawe hivi karibuni ili kuthibitisha miadi yako.'}
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

