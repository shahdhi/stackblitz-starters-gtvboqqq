import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Package, Shield, Ruler, Truck } from 'lucide-react';

export default function Products() {
  const productCategories = [
    {
      name: 'RCC Hume Pipes',
      description: 'Premium quality reinforced concrete cement pipes for drainage and sewerage systems',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'High compressive strength',
        'Corrosion resistant',
        'Long-lasting durability',
        'Easy to install',
      ],
      sizes: [
        { diameter: '300mm', length: '2.5m', price: 'LKR 4,500' },
        { diameter: '450mm', length: '2.5m', price: 'LKR 7,800' },
        { diameter: '600mm', length: '2.5m', price: 'LKR 12,500' },
        { diameter: '900mm', length: '2.5m', price: 'LKR 24,000' },
        { diameter: '1200mm', length: '2.5m', price: 'LKR 38,500' },
        { diameter: '1500mm', length: '2.5m', price: 'LKR 55,000' },
      ],
      applications: ['Storm water drainage', 'Sewerage systems', 'Culvert construction', 'Underground drainage'],
    },
    {
      name: 'Septic Tanks',
      description: 'Pre-cast reinforced concrete septic tanks with superior strength and leak-proof design',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Water-tight construction',
        'Pre-cast for quality control',
        'Multiple capacity options',
        'Easy installation',
      ],
      sizes: [
        { diameter: '500L', length: 'Single chamber', price: 'LKR 18,000' },
        { diameter: '1000L', length: 'Single chamber', price: 'LKR 32,000' },
        { diameter: '1500L', length: 'Double chamber', price: 'LKR 48,000' },
        { diameter: '2000L', length: 'Double chamber', price: 'LKR 65,000' },
        { diameter: '3000L', length: 'Triple chamber', price: 'LKR 95,000' },
        { diameter: '5000L', length: 'Triple chamber', price: 'LKR 145,000' },
      ],
      applications: ['Residential properties', 'Commercial buildings', 'Schools and hospitals', 'Industrial facilities'],
    },
    {
      name: 'Well Rings & Covers',
      description: 'Durable concrete well rings and covers for water wells and manholes',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Precision manufactured',
        'Heavy-duty construction',
        'Standard & custom sizes',
        'Weather resistant',
      ],
      sizes: [
        { diameter: '3ft diameter', length: '2ft height', price: 'LKR 3,200' },
        { diameter: '3ft diameter', length: '3ft height', price: 'LKR 4,500' },
        { diameter: '4ft diameter', length: '2ft height', price: 'LKR 4,800' },
        { diameter: '4ft diameter', length: '3ft height', price: 'LKR 6,500' },
        { diameter: '5ft diameter', length: '2ft height', price: 'LKR 6,200' },
        { diameter: '5ft diameter', length: '3ft height', price: 'LKR 8,500' },
      ],
      applications: ['Water wells', 'Inspection chambers', 'Manholes', 'Underground utilities'],
    },
    {
      name: 'Block Stones & Pavers',
      description: 'Interlocking concrete block stones and pavers for driveways, pathways, and landscaping',
      image: 'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multiple color options',
        'Non-slip surface',
        'Easy to replace',
        'Aesthetic appeal',
      ],
      sizes: [
        { diameter: 'Standard block', length: '200x100x60mm', price: 'LKR 85/piece' },
        { diameter: 'Rectangle paver', length: '250x125x60mm', price: 'LKR 110/piece' },
        { diameter: 'Square paver', length: '200x200x60mm', price: 'LKR 145/piece' },
        { diameter: 'Zigzag paver', length: '225x112x60mm', price: 'LKR 95/piece' },
        { diameter: 'Grass paver', length: '400x600x100mm', price: 'LKR 580/piece' },
        { diameter: 'Kerb stone', length: '1000x150x250mm', price: 'LKR 950/piece' },
      ],
      applications: ['Driveways', 'Walkways', 'Parking areas', 'Garden paths', 'Commercial spaces'],
    },
    {
      name: 'Concrete Poles',
      description: 'Pre-stressed concrete poles for electrical and telecommunications applications',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'High tensile strength',
        'Weather resistant',
        'Long service life',
        'Low maintenance',
      ],
      sizes: [
        { diameter: '8m length', length: 'Medium duty', price: 'LKR 12,500' },
        { diameter: '9m length', length: 'Medium duty', price: 'LKR 15,800' },
        { diameter: '10m length', length: 'Heavy duty', price: 'LKR 19,500' },
        { diameter: '11m length', length: 'Heavy duty', price: 'LKR 23,000' },
        { diameter: '12m length', length: 'Extra heavy', price: 'LKR 28,500' },
      ],
      applications: ['Power distribution', 'Street lighting', 'Telecommunication lines', 'Security lighting'],
    },
    {
      name: 'Precast Slabs & Beams',
      description: 'Pre-cast concrete slabs and beams for faster construction and superior quality',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Factory quality control',
        'Faster installation',
        'Consistent strength',
        'Cost-effective',
      ],
      sizes: [
        { diameter: 'Hollow core slab', length: '1200x150x150mm', price: 'LKR 2,800/m' },
        { diameter: 'Solid slab', length: '1200x150x100mm', price: 'LKR 2,200/m' },
        { diameter: 'T-Beam', length: '300x450mm', price: 'LKR 4,500/m' },
        { diameter: 'L-Beam', length: '250x400mm', price: 'LKR 3,800/m' },
        { diameter: 'Box culvert', length: '2000x2000mm', price: 'LKR 85,000/m' },
      ],
      applications: ['Floor systems', 'Roof construction', 'Bridge construction', 'Parking structures'],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products are manufactured under strict quality control and meet international standards',
    },
    {
      icon: Package,
      title: 'Wide Range',
      description: 'Comprehensive selection of sizes and specifications to meet all your construction needs',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Island-wide delivery service ensures your products arrive on time',
    },
    {
      icon: Ruler,
      title: 'Custom Orders',
      description: 'We can manufacture products to your specific requirements and dimensions',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover our comprehensive range of premium quality RCC concrete products. Manufactured using the finest materials and latest technology, all our products meet or exceed industry standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange-600" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} id={category.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {category.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-3">Available Sizes & Pricing:</h3>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        {category.sizes.map((size, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                            <div>
                              <div className="font-medium text-gray-900">{size.diameter}</div>
                              <div className="text-sm text-gray-600">{size.length}</div>
                            </div>
                            <div className="font-bold text-orange-600">{size.price}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">* Prices subject to change. Contact us for bulk orders and special discounts.</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-lg mb-3">Applications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.applications.map((app, i) => (
                          <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                      Request Quote
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                {index < productCategories.length - 1 && (
                  <div className="border-b border-gray-200 mt-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Need Custom Products?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We understand that every project is unique. Our team can manufacture custom products to your exact specifications and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Contact Our Team
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+94112345678" className="btn-secondary inline-flex items-center justify-center gap-2">
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">ISO 9001</div>
              <div className="text-orange-100">Certified Quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Quality Tested</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
