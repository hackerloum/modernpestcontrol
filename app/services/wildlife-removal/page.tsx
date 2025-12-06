import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wildlife Removal Services | PestGuard Pro',
  description: 'Humane wildlife removal for raccoons, squirrels, birds, and other nuisance animals. Professional trapping, exclusion, and prevention services.',
}

export default function WildlifeRemoval() {
  return (
    <ServiceLayout
      iconName="Squirrel"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      title="Wildlife Removal"
      description="Humane wildlife removal services for raccoons, squirrels, birds, and other nuisance animals. Our professional wildlife removal services safely and humanely remove unwanted animals from your property and implement exclusion measures to prevent their return."
      color="from-teal-500 to-teal-600"
      features={[
        'Humane trapping and removal methods',
        'Expert identification of wildlife species',
        'Exclusion services to prevent re-entry',
        'Attic and crawl space cleanup and restoration',
        '24/7 emergency wildlife removal',
        'Compliance with wildlife protection regulations',
        'Damage repair and prevention services',
        'Ongoing monitoring and maintenance',
      ]}
      processSteps={[
        {
          step: 'Identification',
          description: 'Expert identification of the wildlife species and assessment of the situation to determine the best removal approach.',
        },
        {
          step: 'Removal',
          description: 'Humane trapping and removal of wildlife using methods that comply with local regulations and animal welfare standards.',
        },
        {
          step: 'Exclusion',
          description: 'Sealing all entry points and implementing exclusion measures to prevent wildlife from returning to your property.',
        },
        {
          step: 'Cleanup',
          description: 'Cleanup of droppings, nesting materials, and damage repair to restore your property to its original condition.',
        },
      ]}
      faqs={[
        {
          question: 'What types of wildlife do you remove?',
          answer: 'We remove all common nuisance wildlife including raccoons, squirrels, opossums, skunks, birds, bats, snakes, and more. We also handle larger animals like coyotes when necessary.',
        },
        {
          question: 'Are your wildlife removal methods humane?',
          answer: 'Yes, we use humane trapping and removal methods that comply with local wildlife protection regulations. We prioritize the safety and welfare of both the animals and your property.',
        },
        {
          question: 'Do you handle wildlife in attics or crawl spaces?',
          answer: 'Yes, we specialize in removing wildlife from attics, crawl spaces, walls, and other hard-to-reach areas. We also provide cleanup and restoration services for these areas.',
        },
        {
          question: 'How do you prevent wildlife from coming back?',
          answer: 'We use exclusion techniques to seal all entry points, remove attractants, and implement ongoing monitoring. We also provide recommendations for maintaining a wildlife-free property.',
        },
        {
          question: 'Do you provide emergency wildlife removal?',
          answer: 'Yes, we offer 24/7 emergency services for urgent wildlife situations, especially when animals pose immediate safety risks or are causing significant property damage.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Humane Wildlife Removal Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When wildlife invades your property, it can cause damage, create health hazards,
              and become a nuisance. Our professional wildlife removal services safely and
              humanely remove unwanted animals while implementing long-term exclusion measures
              to prevent their return.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that wildlife removal requires specialized knowledge and must be
              done in compliance with local regulations. Our experienced technicians are trained
              in humane trapping methods and wildlife behavior, ensuring effective removal while
              protecting both the animals and your property.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also provide cleanup and restoration services to repair damage and remove
              health hazards like droppings and nesting materials. Our comprehensive approach
              ensures your property is fully restored and protected from future wildlife problems.
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Wildlife We Remove
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Raccoons</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Squirrels</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Opossums</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Skunks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Birds (pigeons, starlings, etc.)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Bats</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Snakes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Coyotes & Other Large Animals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Signs of Wildlife Activity
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Strange noises in attics, walls, or crawl spaces</li>
            <li>• Damage to roofing, siding, or soffits</li>
            <li>• Tracks or droppings around your property</li>
            <li>• Disturbed landscaping or gardens</li>
            <li>• Unusual odors (especially from skunks or dead animals)</li>
            <li>• Nests or nesting materials in attics or crawl spaces</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Wildlife Removal Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Humane Trapping
              </h4>
              <p className="text-gray-600">
                We use humane live traps and removal methods that comply with wildlife
                protection regulations. Animals are safely removed and relocated to appropriate
                habitats when possible.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Exclusion Services
              </h4>
              <p className="text-gray-600">
                We seal all entry points including gaps in roofing, soffits, foundations,
                and walls to prevent wildlife from returning to your property.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Cleanup & Restoration
              </h4>
              <p className="text-gray-600">
                We provide thorough cleanup of droppings, nesting materials, and damage
                repair. This includes sanitization to remove health hazards and restore
                your property.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Prevention
              </h4>
              <p className="text-gray-600">
                We implement long-term prevention measures including habitat modification,
                attractant removal, and ongoing monitoring to ensure wildlife doesn't return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

