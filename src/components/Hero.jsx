import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "../assets/images/hero.png";

export const Hero = () => {
  const handleShopClick = () => {
    console.log("Shop button clicked");
  };

  const handleLookbookClick = () => {
    console.log("Lookbook button clicked");
  };

  return (
    <section className="relative w-full min-h-[889px] sm:min-h-[1126px] lg:h-[80vh] flex items-center overflow-hidden ">
      
      {/* Hero background image with parallax feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="premier vehicles essentials hero layout" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-600/20"></div>
        
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w- mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center items-center min-h-[889px] sm:min-h-[1126px] lg:h-[80vh]">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Find New & Used Cars
 <br />
           in Pakistan.
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-normal text-slate-200/90 leading-relaxed max-w-lg">
           Find information about the latest cars in the market.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={handleShopClick}
              className="bg-[#2563eb] text-white px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide hover:bg-[#004ac6] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              Shop Now 
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleLookbookClick}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
