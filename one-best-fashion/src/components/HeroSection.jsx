// src/components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Fashion That 
              <span className="text-pink-600 block">Defines You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the latest trends in fashion, clothing, and shoes. Express your unique style with our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition flex items-center justify-center group"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#products"
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-600 hover:text-white transition"
              >
                View Collection
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop" 
              alt="Fashion Model" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-pink-600">50% OFF</div>
              <div className="text-gray-600">Summer Collection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
