import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bed Bug Treatment & Removal Services | PestGuard Pro',
  description: 'Professional bed bug inspection and heat treatment services. Complete elimination of bed bug infestations with guaranteed results. Safe, effective methods.',
}

export default function BedBugTreatment() {
  return (
    <ServiceLayout
      iconName="BedDouble"
      title="Bed Bug Treatment"
      description="Thorough bed bug inspection and heat treatment to eliminate infestations completely. Our comprehensive bed bug services use proven methods including heat treatment, chemical treatments, and follow-up inspections to ensure complete elimination."
      color="from-purple-500 to-purple-600"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      features={[
        'Comprehensive bed bug inspection using trained detection dogs',
        'Heat treatment (thermal remediation) for complete elimination',
        'Chemical treatment options for targeted applications',
        'Follow-up inspections to ensure complete eradication',
        'Treatment warranties for peace of mind',
        'Discrete service that respects your privacy',
        'Preparation guidance to maximize treatment effectiveness',
        'Hotel and multi-unit treatment experience',
      ]}
      processSteps={[
        {
          step: 'Inspection',
          description: 'Thorough inspection using visual examination and detection dogs to locate all bed bug hiding spots and activity areas.',
        },
        {
          step: 'Preparation',
          description: 'Detailed preparation instructions to ensure maximum treatment effectiveness and protect your belongings.',
        },
        {
          step: 'Treatment',
          description: 'Application of heat treatment, chemical treatment, or combination approach based on infestation severity.',
        },
        {
          step: 'Verification',
          description: 'Follow-up inspections to verify complete elimination and ensure bed bugs don\'t return.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if I have bed bugs?',
          answer: 'Signs include small reddish-brown bugs, tiny white eggs, dark spots (fecal matter) on bedding, and itchy bite marks. Bed bugs are excellent hiders, so professional inspection is recommended.',
        },
        {
          question: 'What is heat treatment for bed bugs?',
          answer: 'Heat treatment involves raising the temperature in your home or room to levels that kill bed bugs at all life stages. It\'s highly effective and can eliminate bed bugs in a single treatment.',
        },
        {
          question: 'How long does bed bug treatment take?',
          answer: 'Heat treatments typically take 6-8 hours. Chemical treatments may require multiple visits over several weeks. We\'ll discuss the best approach for your situation.',
        },
        {
          question: 'Do I need to throw away my furniture?',
          answer: 'In most cases, furniture can be treated and saved. We\'ll assess each item during inspection and provide recommendations. Heat treatment is particularly effective for treating furniture.',
        },
        {
          question: 'How do I prevent bed bugs from coming back?',
          answer: 'We provide prevention tips including regular inspections, protective covers for mattresses, and awareness of how bed bugs are introduced. Follow-up monitoring helps ensure they don\'t return.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Complete Bed Bug Elimination
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bed bugs are one of the most challenging pests to eliminate, requiring specialized
              knowledge and treatment methods. Our comprehensive bed bug services use proven
              techniques including heat treatment and targeted chemical applications to ensure
              complete elimination.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the stress and discomfort bed bugs cause. Our experienced technicians
              are trained in the latest detection and treatment methods, and we work discretely
              to protect your privacy while solving your bed bug problem.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Early detection and professional treatment are essential with bed bugs, as they
              reproduce quickly and can spread throughout your home. Our comprehensive approach
              ensures we eliminate bed bugs at all life stages, including eggs, nymphs, and adults.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Bed Bug Treatment Methods
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Heat Treatment (Thermal Remediation)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Chemical Treatment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Steam Treatment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Detection Dog Inspections</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Follow-up Monitoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Mattress & Furniture Encasements</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Multi-Unit Building Treatment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            Signs of Bed Bug Infestation
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Small reddish-brown bugs (about the size of an apple seed)</li>
            <li>• Tiny white eggs or eggshells</li>
            <li>• Dark spots or stains on mattresses, sheets, or furniture</li>
            <li>• Itchy bite marks, often in lines or clusters</li>
            <li>• Musty, sweet odor (in severe infestations)</li>
            <li>• Shed skins from growing bed bugs</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Why Choose Our Bed Bug Treatment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Heat Treatment Expertise
              </h4>
              <p className="text-gray-600">
                Our heat treatment method raises temperatures to levels that kill bed bugs at
                all life stages, including eggs. This single-treatment approach is highly
                effective and eliminates the need for multiple visits.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Detection Dogs
              </h4>
              <p className="text-gray-600">
                We use trained detection dogs to locate bed bugs that may be hidden in walls,
                furniture, or other hard-to-reach areas, ensuring we find and treat all
                infestation sites.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Comprehensive Approach
              </h4>
              <p className="text-gray-600">
                We combine multiple treatment methods as needed, including heat, chemical,
                and steam treatments, to ensure complete elimination regardless of
                infestation severity.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Follow-up Guarantee
              </h4>
              <p className="text-gray-600">
                We provide follow-up inspections and additional treatments if needed to
                ensure complete elimination. Our treatment warranties give you peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

