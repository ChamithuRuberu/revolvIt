import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Green Code Solution</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Innovative software solutions for modern businesses. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link 
                href="https://facebook.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-corporate-blue transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={18} className="group-hover:text-white" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-corporate-blue transition-colors group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="group-hover:text-white" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-corporate-blue transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:text-white" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-corporate-blue transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-corporate-blue mt-0.5 flex-shrink-0" />
                <a href="mailto:greencodesolution@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  greencodesolution@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-corporate-blue mt-0.5 flex-shrink-0" />
                <a href="tel:+94781508252" className="text-gray-400 hover:text-white transition-colors text-sm">
                  + (94) 78 150 82 52
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-corporate-blue mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Wewala, piliyandala<br />Colombo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Green Code Solution. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 