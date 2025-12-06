'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Knowledge base for chatbot responses
const knowledgeBase: Record<string, Record<string, string>> = {
  en: {
    greeting: "Hello! I'm here to help you with any questions about Kingo Pest Control Tanzania. How can I assist you today?",
    services: "We offer comprehensive pest control services including:\n• Residential Pest Control\n• Commercial Pest Control\n• Termite Control\n• Rodent Control\n• Bed Bug Treatment\n• Wildlife Removal\n\nWould you like more details about any specific service?",
    pricing: "Our pricing varies based on the type of service and property size. We offer free inspections to assess your needs and provide accurate quotes. Would you like to schedule a free inspection?",
    contact: "You can reach us at:\n📞 Phone: +255 616 041 390\n📧 Email: info@modernpestcontrol.co.tz\n📍 Address: Boko Basihaya, Kinondoni, Dar es Salaam, Tanzania\n\nWe're also available via WhatsApp!",
    emergency: "We offer 24/7 emergency pest control services! For urgent situations, please call us immediately at +255 616 041 390. We're available around the clock to help you.",
    areas: "We proudly serve communities throughout Tanzania, including:\n• Dar es Salaam\n• Arusha\n• Mwanza\n• Dodoma\n• Zanzibar City\n• And many more cities!\n\nDon't see your area? Contact us - we may still be able to help!",
    process: "Our process is simple:\n1️⃣ Inspection - We assess your property\n2️⃣ Treatment Plan - Customized solution for you\n3️⃣ Execution - Professional treatment\n4️⃣ Follow-up - We ensure long-term results\n\nWould you like to schedule an inspection?",
    guarantee: "Yes! We offer a 100% satisfaction guarantee. If you're not happy with our service, we'll make it right. Your satisfaction is our priority.",
    eco: "Absolutely! We prioritize eco-friendly and safe pest control solutions that protect your family, pets, and the environment. All our treatments are carefully selected for safety and effectiveness.",
    hours: "Our business hours are:\n• Monday - Friday: 8:00 AM - 6:00 PM\n• Saturday: 9:00 AM - 4:00 PM\n• Sunday: Emergency Only\n\n24/7 Emergency Service Available!",
    default: "I understand you're asking about: '{query}'. For more specific information, please contact us directly at +255 616 041 390 or email info@modernpestcontrol.co.tz. Our team is ready to help!",
  },
  sw: {
    greeting: "Hujambo! Nipo hapa kukusaidia na maswali yoyote kuhusu Kingo Pest Control Tanzania. Ninaweza kukusaidiaje leo?",
    services: "Tunatoa huduma kamili za uongozi wa wadudu ikiwemo:\n• Uongozi wa Wadudu wa Nyumbani\n• Uongozi wa Wadudu wa Biashara\n• Uongozi wa Mchwa\n• Uongozi wa Panya\n• Matibabu ya Wadudu wa Kitanda\n• Kuondoa Wanyama\n\nJe, ungependa maelezo zaidi kuhusu huduma fulani?",
    pricing: "Bei zetu hutofautiana kulingana na aina ya huduma na ukubwa wa mali. Tunatoa ukaguzi bure ili kutathmini mahitaji yako na kutoa bei sahihi. Je, ungependa kupanga ukaguzi bure?",
    contact: "Unaweza kutufikia kwa:\n📞 Simu: +255 616 041 390\n📧 Barua Pepe: info@modernpestcontrol.co.tz\n📍 Anwani: Boko Basihaya, Kinondoni, Dar es Salaam, Tanzania\n\nTunapatikana pia kupitia WhatsApp!",
    emergency: "Tunatoa huduma ya uongozi wa wadudu ya dharura 24/7! Kwa hali za dharura, tafadhali utupigie simu mara moja kwa +255 616 041 390. Tupo tayari kila wakati kukusaidia.",
    areas: "Tunatumikia jamii kote Tanzania, ikiwemo:\n• Dar es Salaam\n• Arusha\n• Mwanza\n• Dodoma\n• Zanzibar City\n• Na miji mingine mingi!\n\nHukuoni eneo lako? Wasiliana nasi - bado tunaweza kusaidia!",
    process: "Mchakato wetu ni rahisi:\n1️⃣ Ukaguzi - Tunatathmini mali yako\n2️⃣ Mpango wa Matibabu - Suluhisho maalum kwako\n3️⃣ Utendaji - Matibabu ya kikazi\n4️⃣ Ufuatiliaji - Tunahakikisha matokeo ya muda mrefu\n\nJe, ungependa kupanga ukaguzi?",
    guarantee: "Ndio! Tunatoa hakikisho la 100% la kuridhika. Ikiwa hufurahii huduma yetu, tutarekebisha. Kuridhika kwako ni kipaumbele chetu.",
    eco: "Kabisa! Tunapendelea suluhisho za uongozi wa wadudu za kikazi za kuhifadhi mazingira na salama ambazo zinalinda familia yako, wanyama wako, na mazingira. Matibabu yetu yote yamechaguliwa kwa uangalifu kwa usalama na ufanisi.",
    hours: "Masaa yetu ya biashara ni:\n• Jumatatu - Ijumaa: 8:00 AM - 6:00 PM\n• Jumamosi: 9:00 AM - 4:00 PM\n• Jumapili: Dharura Tu\n\nHuduma ya Dharura 24/7 Inapatikana!",
    default: "Naelewa unauliza kuhusu: '{query}'. Kwa taarifa zaidi maalum, tafadhali wasiliana nasi moja kwa moja kwa +255 616 041 390 au barua pepe info@modernpestcontrol.co.tz. Timu yetu iko tayari kusaidia!",
  },
}

