'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'sw'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Comprehensive translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.gallery': 'Gallery',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.freeQuote': 'Free Quote',
    'nav.getFreeQuote': 'Get Free Quote',
    'nav.call': 'Call',
    
    // Hero
    'hero.title': 'Professional Pest Control Solutions',
    'hero.subtitle': 'for Your Home & Business',
    'hero.description': 'Trusted by thousands of homeowners and businesses. Our licensed technicians use eco-friendly solutions to keep your property pest-free with guaranteed results.',
    'hero.scheduleInspection': 'Schedule Inspection',
    'hero.callNow': 'Call Now',
    'hero.licensed': 'Licensed & Insured',
    'hero.ecoFriendly': 'Eco-Friendly Solutions',
    'hero.emergency': '24/7 Emergency Service',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive pest control solutions tailored to your specific needs',
    'services.residential.title': 'Residential Pest Control',
    'services.residential.desc': 'Comprehensive protection for your home with customized treatment plans for all common household pests.',
    'services.commercial.title': 'Commercial Pest Control',
    'services.commercial.desc': 'Business-focused solutions to maintain a pest-free environment and comply with health regulations.',
    'services.termite.title': 'Termite Control',
    'services.termite.desc': 'Advanced termite detection and elimination services to protect your property from costly damage.',
    'services.rodent.title': 'Rodent Control',
    'services.rodent.desc': 'Effective rodent removal and prevention strategies to keep mice and rats out of your property.',
    'services.bedbug.title': 'Bed Bug Treatment',
    'services.bedbug.desc': 'Thorough bed bug inspection and heat treatment to eliminate infestations completely.',
    'services.wildlife.title': 'Wildlife Removal',
    'services.wildlife.desc': 'Humane wildlife removal services for raccoons, squirrels, birds, and other nuisance animals.',
    'services.learnMore': 'Learn More',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Experience the difference of working with industry-leading pest control professionals',
    'why.licensed.title': 'Licensed & Certified Technicians',
    'why.licensed.desc': 'All our technicians are fully licensed, certified, and continuously trained on the latest pest control methods.',
    'why.eco.title': 'Eco-Friendly Solutions',
    'why.eco.desc': 'We prioritize safe, environmentally responsible treatments that protect your family, pets, and the planet.',
    'why.emergency.title': '24/7 Emergency Service',
    'why.emergency.desc': 'Pest problems don\'t wait for business hours. We\'re available around the clock for urgent situations.',
    'why.guarantee.title': 'Satisfaction Guaranteed',
    'why.guarantee.desc': 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right.',
    'why.stats.years': 'Years in Business',
    'why.stats.customers': 'Happy Customers',
    'why.stats.success': 'Success Rate',
    
    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'A proven 4-step approach to effective pest control',
    'process.inspection.title': 'Inspection',
    'process.inspection.desc': 'Our certified technicians conduct a thorough inspection of your property to identify pest types, entry points, and infestation levels.',
    'process.plan.title': 'Treatment Plan',
    'process.plan.desc': 'We create a customized treatment plan tailored to your specific situation, using the most effective and eco-friendly methods.',
    'process.execution.title': 'Execution',
    'process.execution.desc': 'Our team implements the treatment plan with precision, ensuring complete coverage and maximum effectiveness.',
    'process.followup.title': 'Follow-up',
    'process.followup.desc': 'We schedule follow-up visits to monitor results, make adjustments if needed, and ensure long-term pest prevention.',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Don\'t just take our word for it - hear from satisfied customers',
    
    // Service Areas
    'areas.title': 'Service Areas',
    'areas.subtitle': 'We proudly serve communities throughout Tanzania',
    'areas.search': 'Search cities...',
    'areas.notFound': 'No areas found matching your search.',
    'areas.cta': 'Don\'t see your area? We may still be able to help!',
    'areas.contact': 'Contact Us',
    
    // Contact
    'contact.title': 'Get Your Free Inspection Today',
    'contact.subtitle': 'Fill out the form or give us a call. We\'re here to help protect your property from pests.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.monFri': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.emergencyOnly': 'Emergency Only',
    'contact.emergency24': '24/7 Emergency Service Available',
    'contact.form.name': 'Full Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.phone': 'Phone Number *',
    'contact.form.service': 'Service Type *',
    'contact.form.message': 'Message',
    'contact.form.selectService': 'Select a service...',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.phone': '+255 712 345 678',
    'contact.form.placeholder.message': 'Tell us about your pest problem...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Submitting...',
    'contact.form.success': 'Thank you! We\'ll contact you shortly.',
    'contact.form.error.name': 'Name is required',
    'contact.form.error.email': 'Email is required',
    'contact.form.error.emailInvalid': 'Invalid email address',
    'contact.form.error.phone': 'Phone number is required',
    'contact.form.error.phoneInvalid': 'Invalid phone number',
    'contact.form.error.service': 'Please select a service type',
    'contact.service.residential': 'Residential Pest Control',
    'contact.service.commercial': 'Commercial Pest Control',
    'contact.service.termite': 'Termite Control',
    'contact.service.rodent': 'Rodent Control',
    'contact.service.bedbug': 'Bed Bug Treatment',
    'contact.service.wildlife': 'Wildlife Removal',
    'contact.service.other': 'Other',
    
    // Footer
    'footer.description': 'Professional pest control solutions for your home and business across Tanzania. Licensed, insured, and committed to excellence.',
    'footer.quickLinks': 'Quick Links',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.blog': 'Blog',
    'footer.gallery': 'Gallery',
    'footer.faq': 'FAQ',
    'footer.emergency': 'Emergency',
    'footer.guarantee': 'Service Guarantee',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.hours': 'Business Hours',
    'footer.copyright': 'All rights reserved.',
  },
  sw: {
    // Navigation
    'nav.services': 'Huduma',
    'nav.about': 'Kuhusu',
    'nav.blog': 'Blogu',
    'nav.gallery': 'Picha',
    'nav.faq': 'Maswali',
    'nav.contact': 'Wasiliana',
    'nav.freeQuote': 'Bei Bure',
    'nav.getFreeQuote': 'Pata Bei Bure',
    'nav.call': 'Piga',
    
    // Hero
    'hero.title': 'Suluhisho za Uongozi wa Wadudu za Kikazi',
    'hero.subtitle': 'kwa Nyumba na Biashara Yako',
    'hero.description': 'Tunaaminika na maelfu ya wamiliki wa nyumba na biashara. Wataalamu wetu walioidhinishwa hutumia suluhisho za kikazi za kuhifadhi mazingira ili kuweka mali yako bila wadudu kwa matokeo yaliyohakikishwa.',
    'hero.scheduleInspection': 'Panga Ukaguzi',
    'hero.callNow': 'Piga Sasa',
    'hero.licensed': 'Wameidhinishwa na Wamefadhiliwa',
    'hero.ecoFriendly': 'Suluhisho za Kikazi za Kuhifadhi Mazingira',
    'hero.emergency': 'Huduma ya Dharura 24/7',
    
    // Services
    'services.title': 'Huduma Zetu',
    'services.subtitle': 'Suluhisho kamili za uongozi wa wadudu zilizotengenezwa kulingana na mahitaji yako maalum',
    'services.residential.title': 'Uongozi wa Wadudu wa Nyumbani',
    'services.residential.desc': 'Ulinzi kamili wa nyumba yako na mipango ya matibabu iliyotengenezwa kwa wadudu wote wa kawaida wa nyumbani.',
    'services.commercial.title': 'Uongozi wa Wadudu wa Biashara',
    'services.commercial.desc': 'Suluhisho zilizolengwa biashara ili kudumisha mazingira yasiyo na wadudu na kufuata kanuni za afya.',
    'services.termite.title': 'Uongozi wa Mchwa',
    'services.termite.desc': 'Huduma za juu za kugundua na kuondoa mchwa ili kulinda mali yako kutokana na uharibifu wa gharama kubwa.',
    'services.rodent.title': 'Uongozi wa Panya',
    'services.rodent.desc': 'Mbinu bora za kuondoa na kuzuia panya ili kuweka panya na panya nje ya mali yako.',
    'services.bedbug.title': 'Matibabu ya Wadudu wa Kitanda',
    'services.bedbug.desc': 'Ukaguzi kamili wa wadudu wa kitanda na matibabu ya joto ili kuondoa maambukizo kabisa.',
    'services.wildlife.title': 'Kuondoa Wanyama',
    'services.wildlife.desc': 'Huduma za kihumani za kuondoa wanyama kwa paka-mwitu, squirrels, ndege, na wanyama wengine wa kusumbua.',
    'services.learnMore': 'Soma Zaidi',
    
    // Why Choose Us
    'why.title': 'Kwa Nini Utuchague',
    'why.subtitle': 'Jisikie tofauti ya kufanya kazi na wataalamu wa uongozi wa wadudu wa kiwango cha juu',
    'why.licensed.title': 'Wataalamu Walioidhinishwa na Wameidhinishwa',
    'why.licensed.desc': 'Wataalamu wetu wote wameidhinishwa kikamilifu, wameidhinishwa, na wanafundishwa kila mara kwa mbinu mpya za uongozi wa wadudu.',
    'why.eco.title': 'Suluhisho za Kikazi za Kuhifadhi Mazingira',
    'why.eco.desc': 'Tunapendelea matibabu salama, yanayohusika na mazingira ambayo yanalinda familia yako, wanyama wako, na sayari.',
    'why.emergency.title': 'Huduma ya Dharura 24/7',
    'why.emergency.desc': 'Matatizo ya wadudu hayasubiri masaa ya biashara. Tupo tayari kila wakati kwa hali za dharura.',
    'why.guarantee.title': 'Hakikisho la Kuridhika',
    'why.guarantee.desc': 'Tunasimamia kazi yetu kwa hakikisho la 100% la kuridhika. Ikiwa hufurahii, tutarekebisha.',
    'why.stats.years': 'Miaka katika Biashara',
    'why.stats.customers': 'Wateja Wafuraha',
    'why.stats.success': 'Kiwango cha Mafanikio',
    
    // Process
    'process.title': 'Mchakato Wetu',
    'process.subtitle': 'Njia ya hatua 4 iliyothibitishwa ya uongozi bora wa wadudu',
    'process.inspection.title': 'Ukaguzi',
    'process.inspection.desc': 'Wataalamu wetu walioidhinishwa hufanya ukaguzi kamili wa mali yako ili kutambua aina za wadudu, sehemu za kuingia, na viwango vya maambukizo.',
    'process.plan.title': 'Mpango wa Matibabu',
    'process.plan.desc': 'Tunaunda mpango wa matibabu uliotengenezwa kulingana na hali yako maalum, kwa kutumia mbinu bora zaidi na za kikazi za kuhifadhi mazingira.',
    'process.execution.title': 'Utendaji',
    'process.execution.desc': 'Timu yetu inatekeleza mpango wa matibabu kwa usahihi, kuhakikisha ufunuo kamili na ufanisi wa juu.',
    'process.followup.title': 'Ufuatiliaji',
    'process.followup.desc': 'Tunapanga ziara za ufuatiliaji ili kufuatilia matokeo, kufanya marekebisho ikiwa ni lazima, na kuhakikisha kuzuia wadudu kwa muda mrefu.',
    
    // Testimonials
    'testimonials.title': 'Wateja Wetu Wasemaje',
    'testimonials.subtitle': 'Usichukue neno letu tu - sikiliza kutoka kwa wateja walioridhika',
    
    // Service Areas
    'areas.title': 'Maeneo ya Huduma',
    'areas.subtitle': 'Tunatumikia jamii kote Tanzania kwa fahari',
    'areas.search': 'Tafuta miji...',
    'areas.notFound': 'Hakuna maeneo yaliyopatikana yanayofanana na utafutaji wako.',
    'areas.cta': 'Hukuoni eneo lako? Bado tunaweza kusaidia!',
    'areas.contact': 'Wasiliana Nasi',
    
    // Contact
    'contact.title': 'Pata Ukaguzi Wako Bure Leo',
    'contact.subtitle': 'Jaza fomu au utupigie simu. Tupo hapa kukusaidia kulinda mali yako kutoka kwa wadudu.',
    'contact.phone': 'Simu',
    'contact.email': 'Barua Pepe',
    'contact.address': 'Anwani',
    'contact.hours': 'Masaa ya Biashara',
    'contact.monFri': 'Jumatatu - Ijumaa',
    'contact.saturday': 'Jumamosi',
    'contact.sunday': 'Jumapili',
    'contact.emergencyOnly': 'Dharura Tu',
    'contact.emergency24': 'Huduma ya Dharura 24/7 Inapatikana',
    'contact.form.name': 'Jina Kamili *',
    'contact.form.email': 'Anwani ya Barua Pepe *',
    'contact.form.phone': 'Nambari ya Simu *',
    'contact.form.service': 'Aina ya Huduma *',
    'contact.form.message': 'Ujumbe',
    'contact.form.selectService': 'Chagua huduma...',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.phone': '+255 712 345 678',
    'contact.form.placeholder.message': 'Tuambie kuhusu tatizo lako la wadudu...',
    'contact.form.submit': 'Tuma Ujumbe',
    'contact.form.submitting': 'Inatumwa...',
    'contact.form.success': 'Asante! Tutawasiliana nawe hivi karibuni.',
    'contact.form.error.name': 'Jina linahitajika',
    'contact.form.error.email': 'Barua pepe inahitajika',
    'contact.form.error.emailInvalid': 'Anwani ya barua pepe si sahihi',
    'contact.form.error.phone': 'Nambari ya simu inahitajika',
    'contact.form.error.phoneInvalid': 'Nambari ya simu si sahihi',
    'contact.form.error.service': 'Tafadhali chagua aina ya huduma',
    'contact.service.residential': 'Uongozi wa Wadudu wa Nyumbani',
    'contact.service.commercial': 'Uongozi wa Wadudu wa Biashara',
    'contact.service.termite': 'Uongozi wa Mchwa',
    'contact.service.rodent': 'Uongozi wa Panya',
    'contact.service.bedbug': 'Matibabu ya Wadudu wa Kitanda',
    'contact.service.wildlife': 'Kuondoa Wanyama',
    'contact.service.other': 'Nyingine',
    
    // Footer
    'footer.description': 'Suluhisho za uongozi wa wadudu za kikazi kwa nyumba na biashara yako kote Tanzania. Wameidhinishwa, wamefadhiliwa, na wamejikita katika ubora.',
    'footer.quickLinks': 'Viungo vya Haraka',
    'footer.company': 'Kampuni',
    'footer.services': 'Huduma',
    'footer.contact': 'Wasiliana Nasi',
    'footer.home': 'Nyumbani',
    'footer.about': 'Kuhusu Sisi',
    'footer.blog': 'Blogu',
    'footer.gallery': 'Picha',
    'footer.faq': 'Maswali',
    'footer.emergency': 'Dharura',
    'footer.guarantee': 'Hakikisho la Huduma',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Huduma',
    'footer.hours': 'Masaa ya Biashara',
    'footer.copyright': 'Haki zote zimehifadhiwa.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sw')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
