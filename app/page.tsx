import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HashScrollHandler from '@/components/HashScrollHandler'
import AdvertisementBanner from '@/components/AdvertisementBanner'

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <main className="min-h-screen">
        <HashScrollHandler />
        <Navigation />
        <AdvertisementBanner />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <ServiceAreas />
        <ContactCTA />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}

