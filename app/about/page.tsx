import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Metadata } from 'next'
import { Award, Users, Shield, Heart, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Kingo Pest Control Tanzania',
  description: 'Learn about Kingo Pest Control Tanzania - Your trusted pest control experts serving Dar es Salaam, Arusha, Mwanza, and across Tanzania. Licensed, insured, and committed to excellence.',
}

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize the safety of your family, pets, and environment in every treatment we perform.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Your satisfaction is our top priority. We go above and beyond to ensure you\'re happy with our service.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in pest control, using proven methods and quality products.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our licensed technicians are highly trained and continuously updated on the latest pest control techniques.',
  },
]

const stats = [
  { value: '15+', label: 'Years of Experience', icon: Clock },
  { value: '5,000+', label: 'Satisfied Customers', icon: Users },
  { value: '20+', label: 'Cities Served', icon: MapPin },
  { value: '98%', label: 'Success Rate', icon: Award },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Modern Pest Control Tanzania
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Your trusted partner in pest control across Tanzania since 2009
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Modern Pest Control Tanzania was founded in 2009 with a simple mission: to provide safe, effective, and reliable pest control services to homes and businesses across Tanzania.
                  </p>
                  <p>
                    Starting as a small local business in Dar es Salaam, we have grown to become one of Tanzania's most trusted pest control companies, serving over 20 cities nationwide.
                  </p>
                  <p>
                    Our commitment to excellence, customer satisfaction, and environmental responsibility has earned us the trust of over 5,000 satisfied customers throughout Tanzania.
                  </p>
                  <p>
                    Today, we continue to innovate and improve our services, staying at the forefront of pest control technology while maintaining our core values of safety, quality, and customer care.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">15+</div>
                    <div className="text-2xl text-gray-600">Years Serving Tanzania</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="text-center text-white"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide safe, effective, and environmentally responsible pest control solutions that protect homes and businesses across Tanzania, while maintaining the highest standards of customer service and satisfaction.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become Tanzania's leading pest control company, recognized for innovation, excellence, and commitment to creating pest-free environments that enhance the quality of life for all Tanzanians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Modern Pest Control?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Fully licensed and insured technicians',
                '15+ years of experience in Tanzania',
                'Eco-friendly and safe treatment methods',
                '24/7 emergency service availability',
                '100% satisfaction guarantee',
                'Serving 20+ cities across Tanzania',
                'Competitive pricing with transparent quotes',
                'Regular follow-up and maintenance programs',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

