import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3">
        <div className="container-custom flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+94112345678" className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
              <Phone size={16} />
              <span className="font-medium">+94 11 234 5678</span>
            </a>
            <a href="mailto:info@samsonshume.lk" className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
              <Mail size={16} />
              <span className="font-medium">info@samsonshume.lk</span>
            </a>
          </div>
          <div className="text-xs font-semibold tracking-wide text-yellow-400">Island-wide Delivery Available</div>
        </div>
      </div>

      <div className="container-custom py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6V8.5l6-3 6 3V14c0 3.31-2.69 6-6 6z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">Samsons Hume Pipes</h1>
              <p className="text-xs text-gray-500 font-semibold tracking-wide">Premium RCC Products & Services</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-semibold transition-all duration-300 relative pb-1 ${
                  isActive(path)
                    ? 'text-yellow-500'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-yellow-500 transition-colors duration-300 hover:bg-yellow-50 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-200 pt-4 space-y-1 animate-slideUpFade">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-3 font-semibold transition-all duration-300 rounded-lg ${
                  isActive(path)
                    ? 'text-yellow-600 bg-yellow-50 border-l-4 border-yellow-400'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
