import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termite Control & Treatment Services | PestGuard Pro',
  description: 'Professional termite inspection, treatment, and prevention. Protect your property from costly termite damage with our advanced detection and elimination methods.',
}

export default function TermiteControl() {
  return (
    <ServiceLayout
      iconName="Bug"
      title="Termite Control"
      description="Advanced termite detection and elimination services to protect your property from costly damage. Our comprehensive termite control programs use the latest technology and proven methods to eliminate existing infestations and prevent future problems."
      color="from-orange-500 to-orange-600"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      features={[
        'Advanced termite detection using thermal imaging and moisture meters',
        'Comprehensive treatment options including liquid barriers and baiting systems',
        'Pre-construction termite prevention for new builds',
        'Annual termite inspections and monitoring programs',
        'Treatment warranties to protect your investment',
        'Experienced technicians certified in termite control',
        'Eco-friendly treatment options available',
        'Free termite inspections and estimates',
      ]}
      processSteps={[
        {
          step: 'Inspection',
          description: 'Thorough inspection using advanced tools to detect termite activity, damage, and potential entry points.',
        },
        {
          step: 'Assessment',
          description: 'Evaluation of termite species, colony size, and damage extent to determine the best treatment approach.',
        },
        {
          step: 'Treatment',
          description: 'Application of targeted treatments including liquid barriers, baiting systems, or fumigation as needed.',
        },
        {
          step: 'Monitoring',
          description: 'Ongoing monitoring and annual inspections to ensure termites don\'t return and protect your property.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if I have termites?',
          answer: 'Signs of termites include mud tubes on foundation walls, discarded wings near windows, hollow-sounding wood, and visible damage. However, termites can be active for years before signs appear, which is why regular inspections are important.',
        },
        {
          question: 'What types of termites do you treat?',
          answer: 'We treat all types of termites including subterranean termites (most common), drywood termites, and dampwood termites. Each requires different treatment approaches.',
        },
        {
          question: 'How long does termite treatment take?',
          answer: 'Treatment time varies based on the method used. Liquid barrier treatments typically take a few hours, while baiting systems require ongoing monitoring. Fumigation may require temporary relocation for 2-3 days.',
        },
        {
          question: 'Do you offer termite warranties?',
          answer: 'Yes, we offer comprehensive warranties on our termite treatments. Warranty terms vary based on the treatment method and property type. We\'ll discuss warranty options during your consultation.',
        },
        {
          question: 'How often should I have termite inspections?',
          answer: 'We recommend annual termite inspections for all properties. Properties in high-risk areas or with previous termite activity may benefit from more frequent inspections.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Protect Your Property from Termite Damage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Termites cause billions of dollars in property damage each year, often going
              undetected until significant damage has occurred. Our comprehensive termite
              control services use advanced detection methods and proven treatment techniques
              to eliminate existing infestations and prevent future problems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer multiple treatment options including liquid soil treatments, baiting
              systems, and fumigation, choosing the best approach based on your specific
              situation. Our experienced technicians are certified in termite control and
              use the latest technology to ensure effective, long-lasting results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Early detection and prevention are key to avoiding costly repairs. Regular
              termite inspections can identify problems before they become severe, saving
              you thousands of dollars in damage.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Termite Treatment Methods
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Liquid Soil Treatment (Barrier Protection)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Termite Baiting Systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Wood Treatment & Prevention</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Fumigation (Tent Treatment)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Spot Treatments for Localized Infestations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Pre-Construction Termite Prevention</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Annual Monitoring & Maintenance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            Warning Signs of Termites
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Mud tubes on foundation walls or crawl spaces</li>
            <li>• Discarded termite wings near windows or doors</li>
            <li>• Hollow-sounding or damaged wood</li>
            <li>• Blistered or sagging floors</li>
            <li>• Tight-fitting doors or windows</li>
            <li>• Visible termite swarmers (especially in spring)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Termite Control Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Advanced Detection
              </h4>
              <p className="text-gray-600">
                We use thermal imaging cameras, moisture meters, and acoustic detection
                devices to locate termite activity that may not be visible to the naked eye.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Customized Treatment
              </h4>
              <p className="text-gray-600">
                Based on our inspection findings, we develop a treatment plan using the
                most effective method for your specific situation and property type.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Professional Application
              </h4>
              <p className="text-gray-600">
                Our certified technicians apply treatments with precision, ensuring complete
                coverage and maximum effectiveness while protecting your property.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Ongoing Protection
              </h4>
              <p className="text-gray-600">
                We provide monitoring services and annual inspections to ensure your property
                remains termite-free and protected long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

