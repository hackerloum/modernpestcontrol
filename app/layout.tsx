import type { Metadata } from 'next'
import './globals.css'
import LanguageProviderWrapper from '@/components/LanguageProviderWrapper'

export const metadata: Metadata = {
  title: 'Professional Pest Control Solutions in Tanzania | Home & Business Services',
  description: 'Expert pest control services for residential and commercial properties across Tanzania. Licensed technicians, eco-friendly solutions, 24/7 emergency service. Serving Dar es Salaam, Arusha, Mwanza, and more. Get your free inspection today!',
  keywords: 'pest control Tanzania, termite control Tanzania, rodent control Dar es Salaam, bed bug treatment Arusha, wildlife removal Mwanza, commercial pest control Tanzania, residential pest control Tanzania',
  authors: [{ name: 'Kingo Pest Control Tanzania' }],
  openGraph: {
    title: 'Professional Pest Control Solutions in Tanzania',
    description: 'Expert pest control services across Tanzania with licensed technicians and eco-friendly solutions.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LanguageProviderWrapper>{children}</LanguageProviderWrapper>
      </body>
    </html>
  )
}

