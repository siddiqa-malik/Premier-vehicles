import { useMemo, useState } from "react";

import carlogo1 from "../assets/images/carLogo1.png";
import carlogo2 from "../assets/images/carlogo2.png";
import carlogo3 from "../assets/images/carlogo3.png";
import carlogo4 from "../assets/images/carlogo4.png";
import carlogo5 from "../assets/images/carlogo5.png";
import carlogo6 from "../assets/images/carlogo6.png";
import carlogo7 from "../assets/images/carlogo7.png";
import carlogo8 from "../assets/images/carlogo8.png";
import carlogo9 from "../assets/images/carlogo9.png";
import carlogo10 from "../assets/images/carlogo10.png";
import carlogo11 from "../assets/images/carlogo11.png";
import carlogo12 from "../assets/images/carlogo12.png";
import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import cat4 from "../assets/images/cat4.png";
import cat5 from "../assets/images/cat5.png";
import cat6 from "../assets/images/cat6.png";
import cat7 from "../assets/images/cat7.png";
import cat8 from "../assets/images/cat8.png";

function BrowseCars() {
  // Category labels
  const categoriesList = ["Brand", "Categories", "Model", "Cities", "Year"];

  // Default: show all products
  const [selectedCategory, setSelectedCategory] = useState("Brand");

  
  const products = useMemo(
    () => [
      { id: 1, category: "Brand", image: carlogo1 },
      { id: 2, category: "Brand", image: carlogo2 },
      { id: 3, category: "Categories", image: cat1 },
      { id: 4, category: "Categories", image: cat2 },
      { id: 5, category: "Brand", image: carlogo3 },
      { id: 6, category: "Brand", image: carlogo4 },
      { id: 7, category: "Categories", image: cat3 },
      { id: 8, category: "Categories", image: cat4 },
      { id: 9, category: "Categories", image: cat5 },
      { id: 10, category: "Categories", image: cat6 },
      { id: 11, category: "Brand", image: carlogo5 },
      { id: 12, category: "Brand", image: carlogo6 },
      { id: 13, category: "Categories", image: cat7 },
      { id: 14, category: "Categories", image: cat8 },
      { id: 15, category: "Brand", image: carlogo7 },
      { id: 16, category: "Brand", image: carlogo8 },
      { id: 17, category: "Brand", image: carlogo9 },
      { id: 18, category: "Brand", image: carlogo10 },
      { id: 19, category: "Brand", image: carlogo11 },
      { id: 20, category: "Brand", image: carlogo12 },
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="browse-cars-container mx-2 sm:mx-14 px-4 sm:px-6 lg:px-25 py-10">
      {/* 1) Browse text first */}
      <p className="hidden md:flex text-4xl font-medium text-slate-900 mb-7">Browse Cars</p>

      {/* 2) categoriesList */}
      <div className="flex flex-wrap gap-8 mb-10">
        {categoriesList.map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                "pb-3 text-sm font-semibold tracking-wide capitalize transition-colors cursor-pointer " +
                (isActive
                  ? "text-[#2563eb] border-b-4 border-[#2563eb]"
                  : "text-black/60 hover:text-black border-b-4 border-transparent")
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3) products shown only for active category */}
      <div className="grid grid-cols-3  sm:grid-cols-6 gap-4 sm:gap-8">
        {filteredProducts.map((p) => (
          <div key={p.id} className="flex items-center justify-center">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* 2 rows on desktop by content (6 per row via sm:grid-cols-6). */}
    </div>
  );
}

export default BrowseCars;

