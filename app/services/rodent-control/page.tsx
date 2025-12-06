import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rodent Control & Removal Services | PestGuard Pro',
  description: 'Professional mouse and rat control services. Effective removal and prevention strategies to keep rodents out of your property. Safe, humane methods.',
}

export default function RodentControl() {
  return (
    <ServiceLayout
      iconName="Rat"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      title="Rodent Control"
      description="Effective rodent removal and prevention strategies to keep mice and rats out of your property. Our comprehensive rodent control services eliminate existing infestations and implement long-term prevention measures to protect your home or business."
      color="from-red-500 to-red-600"
      features={[
        'Humane removal methods for mice and rats',
        'Comprehensive inspection to identify entry points and nesting areas',
        'Exclusion services to seal entry points and prevent re-entry',
        'Ongoing monitoring and maintenance programs',
        'Safe, pet-friendly treatment options',
        'Expert identification of rodent species and behavior patterns',
        'Sanitation recommendations to reduce attractants',
        'Emergency rodent removal services available',
      ]}
      processSteps={[
        {
          step: 'Inspection',
          description: 'Thorough examination to identify rodent species, entry points, nesting areas, and activity patterns.',
        },
        {
          step: 'Exclusion',
          description: 'Sealing all entry points and potential access areas to prevent rodents from entering your property.',
        },
        {
          step: 'Removal',
          description: 'Strategic placement of traps and baits using proven methods to eliminate existing rodent populations.',
        },
        {
          step: 'Prevention',
          description: 'Ongoing monitoring and maintenance to ensure rodents don\'t return, including sanitation recommendations.',
        },
      ]}
      faqs={[
        {
          question: 'What types of rodents do you control?',
          answer: 'We control all common rodent species including house mice, Norway rats, roof rats, and field mice. Each species requires different treatment approaches.',
        },
        {
          question: 'How do you prevent rodents from coming back?',
          answer: 'We use exclusion techniques to seal entry points, remove attractants, and implement ongoing monitoring. We also provide recommendations for maintaining a rodent-free environment.',
        },
        {
          question: 'Are your rodent control methods safe for pets?',
          answer: 'Yes, we use pet-safe methods and products. We\'ll discuss any necessary precautions based on your specific situation and the treatment methods used.',
        },
        {
          question: 'How quickly can you eliminate a rodent problem?',
          answer: 'Most rodent problems can be significantly reduced within 1-2 weeks, with complete elimination typically achieved within 2-4 weeks depending on the severity of the infestation.',
        },
        {
          question: 'Do you provide emergency rodent removal?',
          answer: 'Yes, we offer 24/7 emergency services for urgent rodent situations, especially for commercial properties where immediate action is required.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Effective Rodent Removal & Prevention
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rodents are more than just a nuisance—they can cause property damage, contaminate
              food, spread diseases, and create fire hazards by chewing electrical wires. Our
              comprehensive rodent control services eliminate existing infestations and implement
              long-term prevention strategies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use a multi-faceted approach that includes inspection, exclusion (sealing entry
              points), removal, and ongoing prevention. Our methods are effective, humane, and
              safe for your family and pets.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Early intervention is crucial with rodent problems, as they reproduce quickly and
              can cause significant damage in a short time. Our experienced technicians can
              identify the species, locate all entry points, and develop an effective treatment plan.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Rodent Control Services
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>House Mouse Control</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Norway Rat Removal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Roof Rat Control</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Entry Point Exclusion</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Nesting Area Removal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Ongoing Monitoring Programs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Sanitation & Prevention Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-yellow-700 mb-2">
            Signs of Rodent Infestation
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Droppings (especially near food sources)</li>
            <li>• Gnaw marks on food packages, wires, or wood</li>
            <li>• Nests made of shredded paper, fabric, or insulation</li>
            <li>• Scratching or scurrying sounds in walls or ceilings</li>
            <li>• Grease marks along walls (from rodent fur)</li>
            <li>• Unusual pet behavior (cats or dogs may detect rodents)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Rodent Control Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Inspection & Identification
              </h4>
              <p className="text-gray-600">
                We identify the rodent species, locate all entry points, nesting areas, and
                activity patterns to develop an effective treatment strategy.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Exclusion Services
              </h4>
              <p className="text-gray-600">
                We seal all entry points including gaps around pipes, vents, doors, windows,
                and foundation cracks to prevent rodents from entering.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Removal Methods
              </h4>
              <p className="text-gray-600">
                We use a combination of traps and baits strategically placed based on rodent
                behavior patterns and activity areas.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Prevention & Maintenance
              </h4>
              <p className="text-gray-600">
                Ongoing monitoring, maintenance, and sanitation recommendations ensure your
                property remains rodent-free long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

