import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = ({title,products , type}) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const hideNavigation = type === "toyota";

 useEffect(() => {

  const updateCards = () => {

    if (window.innerWidth < 768) {
      setVisibleCards(1);
    } 
    else {
      setVisibleCards(4);
    }

  };

  updateCards();

  window.addEventListener("resize", updateCards);

  return () => window.removeEventListener("resize", updateCards);

}, []);

  const displayedProducts = showAll
    ? products
    : products.slice(startIndex, startIndex + visibleCards);

  const nextSlide = () => {
    if (startIndex + visibleCards < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="mx-2 sm:mx-20 md:mx-2 lg:mx-3 px-4   sm:px-6 lg:px-8 py-10">
    <div className=" flex justify-between items-center mb-8 -mt-16 lg:mt-0 lg:mx-20 px-4 sm:px-6 lg:px-10 py-10  ">
        <h2 className="text:xl sm:text-4xl mb-[-25px] sm:mb-0 font-medium">{title}</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 mb-[-25px] sm:mb-0 text-sm sm:text-xl text-blue-600 font-medium hover:gap-2 transition-all"
        >
          {showAll ? "Show Less" : "View All"}
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="relative">
        {/* Left Button */}
        {!showAll && !hideNavigation && (
          <button
            onClick={prevSlide}
            className=" absolute left-1    lg:mx-20 top-40  sm:top-55 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-md shadow-lg  flex items-center justify-center"
          >
            <ChevronLeft 
             size={30}
            />
          </button>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:mx-28 gap-6 -mt-6 lg:mt-0 justify-items-center">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} type={type} />
          ))}
        </div>

        {/* Right Button */}
        {!showAll && !hideNavigation && (
          <button
            onClick={nextSlide}
            className=" absolute sm:right-1  right-0 lg:mx-20 top-40 sm:top-55 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-xs shadow-lg flex items-center justify-center"
          >
            <ChevronRight
            size={30}  
        
             />
          </button>
        )}
      </div>

        
    </div>
  );
};

export default ProductList;

