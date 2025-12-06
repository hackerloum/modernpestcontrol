import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Modern Pest Control Tanzania',
  description: 'Privacy Policy for Modern Pest Control Tanzania. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
                Privacy Policy
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
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                  <p>
                    Modern Pest Control Tanzania (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p>We may collect the following personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (phone number, email address, physical address)</li>
                    <li>Service request details and property information</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication preferences</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-4 mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                  <p>We use collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and improving our pest control services</li>
                    <li>Processing service requests and scheduling appointments</li>
                    <li>Communicating with you about services, appointments, and inquiries</li>
                    <li>Sending service reminders and follow-up communications</li>
                    <li>Processing payments and managing accounts</li>
                    <li>Improving our website and user experience</li>
                    <li>Complying with legal obligations</li>
                    <li>Marketing purposes (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Information Sharing and Disclosure</h2>
                  <p>We do not sell your personal information. We may share information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, scheduling systems)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">9. Children&apos;s Privacy</h2>
                  <p>
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
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

