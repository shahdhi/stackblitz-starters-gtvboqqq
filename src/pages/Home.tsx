import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Truck, Users, Award, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Shield, title: 'Premium Quality', description: 'ISO certified RCC products manufactured to highest standards' },
    { icon: Truck, title: 'Island-wide Delivery', description: 'Fast and reliable delivery to all areas across Sri Lanka' },
    { icon: Users, title: 'Expert Operators', description: 'Skilled professionals for all machinery hire services' },
    { icon: Award, title: '25+ Years Experience', description: 'Trusted industry leader since 1995' },
  ];

  const stats = [
    { value: '10,000+', label: 'Projects Completed' },
    { value: '500+', label: 'Happy Clients' },
    { value: '25+', label: 'Years in Business' },
    { value: '50+', label: 'Expert Staff' },
  ];

  const products = [
    {
      name: 'RCC Hume Pipes',
      description: 'Durable drainage pipes in various sizes from 300mm to 1800mm diameter',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Septic Tanks',
      description: 'Pre-cast concrete septic tanks with capacities from 500L to 5000L',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Well Rings',
      description: 'High-quality concrete well rings and covers in standard and custom sizes',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Block Stones',
      description: 'Interlocking block stones and pavers for driveways and pathways',
      image: 'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Construction Ltd',
      text: 'Outstanding quality products and excellent service. We have been using Samsons for all our projects for over 10 years.',
      rating: 5,
    },
    {
      name: 'Priya Fernando',
      company: 'Fernando Developers',
      text: 'Their machinery hire service with expert operators made our project completion much faster. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Ahmed Jaleel',
      company: 'Coastal Constructions',
      text: 'Reliable delivery and premium quality products. The team is professional and always delivers on time.',
      rating: 5,
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Premium RCC Products & Machinery Services
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Sri Lanka's most trusted supplier of high-quality concrete products and heavy machinery hire services. Serving the construction industry with excellence since 1995.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/50">
                  View Products
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Get Quote
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-slideUpFade" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl font-bold text-yellow-500">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Construction site with machinery"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl shadow-yellow-400/30 border-l-4 border-yellow-400">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-500" size={32} />
                  <div>
                    <div className="font-bold text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Samsons?</h2>
            <p className="section-subtitle mx-auto">
              We combine quality products, expert service, and reliable delivery to exceed your expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 text-center hover:-translate-y-2">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
                    <Icon className="text-yellow-600" size={32} />
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
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle mx-auto">
              High-quality RCC concrete products for all your construction needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to="/products" className="text-orange-600 font-medium hover:text-orange-700 inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Machinery Hire Services</h2>
              <p className="text-lg mb-6 text-orange-50 leading-relaxed">
                Need heavy machinery for your construction project? We provide fully maintained equipment with expert operators for hire.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span>JCB Backhoe Loaders</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span>Excavators (Mini to Large)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span>Wheel Loaders & Dozers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span>Experienced Operators Included</span>
                </li>
              </ul>
              <Link to="/services" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-yellow-400/50">
                View Services
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Heavy machinery at construction site"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Trusted by hundreds of construction companies across Sri Lanka
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t-4 border-yellow-400">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free quote and let our experts help you choose the right products and services for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/50">
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+94112345678" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-yellow-400">
                <Clock size={20} />
                Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Island-wide Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
