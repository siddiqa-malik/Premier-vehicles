import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = ({title,products}) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
    <div className="sm:mx-14 px-4 sm:px-6 lg:px-25 py-10">
    <div className=" flex justify-between items-center mb-8  ">
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
        {!showAll && (
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-[-20px] top-65 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-md shadow-lg  flex items-center justify-center"
          >
            <ChevronLeft 
             size={30}
            />
          </button>
        )}

        {/* Cards */}
        <div className="flex justify-center gap-6 flex-wrap ">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product}  />
          ))}
        </div>

        {/* Right Button */}
        {!showAll && (
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-[-20px]  top-65 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-xs shadow-lg flex items-center justify-center"
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

