import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    category: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        category: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Main Street', 'Colombo 05', 'Sri Lanka'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+94 11 234 5678', '+94 77 123 4567', 'Mon - Sat: 8AM - 6PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@samsonshume.lk', 'sales@samsonshume.lk', 'support@samsonshume.lk'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '8:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  const locations = [
    {
      name: 'Head Office & Factory',
      address: '123 Main Street, Colombo 05',
      phone: '+94 11 234 5678',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
    },
    {
      name: 'Gampaha Branch',
      address: '456 Kandy Road, Gampaha',
      phone: '+94 33 234 5678',
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
    },
    {
      name: 'Kandy Branch',
      address: '789 Peradeniya Road, Kandy',
      phone: '+94 81 234 5678',
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
    },
    {
      name: 'Galle Branch',
      address: '321 Matara Road, Galle',
      phone: '+94 91 234 5678',
      hours: 'Mon-Sat: 8:00 AM - 5:00 PM',
    },
  ];

  const faqs = [
    {
      question: 'Do you deliver island-wide?',
      answer: 'Yes, we provide delivery services to all areas across Sri Lanka. Delivery charges vary based on location and order quantity.',
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'Minimum order quantities vary by product. Please contact us with your requirements for specific information.',
    },
    {
      question: 'Do you provide custom sizes?',
      answer: 'Yes, we can manufacture products to your specific size requirements. Lead times may vary for custom orders.',
    },
    {
      question: 'Are operators included with machinery hire?',
      answer: 'Yes, all our machinery comes with experienced, certified operators. Fuel is also included in the rental rates.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, cheques, and cash payments. Credit terms are available for approved corporate customers.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery within Colombo area is 1-2 days. Other areas may take 2-5 days depending on location and product availability.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Get in touch with our team for quotes, inquiries, or any assistance you need. We're here to help with your construction needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange-600" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. For urgent inquiries, please call us directly.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="font-bold text-xl text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="ABC Construction"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="products">RCC Products Inquiry</option>
                      <option value="machinery">Machinery Hire</option>
                      <option value="quote">Request Quote</option>
                      <option value="delivery">Delivery Information</option>
                      <option value="custom">Custom Orders</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please provide details about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
              <div className="space-y-6 mb-8">
                {locations.map((location, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="font-bold text-lg mb-3 text-orange-600">{location.name}</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-start gap-2">
                        <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={18} className="flex-shrink-0" />
                        <a href={`tel:${location.phone}`} className="text-sm hover:text-orange-600">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="flex-shrink-0" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-6 bg-orange-50 border border-orange-200">
                <h3 className="font-bold text-lg mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Our customer service team is available during business hours to answer your questions and provide support.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+94112345678"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@samsonshume.lk"
                    className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Showroom</h2>
              <p className="text-lg text-orange-50 mb-8">
                See our full range of products in person and speak with our knowledgeable staff about your construction needs.
              </p>
              <div className="bg-white text-gray-900 rounded-xl p-6 inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-orange-600" size={32} />
                  <div className="text-left">
                    <div className="font-bold text-lg">Main Showroom</div>
                    <div className="text-gray-600">123 Main Street, Colombo 05</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-left">
                    <div className="text-sm text-gray-600">Phone</div>
                    <div className="font-medium">+94 11 234 5678</div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-600">Hours</div>
                    <div className="font-medium">Mon-Sat: 8AM-6PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
