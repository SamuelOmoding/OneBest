// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About OneBest Fashion</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for fashion and style, OneBest Fashion has been serving customers with the latest trends and timeless classics for over a decade. We believe that fashion is a form of self-expression, and everyone deserves to look and feel their best.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our carefully curated collection features high-quality clothing, stylish shoes, and trendy accessories from both established and emerging designers. We're committed to providing exceptional customer service and making fashion accessible to everyone.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop" 
              alt="Fashion Store" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
