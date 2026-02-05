import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, TrendingUp, Heart, Shield, Lightbulb, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product meets or exceeds industry standards.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. Their success is our success.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously improving our products and services through technology and innovation.',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our experienced team works together to deliver exceptional results.',
    },
  ];

  const milestones = [
    { year: '1995', title: 'Company Founded', description: 'Started as a small concrete products manufacturer in Colombo' },
    { year: '2000', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management' },
    { year: '2005', title: 'Expanded Product Line', description: 'Introduced septic tanks and well rings to our range' },
    { year: '2010', title: 'Machinery Division', description: 'Launched heavy machinery hire services' },
    { year: '2015', title: 'Island-wide Coverage', description: 'Expanded delivery network to cover all of Sri Lanka' },
    { year: '2020', title: 'Modern Facility', description: 'Opened state-of-the-art manufacturing plant' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as Sri Lanka\'s leading RCC products supplier' },
  ];

  const team = [
    {
      name: 'Samson Perera',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 30 years in the construction industry, Samson founded the company with a vision to provide quality products.',
    },
    {
      name: 'Nimal Fernando',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Oversees manufacturing operations and ensures consistent quality across all product lines.',
    },
    {
      name: 'Priya Jayawardena',
      role: 'Quality Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leads our quality assurance team and maintains our ISO certifications.',
    },
    {
      name: 'Kumar Dissanayake',
      role: 'Machinery Services Head',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Manages our fleet of heavy machinery and coordinates all rental operations.',
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'ISO 14001:2015', description: 'Environmental Management' },
    { name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { name: 'SLS Certification', description: 'Sri Lanka Standards' },
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Corporate Clients' },
    { value: '10,000+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '100+', label: 'Product Variants' },
    { value: '50+', label: 'Heavy Machinery' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Samsons Hume Pipes</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Building Sri Lanka's infrastructure since 1995 with premium quality RCC products and reliable machinery services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1995 by Samson Perera, Samsons Hume Pipes began as a small concrete products manufacturer in Colombo with a simple mission: to provide the construction industry with reliable, high-quality RCC products.
                </p>
                <p>
                  What started as a modest operation with just a handful of employees has grown into one of Sri Lanka's most trusted names in construction materials and equipment services. Today, we operate a state-of-the-art manufacturing facility and maintain a diverse fleet of heavy machinery.
                </p>
                <p>
                  Our success is built on unwavering commitment to quality, customer satisfaction, and continuous innovation. We've been privileged to contribute to thousands of construction projects across Sri Lanka, from residential homes to major infrastructure developments.
                </p>
                <p>
                  With over 25 years of experience, ISO certifications, and a team of dedicated professionals, we continue to set industry standards while staying true to our founding values.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Construction site"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="RCC pipes"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Heavy machinery"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Concrete products"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-orange-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To be Sri Lanka's most trusted provider of premium quality RCC concrete products and heavy machinery services, enabling our customers to build better infrastructure through reliable products, expert service, and innovative solutions.
              </p>
            </div>
            <div className="card p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-orange-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize the construction industry in Sri Lanka by consistently delivering world-class products and services, while maintaining our commitment to quality, sustainability, and customer satisfaction as we expand our reach across the region.
              </p>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="card p-6 text-center hover:-translate-y-1">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-orange-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              Key milestones in our 25+ year history
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="card p-6 inline-block max-w-md">
                      <div className="text-orange-600 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <div className="text-orange-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Certifications & Standards</h2>
            <p className="section-subtitle mx-auto">
              Committed to excellence through certified quality management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-600" size={40} />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
            <p className="text-lg text-orange-50 mb-8">
              Whether you're planning a small residential project or a major infrastructure development, we're here to support you with quality products and expert service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center gap-2">
                View Products
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-all duration-200 inline-flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
