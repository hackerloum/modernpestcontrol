import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import { Shield, CheckCircle, RefreshCw, Award, Heart, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Guarantee & Warranty | Modern Pest Control Tanzania',
  description: '100% satisfaction guarantee on all pest control services. Learn about our warranties, re-treatment policies, and commitment to excellence.',
}

const guarantees = [
  {
    icon: Shield,
    title: '100% Satisfaction Guarantee',
    description: 'If you&apos;re not completely satisfied with our service, we&apos;ll return to re-treat at no additional cost. Your satisfaction is our top priority.',
  },
  {
    icon: RefreshCw,
    title: 'Free Re-Treatment',
    description: 'If pests return within the warranty period, we provide free re-treatment. We stand behind our work and won\'t rest until the problem is solved.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'All our treatments are performed by licensed, certified technicians using proven methods and quality products. We maintain the highest standards.',
  },
  {
    icon: Lock,
    title: 'Licensed & Insured',
    description: 'We are fully licensed and insured, giving you peace of mind. All our work is covered, and we take full responsibility for our services.',
  },
]

const warrantyTypes = [
  {
    service: 'General Pest Control',
    warranty: '30-90 days',
    coverage: 'Re-treatment if pests return within warranty period',
  },
  {
    service: 'Termite Control',
    warranty: '1-2 years',
    coverage: 'Annual inspections and re-treatment if needed',
  },
  {
    service: 'Rodent Control',
    warranty: '60-90 days',
    coverage: 'Re-treatment and exclusion work if needed',
  },
  {
    service: 'Bed Bug Treatment',
    warranty: '90 days',
    coverage: 'Free follow-up treatment if bed bugs return',
  },
]

export default function GuaranteePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <Shield size={64} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Service Guarantee
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                100% satisfaction guaranteed - we stand behind our work
              </p>
            </div>
          </div>
        </section>

        {/* Main Guarantee */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white mb-12"
            >
              <CheckCircle size={64} className="mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We are so confident in our pest control services that we offer a 100% satisfaction guarantee. 
                If you&apos;re not completely happy with our work, we&apos;ll return to make it right at no additional cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon
                return (
                  <div
                    key={guarantee.title}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Warranty Information */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Service Warranties
              </h2>
              <p className="text-xl text-gray-600">
                Specific warranty terms vary by service type
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warrantyTypes.map((warranty, index) => (
                <div
                  key={warranty.service}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {warranty.service}
                  </h3>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-600">Warranty Period:</span>
                    <span className="ml-2 text-lg font-bold text-accent">{warranty.warranty}</span>
                  </div>
                  <p className="text-gray-600">
                    {warranty.coverage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How Our Guarantee Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Report the Issue',
                  description: 'If you experience any issues or pests return, simply contact us within the warranty period. We make it easy to reach us.',
                },
                {
                  step: '2',
                  title: 'Quick Response',
                  description: 'We&apos;ll schedule a return visit promptly to assess the situation and determine the best course of action.',
                },
                {
                  step: '3',
                  title: 'Free Re-Treatment',
                  description: 'We&apos;ll provide additional treatment at no cost to you. Our goal is complete satisfaction and pest elimination.',
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Guarantee Terms & Conditions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Guarantee applies to the original treatment area only</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Customer must report issues within the warranty period</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Warranty does not cover new infestations from external sources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Customer must follow all post-treatment instructions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Some warranties may require regular maintenance visits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1 mr-3" size={20} />
                  <span>Specific warranty terms will be provided in your service agreement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

