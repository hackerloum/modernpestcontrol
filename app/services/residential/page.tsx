import ServiceLayout from '@/components/ServiceLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Pest Control Services | PestGuard Pro',
  description: 'Comprehensive residential pest control solutions for your home. Customized treatment plans for ants, roaches, spiders, and more. Licensed technicians, eco-friendly methods.',
}

export default function ResidentialPestControl() {
  return (
    <ServiceLayout
      iconName="Home"
      title="Residential Pest Control"
      description="Comprehensive protection for your home with customized treatment plans for all common household pests. Keep your family safe with our proven, eco-friendly solutions."
      color="from-blue-500 to-blue-600"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      features={[
        'Customized treatment plans for your specific pest problems',
        'Safe, family and pet-friendly pest control methods',
        'Regular maintenance programs to prevent future infestations',
        'Same-day service available for urgent situations',
        '100% satisfaction guarantee on all treatments',
        'Licensed and insured technicians with years of experience',
        'Eco-friendly solutions that protect your home and environment',
        'Comprehensive coverage for all common household pests',
      ]}
      processSteps={[
        {
          step: 'Inspection',
          description: 'Thorough examination of your property to identify pest types, entry points, and infestation levels.',
        },
        {
          step: 'Custom Plan',
          description: 'Development of a personalized treatment strategy tailored to your home&apos;s specific needs.',
        },
        {
          step: 'Treatment',
          description: 'Professional application of safe, effective pest control solutions throughout your property.',
        },
        {
          step: 'Prevention',
          description: 'Ongoing maintenance and prevention strategies to keep pests from returning.',
        },
      ]}
      faqs={[
        {
          question: 'What pests do you treat in residential properties?',
          answer: 'We treat all common household pests including ants, roaches, spiders, silverfish, earwigs, centipedes, millipedes, crickets, and more. We also provide specialized services for termites, rodents, bed bugs, and wildlife.',
        },
        {
          question: 'Are your treatments safe for children and pets?',
          answer: 'Yes! We use eco-friendly, EPA-approved products that are safe for your family and pets when applied correctly. Our technicians will provide specific instructions for any temporary precautions needed.',
        },
        {
          question: 'How often do I need pest control service?',
          answer: 'Most homes benefit from quarterly treatments, but we can customize a schedule based on your specific needs, location, and pest pressure. We also offer one-time treatments and monthly programs.',
        },
        {
          question: 'Do I need to leave my home during treatment?',
          answer: 'In most cases, you can stay in your home during treatment. However, for certain intensive treatments, we may recommend staying away for a few hours. We&apos;ll always discuss this with you beforehand.',
        },
        {
          question: 'What should I do to prepare for a treatment?',
          answer: 'We&apos;ll provide you with a preparation checklist before your appointment. Generally, this includes clearing countertops, moving furniture away from walls, and ensuring access to problem areas.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Complete Home Protection
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your home should be a safe haven for your family, free from unwanted pests.
              Our residential pest control services provide comprehensive protection against
              all common household pests, from tiny ants to larger wildlife.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand that every home is unique, which is why we create customized
              treatment plans tailored to your specific situation. Whether you&apos;re dealing
              with a current infestation or want to prevent future problems, our licensed
              technicians have the expertise to help.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our eco-friendly approach ensures that we eliminate pests while protecting
              your family, pets, and the environment. We use the latest techniques and
              products that are both highly effective and safe.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Common Residential Pests We Treat
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Ants (carpenter, fire, pavement, and more)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Cockroaches (German, American, Oriental)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Spiders (including black widows and brown recluses)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Silverfish and firebrats</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Earwigs and centipedes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Crickets and grasshoppers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Fleas and ticks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent font-bold">✓</span>
                <span>Wasps and hornets</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Our Residential Pest Control Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Interior Treatment
              </h4>
              <p className="text-gray-600">
                We treat all interior areas including kitchens, bathrooms, basements,
                attics, and living spaces. Our technicians focus on entry points,
                nesting areas, and high-traffic zones where pests are most active.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Exterior Treatment
              </h4>
              <p className="text-gray-600">
                Perimeter treatments create a protective barrier around your home,
                preventing pests from entering. We also treat landscaping, decks,
                patios, and other outdoor areas.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Exclusion Services
              </h4>
              <p className="text-gray-600">
                We identify and seal entry points to prevent pests from getting inside.
                This includes gaps around doors, windows, pipes, and foundation cracks.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">
                Ongoing Maintenance
              </h4>
              <p className="text-gray-600">
                Regular maintenance visits ensure your home stays pest-free year-round.
                We monitor for new activity and adjust treatments as needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

