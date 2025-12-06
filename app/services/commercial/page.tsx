import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commercial Pest Control Services | PestGuard Pro',
  description: 'Professional commercial pest control for businesses. Health code compliant solutions for restaurants, offices, warehouses, and retail. Customized IPM programs.',
}

export default function CommercialPestControl() {
  return (
    <ServiceLayout
      iconName="Building2"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      title="Commercial Pest Control"
      description="Business-focused solutions to maintain a pest-free environment and comply with health regulations. Protect your reputation and ensure customer satisfaction with our comprehensive commercial pest management programs."
      color="from-green-500 to-green-600"
      features={[
        'Health code compliant pest management programs',
        'Customized Integrated Pest Management (IPM) solutions',
        'Flexible service schedules to minimize business disruption',
        'Detailed documentation and reporting for inspections',
        'Emergency response available 24/7',
        'Experienced technicians trained in commercial protocols',
        'Discrete service that respects your business operations',
        'Comprehensive coverage for all commercial pest types',
      ]}
      processSteps={[
        {
          step: 'Assessment',
          description: 'Comprehensive evaluation of your facility to identify pest risks, entry points, and compliance requirements.',
        },
        {
          step: 'IPM Program',
          description: 'Development of an Integrated Pest Management program tailored to your industry and facility type.',
        },
        {
          step: 'Implementation',
          description: 'Professional application of treatments during off-hours or scheduled times to minimize disruption.',
        },
        {
          step: 'Monitoring',
          description: 'Regular inspections, monitoring stations, and detailed reporting to ensure ongoing compliance.',
        },
      ]}
      faqs={[
        {
          question: 'What types of businesses do you serve?',
          answer: 'We serve all types of commercial facilities including restaurants, hotels, offices, warehouses, retail stores, healthcare facilities, schools, food processing plants, and more.',
        },
        {
          question: 'How do you ensure compliance with health codes?',
          answer: 'Our programs are designed to meet or exceed all local, state, and federal health code requirements. We provide detailed documentation and work closely with health inspectors.',
        },
        {
          question: 'Will treatments disrupt my business operations?',
          answer: 'We schedule treatments during off-hours whenever possible and use discrete methods that minimize disruption. Most treatments can be completed without closing your business.',
        },
        {
          question: 'What is Integrated Pest Management (IPM)?',
          answer: 'IPM is a comprehensive approach that combines prevention, monitoring, and targeted treatments. It focuses on long-term solutions rather than just reactive treatments.',
        },
        {
          question: 'How often do commercial facilities need service?',
          answer: 'Service frequency depends on your industry, facility type, and pest pressure. Most businesses benefit from monthly or bi-monthly service, with some requiring weekly visits.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Protect Your Business Reputation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pest problems in commercial facilities can damage your reputation, result in
              health code violations, and lead to lost revenue. Our commercial pest control
              services are designed to protect your business while ensuring full compliance
              with health and safety regulations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the unique challenges businesses face, from maintaining operations
              during treatments to meeting strict compliance requirements. Our experienced
              commercial technicians are trained in industry-specific protocols and use
              discrete, effective methods.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our Integrated Pest Management (IPM) approach focuses on prevention, monitoring,
              and targeted treatments to provide long-term solutions that protect both your
              facility and your bottom line.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Industries We Serve
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Restaurants & Food Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Hotels & Hospitality</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Office Buildings</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Warehouses & Distribution Centers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Retail Stores</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Healthcare Facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Schools & Educational Facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Food Processing Plants</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Commercial Pest Control Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Preventive Programs
              </h4>
              <p className="text-gray-600">
                Regular scheduled service to prevent pest problems before they start.
                Includes monitoring, exclusion, and preventive treatments.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Emergency Response
              </h4>
              <p className="text-gray-600">
                24/7 emergency service for urgent pest situations that could impact
                your business operations or compliance status.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Inspection Services
              </h4>
              <p className="text-gray-600">
                Pre-inspection services to ensure your facility is ready for health
                department or regulatory inspections.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Documentation & Reporting
              </h4>
              <p className="text-gray-600">
                Detailed service reports, activity logs, and compliance documentation
                to support your regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

