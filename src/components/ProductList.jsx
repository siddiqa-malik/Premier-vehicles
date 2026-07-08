import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import cars from "../components/ProductsData";
import ProductCard from "./ProductCard";

const ProductList = () => {
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

  const displayedCars = showAll
    ? cars
    : cars.slice(startIndex, startIndex + visibleCards);

  const nextSlide = () => {
    if (startIndex + visibleCards < cars.length) {
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
        <h2 className="text:xl sm:text-4xl mb-[-25px] sm:mb-0 font-medium">Featured cars</h2>

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
          {displayedCars.map((car) => (
            <ProductCard key={car.id} product={car} />
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

        < div className="block md:hidden sm:mx-14  mb-8 sm:px-6 lg:px-25 py-10">
        
       <div className=" flex justify-between items-center mb-8  ">
        <h2 className="text-xl sm:text-4xl mb-[-25px] sm:mb-0 font-medium">Recently added</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 mb-[-25px] text-sm sm:text-xl sm:mb-0 text-blue-600 font-medium hover:gap-2 transition-all"
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
            className="hidden md:flex absolute  top-65 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-md shadow-lg  flex items-center justify-center"
          >
            <ChevronLeft 
             size={30}
            />
          </button>
        )}

        {/* Cards */}
        <div className="flex justify-center gap-6 flex-wrap ">
          {displayedCars.map((car) => (
            <ProductCard key={car.id} product={car} />
          ))}
        </div>

        {/* Right Button */}
        {!showAll && (
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 sm:right-35 top-65 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-white/40 backdrop-blur-xs shadow-lg flex items-center justify-center"
          >
            <ChevronRight
            size={30}  
        
             />
          </button>
        )}
      </div></div>
    </div>
  );
};

export default ProductList;

