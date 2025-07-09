"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-stone-800 text-white pt-16 pb-8 px-4 lg:px-8 xl:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Hotel Sephiron</h3>
          <p className="text-stone-400 max-w-sm">
            Experience an unforgettable stay with luxurious amenities and world-class service in the heart of the city.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="#rooms" onClick={(e) => handleScroll(e, 'rooms')} className="hover:text-yellow-400 transition-colors">Rooms</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="#activities" onClick={(e) => handleScroll(e, 'activities')} className="hover:text-yellow-400 transition-colors">Activities</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold uppercase tracking-wider">Contact Info</h4>
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 mt-1 text-yellow-400" />
            <span>123 Sephiron Lane, Heaven City, 12345</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-yellow-400" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-yellow-400" />
            <span>contact@hotelsephiron.com</span>
          </div>
        </div>

      </div>
      <div className="border-t border-stone-700 mt-12 pt-6 text-center text-stone-500">
        <p>&copy; {new Date().getFullYear()} Sephiron Hotel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;