import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/places', label: t('places') },
    { path: '/dining', label: t('dining') },
    { path: '/accommodations', label: t('accommodations') },
    { path: '/maps', label: t('maps') },
    { path: '/travel-info', label: t('travelInfo') },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GL</span>
              </div>
              <span className="font-bold text-xl">Greenland Guide</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your comprehensive guide to exploring the world's largest island. 
              Discover pristine wilderness, unique culture, and unforgettable adventures in Greenland.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                <span>🇬🇧 English</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                <span>🇩🇰 Dansk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">Nuuk, Greenland</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">info@greenlandguide.gl</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+299 32 83 00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Greenland Guide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;