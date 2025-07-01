import React from 'react';
import { Link } from 'react-router-dom';

// Main categories data
const categories = [
  {
    name: "Women's Fashion",
    image: '/images/categories/women.jpeg',
    link: '/shop?category=women',
    description: 'Trendy styles & essentials',
    color: 'from-pink-500 to-rose-500',
    subcategories: ['Dresses', 'Tops & Blouses', 'Bottoms', 'Outerwear', 'Activewear', 'Lingerie']
  },
  {
    name: "Men's Fashion",
    image: '/images/categories/men.jpeg',
    link: '/shop?category=men',
    description: 'Modern fits & classics',
    color: 'from-blue-600 to-indigo-600',
    subcategories: ['Shirts', 'T-Shirts & Polos', 'Pants & Jeans', 'Outerwear', 'Activewear', 'Underwear']
  },
  {
    name: 'Footwear',
    image: '/images/categories/shoe.jpeg',
    link: '/shop?category=shoes',
    description: 'Shoes for every occasion',
    color: 'from-amber-500 to-orange-500',
    subcategories: ['Sneakers', 'Dress Shoes', 'Boots', 'Sandals', 'Athletic Shoes', 'Casual Shoes']
  }
];

export const SubCategories = ({ mainCategory, subcategories }) => {
  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-gray-600 font-medium mr-2">Browse {mainCategory}:</span>
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory}
              to={`/shop?category=${mainCategory.toLowerCase().replace("'s", "").replace(" ", "-")}&subcategory=${subcategory.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-full text-sm font-medium transition-colors duration-200 hover:shadow-md"
            >
              {subcategory}
            </Link>
          ))}
          <Link
            to={`/shop?category=${mainCategory.toLowerCase().replace("'s", "").replace(" ", "-")}`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors duration-200 hover:shadow-md ml-2"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections for men, women, and footwear
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={category.name} 
              className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  <h3 className="text-white text-3xl font-bold mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-lg font-medium mb-4 drop-shadow">
                    {category.description}
                  </p>
                  
                  {/* Subcategories Preview */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span key={sub} className="text-white/80 text-sm bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-white/80 text-sm bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <span className="text-white font-semibold mr-2">Shop Now</span>
                    <svg 
                      className="w-5 h-5 text-white transform group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black to-green-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">New Arrivals</h3>
          <p className="text-xl mb-6 text-white/90">Fresh styles just dropped across all categories</p>
          <Link 
            to="/shop?filter=new-arrivals" 
            className="inline-flex items-center px-8 py-4 bg-white text-green-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop New Arrivals
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { categories };
export default Categories;