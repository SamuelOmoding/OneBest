// src/components/Footer.jsx

import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Music2,
  Mail,
} from 'lucide-react';

const Footer = () => (
  <footer className="bg-black text-white mt-auto">
    {/* Newsletter */}
    <div className="border-b border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter for exclusive fashion updates, new arrivals, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-gray-600 border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <Button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-gray-900 focus:ring-gray-900 transition">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Footer content */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">
            OneBest <span className="text-green-700">Fashion</span>
          </h3>
          <p className="text-white/80 mb-6">
            Your destination for premium fashion and accessories. Discover fashion that defines your story.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://www.facebook.com/OneBestFashionKE?rdid=wRCyAD3qKCAhG98q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16USitrh62%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0437F2] hover:text-white transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/onebestfashion_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5387] hover:text-white transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/254796478429"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1fd655] hover:text-white transition-colors duration-200"
            >
              <MessageCircleMore size={20} />
            </a>
            <a
              href="https://tiktok.com/@onebestfashion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff0050] transition-colors duration-200"
            >
              <Music2 size={20} />
            </a>
            <a
              href="mailto:oonebestfashion@gmail.com"
              className="text-[#423E53] hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/logo.jpeg"
            alt="OneBest Fashion Logo"
            width={80}
            height={25}
            className="h-4/5 w-1/4 object-contain"
          />
        </div>
      </div>
    </div>



    {/* Bottom bar */}
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



