import React from 'react';
import { MapPin, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="w-[180px] sm:w-[430px] bg-white rounded-2xl shadow-sm border overflow-hidden border-gray-100  font-sans relative group select-none">


      
      {/* Upper Image Section */}
      <div className="relative h-[150px] sm:h-[270px] w-full overflow-hidden">
        <img 
          src={product.image} 
alt={`Car ${product.id}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        
        {/* Islamabad Location Tag */}
        <div className="absolute top-8 left-3 bg-white/90 backdrop-blur-sm px-1 sm:px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin size={15} sm:size={18} className="text-gray-800 " />
          <span className="text-xs sm:text-lg font-medium text-gray-800">Islamabad</span>
        </div>

        {/* Featured Tag */}
        <div className="hidden md:block absolute top-8 right-0 bg-[#FF5A2B] text-white px-3 py-1 rounded-l-md text-md font-bold tracking-wide shadow-sm uppercase">
          Featured
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 h-[140px] sm:h-[200px] flex flex-col justify-between">
        {/* Title & Heart Button */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-sm sm:text-xl font-medium text-gray-800 capitalize line-clamp-1">
            {product.title || 'Car Title'}
          </h3>

          <button className="text-gray-800 hover:text-red-500 transition-colors pt-0.5">
            <Heart size={20} sm:size={40} />
          </button>
        </div>

        {/* Price Tag */}
        <div className="text-md sm:text-lg sm:text-2xl font-bold text-gray-900 mb-3">
          PKR 40.3 lacs
        </div>

        {/* Static Specs Row */}
        <div className="flex items-center text-gray-700 text-xs sm:text-xl font-medium gap-2  pb-3 mb-3">
          <span>2017</span>
          <span className="text-gray-300">|</span>
          <span>33.9 km</span>
          <span className="text-gray-300">|</span>
          <span>Petrol</span>
        </div>

        {/* Time Stamp */}
        <div className="text-xs sm:text-md text-gray-400 font-normal">
          2 day ago
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