export default function Chatbot() {
  const { language, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: knowledgeBase[language].greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, isMinimized])

  // Update greeting when language changes
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'bot') {
      setMessages([
        {
          id: '1',
          text: knowledgeBase[language].greeting,
          sender: 'bot',
          timestamp: new Date(),
        },
      ])
    }
  }, [language])

  // Detect language from user input - improved detection
  const detectLanguage = (query: string): 'en' | 'sw' => {
    const lowerQuery = query.toLowerCase().trim()
    
    // Swahili keywords and patterns (expanded list)
    const swahiliKeywords = [
      // Greetings
      'hujambo', 'mambo', 'jambo', 'habari', 'asante', 'sana', 'pole', 'karibu', 'shikamoo',
      // Common words
      'huduma', 'bei', 'gharama', 'wasiliana', 'simu', 'barua', 'pepe', 'anwani',
      'dharura', 'eneo', 'mji', 'mchakato', 'namna', 'vipi', 'gani', 'nini',
      'hakikisho', 'salama', 'mazingira', 'masaa', 'wakati', 'saa', 'leo', 'kesho',
      'wadudu', 'panya', 'mchwa', 'nyumbani', 'biashara', 'kuhusu', 'kwa', 'na',
      'tuna', 'tunatoa', 'tunatumikia', 'je', 'ungependa', 'tafadhali', 'piga',
      'pata', 'kupanga', 'ukaguzi', 'matibabu', 'wateja', 'jamii', 'tanzania',
      // Question words
      'lini', 'wapi', 'nani', 'kwa nini', 'kwa sababu', 'kama', 'au',
      // Verbs
      'nataka', 'unataka', 'tunataka', 'naomba', 'unaweza', 'tunaweza',
      // Common phrases
      'naomba msaada', 'naomba taarifa', 'nipe taarifa', 'niambie'
    ]
    
    // Check for Swahili-specific character patterns
    const hasSwahiliChars = /[kwgh]/i.test(query) && query.length > 3
    
    // Count Swahili keywords in the query
    const swahiliMatches = swahiliKeywords.filter(keyword => {
      // Check for whole word matches or phrase matches
      const regex = new RegExp(`\\b${keyword}\\b`, 'i')
      return regex.test(lowerQuery)
    }).length
    
    // Strong Swahili indicators
    const strongSwahiliIndicators = [
      lowerQuery.includes('hujambo'),
      lowerQuery.includes('mambo'),
      lowerQuery.includes('habari'),
      lowerQuery.startsWith('nini'),
      lowerQuery.startsWith('je'),
      lowerQuery.startsWith('lini'),
      lowerQuery.startsWith('wapi'),
      lowerQuery.includes('naomba'),
      lowerQuery.includes('tafadhali'),
      lowerQuery.includes('asante'),
    ]
    
    // If strong indicators or multiple Swahili keywords found, use Swahili
    if (strongSwahiliIndicators.some(indicator => indicator) || swahiliMatches >= 2) {
      return 'sw'
    }
    
    // If at least one Swahili keyword and query is longer, likely Swahili
    if (swahiliMatches >= 1 && query.length > 10) {
      return 'sw'
    }
    
    // Default to English
    return 'en'
  }

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase().trim()
    // Detect language from user input
    const detectedLang = detectLanguage(query)
    const kb = knowledgeBase[detectedLang]

    // Check for keywords and return appropriate response
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hujambo') || lowerQuery.includes('mambo') || lowerQuery.includes('habari')) {
      return kb.greeting
    }
    if (lowerQuery.includes('service') || lowerQuery.includes('huduma') || lowerQuery.includes('what do you') || lowerQuery.includes('nini')) {
      return kb.services
    }
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('bei') || lowerQuery.includes('gharama')) {
      return kb.pricing
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('email') || lowerQuery.includes('wasiliana') || lowerQuery.includes('simu')) {
      return kb.contact
    }
    if (lowerQuery.includes('emergency') || lowerQuery.includes('urgent') || lowerQuery.includes('dharura')) {
      return kb.emergency
    }
    if (lowerQuery.includes('area') || lowerQuery.includes('location') || lowerQuery.includes('city') || lowerQuery.includes('eneo') || lowerQuery.includes('mji')) {
      return kb.areas
    }
    if (lowerQuery.includes('process') || lowerQuery.includes('how') || lowerQuery.includes('mchakato') || lowerQuery.includes('namna') || lowerQuery.includes('vipi')) {
      return kb.process
    }
    if (lowerQuery.includes('guarantee') || lowerQuery.includes('warranty') || lowerQuery.includes('hakikisho')) {
      return kb.guarantee
    }
    if (lowerQuery.includes('eco') || lowerQuery.includes('safe') || lowerQuery.includes('environment') || lowerQuery.includes('salama') || lowerQuery.includes('mazingira')) {
      return kb.eco
    }
    if (lowerQuery.includes('hour') || lowerQuery.includes('time') || lowerQuery.includes('open') || lowerQuery.includes('masaa') || lowerQuery.includes('wakati') || lowerQuery.includes('saa')) {
      return kb.hours
    }

    // Default response
    return kb.default.replace('{query}', query)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(true)
            setIsMinimized(false)
          }}
          className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-primary/50 transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
          {messages.length > 1 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold">
              {messages.length - 1}
            </span>
          )}
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 left-6 z-50 w-96 bg-white rounded-2xl shadow-2xl flex flex-col ${
              isMinimized ? 'h-16' : 'h-[600px]'
            } transition-all duration-300 border border-gray-200`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Kingo Pest Control</h3>
                  <p className="text-xs text-white/80">We're here to help!</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-800 shadow-md'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={language === 'en' ? 'Type your message...' : 'Andika ujumbe wako...'}
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="p-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {language === 'en'
                      ? 'Ask us anything about pest control!'
                      : 'Tuulize chochote kuhusu uongozi wa wadudu!'}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

