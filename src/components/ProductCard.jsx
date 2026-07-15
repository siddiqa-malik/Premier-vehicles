import React from 'react';
import { MapPin, Heart, PlayCircle } from 'lucide-react';


const ProductCard = ({ product , type }) => {
  if (!product) return null;

  return (
    <div className="w-[334px] lg:w-full  bg-[#F8FAFC] rounded-2xl shadow-sm border overflow-hidden border-gray-100 font-sans relative group select-none">
    
      


      

      {/* Upper Image Section */}
      <div className="relative h-[180px] sm:h-[270px] lg:h-[230px]   overflow-hidden">
        <img
  src={product.image}
  alt={product.title}
  className={`
    transition-transform duration-300 w-[400px] group-hover:scale-105
    ${
      type === "review"
        ? " sm:w-[95%] h-[88%]  object-contain mx-auto mt-4 lg:mt-0"
        : " lg:w-full h-full object-cover"
    }
  `}
/>

        {type === "toyota" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="rounded-full bg-black/90 p-2 shadow-md">
              <PlayCircle size={28} className="text-white" />
            </div>
          </div>
        )}

        
        {/* Islamabad Location Tag */}
        <div >
          {product.location && (
        <div className="absolute top-8 left-3 bg-white/90 backdrop-blur-sm px-1 sm:px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin size={16} className="text-gray-800" />
          <span className="text-xs sm:text-lg font-medium text-gray-800">islamabad</span>
        </div>)}</div>

        {/* Featured Tag */}
        <div >
          {product.featured && (
    <div  className="hidden md:block absolute top-8 right-0 bg-[#FF5A2B] text-white px-3 py-1 rounded-l-md text-md font-bold tracking-wide shadow-sm uppercase">

        Featured
    </div>
)}
        </div>
      </div>

      {/* Content Section */}
<div
  className={`
    p-4 bg-[#F8FAFC] flex flex-col justify-between
    ${
      type === "review"
        ? "h-[100px] sm:h-[120px] lg:-mt-8"
        : type === "toyota"
        ? "h-[90px] sm:h-[110px] -mt-8"
        : "h-[140px] sm:h-[200px] lg:h-[170px]"
    }
  `}
>        {/* Title & Heart Button */}
        
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm sm:text-xl font-medium text-gray-800 capitalize line-clamp-1 mb-4">
            {product.title}
          </h3>
{type === "car" || type === "bike" || type === "autopart" &&( 
          <button className="text-gray-800 hover:text-red-500 transition-colors pt-0.5">
            <Heart size={24} />
          </button>)}
        </div>

       {/* Dynamic Content */}

{type === "car" && (
  <>
    <div className="text-md sm:text-2xl font-bold text-gray-900">
      {product.price}
    </div>

    <div className="flex items-center text-gray-700 text-xs sm:text-xl font-medium gap-2">
      {product.specs.map((spec, index) => (
        <React.Fragment key={index}>
          <span>{spec}</span>

          {index !== product.specs.length - 1 && (
            <span className="text-gray-300">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </>
)}

{type === "bike" && (
  <>
    <div className="text-md sm:text-2xl font-bold text-gray-900">
      {product.price}
    </div>

    <div className="flex items-center text-gray-700 text-xs sm:text-xl font-medium gap-2">
      {product.specs.map((spec, index) => (
        <React.Fragment key={index}>
          <span>{spec}</span>

          {index !== product.specs.length - 1 && (
            <span className="text-gray-300">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
    
    

    <div className="text-xs sm:text-md text-gray-400 font-normal">
      {product.time}
    </div>
  </>
)}

{type === "review" && (
  <>
    <div className="flex items-center gap-1 text-yellow-500">
      {"★".repeat(product.rating)}
    </div>

    <div className="text-sm sm:text-lg text-gray-600">
      {product.reviews} Reviews
    </div>
  </>
)}

{type === "autopart" && (
  <>
    <div className="text-md sm:text-2xl font-bold text-gray-900">
      {product.price}
    </div>

    <div className="text-xs sm:text-md text-gray-400 font-normal">
      {product.time}
    </div>
  </>
)}

{type === "toyota" && (
    <>
      <p className="text-gray-700 text-sm">
        {product.description}
      </p>
    </>
  )}
      </div>
    
        </div>

        
  );
};

export default ProductCard;

