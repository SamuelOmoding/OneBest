// src/components/Footer.jsx
import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

// Importing icons from lucide-react

import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Music2,
    Mail
} from 'lucide-react';

const Footer = () => (
  <footer style={{
    background: '#201D1A',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
    marginTop: 'auto'
  }}>
     <div className="border-b border-gray/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
            <p className="text-white/900 mb-6">
              Subscribe to our newsletter for exclusive fashion updates, new arrivals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-600 border-8 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <Button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-black focus:ring-1 focus:ring-gray-500 transition">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <a
        href="https://www.facebook.com/OneBestFashionKE?rdid=wRCyAD3qKCAhG98q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16USitrh62%2F#"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#0437F2' }}
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://instagram.com/onebestfashion_"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FF5387' }}
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://wa.me/254796478429"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1fd655' }}
      >
        <MessageCircleMore size={20} />
      </a>
      <a
        href="https://tiktok.com/@onebestfashion"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#fff' }}
      >
        <Music2 size={20} />
      </a>
       <a
        href="mailto:oonebestfashion@gmail.com"
        style={{ color: '#423E53' }}
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
    </div>

     <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/60 text-sm">
        &copy; {new Date().getFullYear()} OneBest Fashion. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a
          href="/privacy-policy"
          className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
        >
          Terms of Service
        </a>
        <a
          href="/cookie-policy"
          className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  </div>
  </footer>
);

export default Footer;
