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
      // Mobile
      setVisibleCards(1);
    } else if (window.innerWidth <= 1024) {
      // Tablet
      setVisibleCards(2);
    } else {
      // Desktop
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
// lg:-mx-12 xl:-mx-2 sm:mx-20 
  return (
    // <div>
        <div className="  px-4   sm:px-6 lg:px-4 py-10">
    <div className=" flex justify-between items-center mb-8 lg:mb-2 -mt-16  lg:mt-0 lg:mx-6 px-4 sm:px-6 lg:px-10 py-10  ">
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
            className=" absolute left-1   top-40  sm:top-55 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-md shadow-lg  flex items-center justify-center"
          >
            <ChevronLeft 
             size={30}
            />
          </button>
        )}

        {/* Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:mx-12 gap-6 -mt-6 lg:mt-0 justify-center">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} type={type} />
          ))}
        </div>

        {/* Right Button */}
        {!showAll && !hideNavigation && (
          <button
            onClick={nextSlide}
            className=" absolute sm:right-1  right-0  top-40 sm:top-55 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-xs shadow-lg flex items-center justify-center"
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

