import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Users, Wrench, Shield, Award, Zap } from 'lucide-react';

export default function Services() {
  const machinery = [
    {
      name: 'JCB Backhoe Loader',
      description: 'Versatile machine perfect for excavation, loading, and trenching operations',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: '1.0 m³ bucket capacity',
        reach: '5.7m digging depth',
        power: '74 HP engine',
      },
      rates: {
        hourly: 'LKR 4,500/hour',
        daily: 'LKR 32,000/day',
        weekly: 'LKR 180,000/week',
        monthly: 'LKR 650,000/month',
      },
      features: [
        'Experienced operator included',
        'Fuel included in rate',
        'Regular maintenance',
        '24/7 support',
      ],
      applications: ['Excavation work', 'Loading operations', 'Trenching', 'Site preparation', 'Foundation digging'],
    },
    {
      name: 'Mini Excavator',
      description: 'Compact excavator ideal for confined spaces and urban construction sites',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: '0.25 m³ bucket',
        reach: '3.2m digging depth',
        power: '24 HP engine',
      },
      rates: {
        hourly: 'LKR 3,200/hour',
        daily: 'LKR 22,000/day',
        weekly: 'LKR 120,000/week',
        monthly: 'LKR 420,000/month',
      },
      features: [
        'Perfect for tight spaces',
        'Low ground pressure',
        'Easy transportation',
        'Skilled operator provided',
      ],
      applications: ['Residential projects', 'Urban construction', 'Landscaping', 'Utility installation', 'Demolition work'],
    },
    {
      name: 'Large Excavator',
      description: 'Heavy-duty excavator for major earthmoving and construction projects',
      image: 'https://images.pexels.com/photos/1092364/pexels-photo-1092364.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: '2.5 m³ bucket capacity',
        reach: '12m digging depth',
        power: '320 HP engine',
      },
      rates: {
        hourly: 'LKR 8,500/hour',
        daily: 'LKR 60,000/day',
        weekly: 'LKR 350,000/week',
        monthly: 'LKR 1,200,000/month',
      },
      features: [
        'Heavy-duty performance',
        'GPS tracking',
        'Expert operator included',
        'Full insurance coverage',
      ],
      applications: ['Large scale excavation', 'Mining operations', 'Dam construction', 'Highway projects', 'Deep foundation work'],
    },
    {
      name: 'Wheel Loader',
      description: 'Powerful loader for material handling and loading operations',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: '3.5 m³ bucket',
        reach: '3.5m loading height',
        power: '180 HP engine',
      },
      rates: {
        hourly: 'LKR 5,500/hour',
        daily: 'LKR 38,000/day',
        weekly: 'LKR 220,000/week',
        monthly: 'LKR 780,000/month',
      },
      features: [
        'Quick coupler system',
        'Air-conditioned cabin',
        'Professional operator',
        'Various bucket options',
      ],
      applications: ['Material loading', 'Stockpile management', 'Aggregate handling', 'Snow removal', 'Waste handling'],
    },
    {
      name: 'Bulldozer',
      description: 'Heavy-duty dozer for land clearing and grading operations',
      image: 'https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: 'D6 size blade',
        reach: 'Push capacity 8,000 kg',
        power: '215 HP engine',
      },
      rates: {
        hourly: 'LKR 7,500/hour',
        daily: 'LKR 52,000/day',
        weekly: 'LKR 300,000/week',
        monthly: 'LKR 1,050,000/month',
      },
      features: [
        'Heavy-duty blade',
        'Ripper attachment available',
        'GPS grade control',
        'Certified operator',
      ],
      applications: ['Land clearing', 'Grading work', 'Road construction', 'Site leveling', 'Push-loading'],
    },
    {
      name: 'Compactor Roller',
      description: 'Vibratory roller for soil and asphalt compaction',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: {
        capacity: '10-ton class',
        reach: '1.7m working width',
        power: '85 HP engine',
      },
      rates: {
        hourly: 'LKR 4,000/hour',
        daily: 'LKR 28,000/day',
        weekly: 'LKR 160,000/week',
        monthly: 'LKR 560,000/month',
      },
      features: [
        'Smooth & padfoot drums',
        'Vibration control',
        'Water spray system',
        'Experienced operator',
      ],
      applications: ['Road construction', 'Pavement work', 'Soil compaction', 'Embankment work', 'Parking lot construction'],
    },
  ];

  const serviceFeatures = [
    {
      icon: Users,
      title: 'Expert Operators',
      description: 'All machinery comes with highly trained and certified operators with years of experience',
    },
    {
      icon: Wrench,
      title: 'Well Maintained',
      description: 'Regular maintenance and servicing ensure optimal performance and minimal downtime',
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Hourly, daily, weekly, or monthly rental options to suit your project timeline',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage on all equipment for your peace of mind',
    },
    {
      icon: Zap,
      title: 'Quick Mobilization',
      description: 'Fast deployment to your site anywhere in Sri Lanka within 24-48 hours',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: '25+ years of reliable service with a proven track record of satisfied clients',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Request Quote',
      description: 'Contact us with your project requirements and timeline',
    },
    {
      step: '2',
      title: 'Site Assessment',
      description: 'Our team evaluates your site and recommends suitable machinery',
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'We prepare a detailed quotation and rental agreement',
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Equipment and operator are mobilized to your site',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Machinery Hire Services</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Professional heavy machinery rental services with experienced operators for all your construction needs. We provide well-maintained equipment with comprehensive support across Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+94112345678" className="btn-secondary inline-flex items-center gap-2">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Our Services</h2>
            <p className="section-subtitle mx-auto">
              Reliable equipment, expert operators, and unmatched customer service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 hover:-translate-y-1">
                  <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-orange-600" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Available Machinery</h2>
            <p className="section-subtitle mx-auto">
              Choose from our fleet of modern, well-maintained heavy equipment
            </p>
          </div>

          <div className="space-y-12">
            {machinery.map((machine, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-[400px] lg:h-auto">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{machine.name}</h3>
                    <p className="text-gray-700 mb-6">{machine.description}</p>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Technical Specifications:</h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Capacity:</span>
                          <span className="font-medium">{machine.specs.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Reach:</span>
                          <span className="font-medium">{machine.specs.reach}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Power:</span>
                          <span className="font-medium">{machine.specs.power}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Rental Rates:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">Hourly</div>
                          <div className="font-bold text-orange-600">{machine.rates.hourly}</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">Daily</div>
                          <div className="font-bold text-orange-600">{machine.rates.daily}</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">Weekly</div>
                          <div className="font-bold text-orange-600">{machine.rates.weekly}</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">Monthly</div>
                          <div className="font-bold text-orange-600">{machine.rates.monthly}</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">* Rates include operator and fuel. Special rates for long-term contracts.</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Included Features:</h4>
                      <ul className="space-y-2">
                        {machine.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Typical Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {machine.applications.map((app, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2 w-full justify-center">
                      Request This Machine
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              Simple and straightforward process from inquiry to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Multiple Machines?</h2>
            <p className="text-lg text-orange-50 mb-8">
              For large projects requiring multiple machines or long-term contracts, we offer special package rates and dedicated project management support.
            </p>
            <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2">
              Discuss Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-400">Machines Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400">Emergency Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">48hrs</div>
              <div className="text-gray-400">Quick Deployment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
