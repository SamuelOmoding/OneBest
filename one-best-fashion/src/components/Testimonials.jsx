// src/components/Testimonials.jsx
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Wanjiku',
    text: 'Amazing quality and fast delivery! My new favorite fashion store.',
    rating: 5,
    image: '/images/categories/women.jpeg',
  },
  {
    name: 'Colbert Ojiambo',
    text: 'Great prices and trendy styles. Highly recommend OneBest Fashion!',
    rating: 5,
    image: '/images/categories/men.jpeg'
  },
  {
    name: 'Emmanuel Emoit',
    text: 'Love the variety and customer service. Will definitely shop again.',
    rating: 5,
    image: '/images/Photo.jpeg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from real customers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
