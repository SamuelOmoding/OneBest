import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">We’d love to hear from you. Whether you have a question or just want to say hi.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Our Location</h4>
                <p className="text-gray-600">Kasarani-Mwiki Rd, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Phone</h4>
                <p className="text-gray-600">+254 796 478 429</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-700">Email</h4>
                <p className="text-gray-600">oonebestfashion@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
