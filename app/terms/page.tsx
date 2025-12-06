import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import { FileText, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Modern Pest Control Tanzania',
  description: 'Terms and conditions for using Modern Pest Control Tanzania services. Read our service terms, payment policies, and customer responsibilities.',
}

export default function TermsPage() {
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
                <Scale size={64} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8 text-gray-700">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the services of Modern Pest Control Tanzania (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Services Provided</h2>
                  <p>We provide professional pest control services including but not limited to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Residential and commercial pest control</li>
                    <li>Termite control and prevention</li>
                    <li>Rodent control and removal</li>
                    <li>Bed bug treatment</li>
                    <li>Wildlife removal</li>
                    <li>Emergency pest control services</li>
                    <li>Preventive maintenance programs</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Service Appointments</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Appointments must be scheduled in advance</li>
                    <li>We require at least 24 hours notice for cancellations or rescheduling</li>
                    <li>Same-day appointments are subject to availability</li>
                    <li>Customers must provide access to the property at the scheduled time</li>
                    <li>Late arrivals may result in rescheduling</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Payment Terms</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due upon completion of service unless otherwise agreed</li>
                    <li>We accept cash, mobile money (M-Pesa, Tigo Pesa, Airtel Money), and bank transfers</li>
                    <li>Payment plans may be available for larger projects - terms will be agreed upon in writing</li>
                    <li>Late payments may incur additional fees</li>
                    <li>All prices are in Tanzanian Shillings (TZS) unless otherwise stated</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Customer Responsibilities</h2>
                  <p>Customers agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information about the property and pest issues</li>
                    <li>Grant access to all areas requiring treatment</li>
                    <li>Follow any pre-treatment or post-treatment instructions provided</li>
                    <li>Notify us of any changes to the property that may affect treatment</li>
                    <li>Keep pets and children away from treated areas as instructed</li>
                    <li>Maintain the property in a manner that supports pest control efforts</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Guarantees and Warranties</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We offer a satisfaction guarantee on all services</li>
                    <li>Specific warranty terms will be provided with your service agreement</li>
                    <li>Warranties may require regular maintenance visits</li>
                    <li>Warranties do not cover new infestations from external sources</li>
                    <li>Customer must report issues within the warranty period for coverage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Limitations of Liability</h2>
                  <p>
                    While we take every precaution to protect your property, Modern Pest Control Tanzania shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Damage to property not directly caused by our negligence</li>
                    <li>Consequential or indirect damages</li>
                    <li>Issues arising from failure to follow our instructions</li>
                    <li>Pre-existing conditions or damage</li>
                    <li>Acts beyond our reasonable control</li>
                  </ul>
                  <p className="mt-4">
                    Our liability is limited to the cost of the service provided.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Cancellation and Refund Policy</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellations made 24+ hours before service: Full refund</li>
                    <li>Cancellations made less than 24 hours before service: 50% refund</li>
                    <li>No-shows or same-day cancellations: No refund</li>
                    <li>Refunds for unsatisfactory service will be evaluated on a case-by-case basis</li>
                    <li>Refunds will be processed within 7-14 business days</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Safety and Health</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We use approved, safe pest control products and methods</li>
                    <li>All technicians are trained in safe application practices</li>
                    <li>Customers must inform us of any health conditions, allergies, or special requirements</li>
                    <li>We follow all Tanzanian health and safety regulations</li>
                    <li>Safety data sheets are available upon request</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Intellectual Property</h2>
                  <p>
                    All content on our website, including text, graphics, logos, and images, is the property of Modern Pest Control Tanzania and protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Modifications to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law</h2>
                  <p>
                    These Terms of Service are governed by the laws of the United Republic of Tanzania. Any disputes will be resolved in Tanzanian courts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">13. Contact Information</h2>
                  <p>For questions about these terms, please contact us:</p>
                  <div className="bg-gray-50 rounded-lg p-6 mt-4">
                    <p className="font-semibold mb-2">Modern Pest Control Tanzania</p>
                    <p>Boko Basihaya, Kinondoni</p>
                    <p>Dar es Salaam, Tanzania</p>
                    <p className="mt-2">
                      <strong>Phone:</strong> <a href="tel:+255754307321" className="text-primary hover:underline">+255 754 307 321</a>
                    </p>
                    <p>
                      <strong>Email:</strong> <a href="mailto:info@modernpestcontrol.co.tz" className="text-primary hover:underline">info@modernpestcontrol.co.tz</a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

