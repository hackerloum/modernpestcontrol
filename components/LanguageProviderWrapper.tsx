'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import Chatbot from '@/components/Chatbot'
import { ReactNode } from 'react'

export default function LanguageProviderWrapper({
  children,
}: {
  children: ReactNode
}) {
  return (
    <LanguageProvider>
      {children}
      <Chatbot />
    </LanguageProvider>
  )
}

