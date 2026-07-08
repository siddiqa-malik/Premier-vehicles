import { ChevronRight, ChevronLeft } from "lucide-react";

function SellingVehicles() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Main Container Carousel Slider Box */}
      <div
        className="relative bg-[#1e5ae6] text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-[400px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-24 before:bg-white before:rounded-r-full before:z-10 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-12 after:h-24 after:bg-white after:rounded-l-full after:z-10"
      >
        <div className="relative">
          {/* Left Button */}
          <button
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-[#F3F9FB] shadow-lg flex items-center justify-center text-[#1e5ae6]"
          >
            <ChevronLeft size={30} color="#1e5ae6" />
          </button>

          <div className="flex flex-col justify-center max-w-xl z-0 space-y-4 md:space-y-6">

            <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
              Looking to Sell or Buy a Car?
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Premier Selling Cars
            </h2>

            <p className="text-sm md:text-base opacity-85 max-w-md">
              Get the best deals with secure transactions and hassle-free listings.
            </p>

            <div className="pt-2">
              <button className="bg-white text-[#1e5ae6] font-semibold px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 shadow-md text-sm md:text-base">
                Sell your car
              </button>
            </div>

            {/* Carousel Dots Indicator */}
            <div className="flex items-center space-x-1.5 pt-4">
              <span className="w-6 h-1.5 bg-white rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-white bg-opacity-50 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="relative mt-8 md:mt-0 w-full md:w-1/2 flex justify-center items-center h-64 md:h-80">
          {/* Car Image Background Box (Light Blue Border/Tint) */}
          <div className="absolute inset-0 border border-blue-400 border-opacity-40 bg-blue-400 bg-opacity-10 rounded-lg pointer-events-none"></div>

          {/* Car Image */}
          <img
            src="https://unsplash.com"
            alt="Chevrolet Captiva SUV"
            className="relative z-10 max-h-full object-contain max-w-[90%] drop-shadow-2xl"
          />
        </div>
        
      </div>
      <button
            className="hidden md:flex absolute right-6 top-40 -translate-y-1/2 z-10 w-15 h-15 rounded-full bg-[#F3F9FB] shadow-lg flex items-center justify-center text-[#1e5ae6]"
          >
            <ChevronRight size={30} color="#1e5ae6" />
          </button>
    </div>
  );
}

export default SellingVehicles;

