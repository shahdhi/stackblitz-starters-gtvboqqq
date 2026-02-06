import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 border-t-4 border-yellow-400">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Samsons Hume Pipes</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Sri Lanka's trusted provider of premium quality RCC concrete products and heavy machinery hiring services since 1995.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-yellow-400 transition-colors duration-300 font-medium">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-yellow-400 transition-colors duration-300 font-medium">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-yellow-400 transition-colors duration-300 font-medium">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-yellow-400 transition-colors duration-300 font-medium">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-yellow-400 transition-colors duration-300 font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Main Street, Colombo 05, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={18} className="flex-shrink-0 text-yellow-400" />
                <a href="tel:+94112345678" className="hover:text-yellow-400 transition-colors duration-300 font-medium">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={18} className="flex-shrink-0 text-yellow-400" />
                <a href="mailto:info@samsonshume.lk" className="hover:text-yellow-400 transition-colors duration-300 font-medium">
                  info@samsonshume.lk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock size={18} className="flex-shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>RCC Hume Pipes</li>
              <li>Septic Tanks</li>
              <li>Well Rings & Covers</li>
              <li>Block Stones & Pavers</li>
              <li>JCB Machinery Hire</li>
              <li>Excavator Services</li>
              <li>Island-wide Delivery</li>
              <li>Expert Operators</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2024 Samsons Hume Pipes. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-300 font-medium">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
