import { ChevronRight, ChevronLeft } from "lucide-react";


function SellingVehicles({
  title,
  subtitle,
  description,
  buttonText,
  vehicleImage,
  bgImage,
  bgColor = "#1e5ae6",}) {
  return (
    <div className=" sm:top-0 px-4 sm:px-6 lg:px-18 py-10">
      {/* Main Container Carousel Slider Box */}
      <div className="   flex flex-col-reverse  w-full relative bg-[#1e5ae6] text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between min-h-[500px] sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:w-12 sm:before:h-24 sm:before:bg-white sm:before:rounded-r-full sm:before:z-10 sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:w-12 sm:after:h-24 after:bg-white after:rounded-l-full after:z-10">
        
        {/* Left Button - Exact center of the left white semi-circle */}
        <button className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white shadow-lg items-center justify-center text-[#1e5ae6] hover:bg-gray-100 transition-all duration-200">
          <ChevronLeft size={28} color="#1e5ae6" />
        </button>

        {/* Right Button - Exact center of the right white semi-circle */}
        <button className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full bg-white shadow-lg items-center justify-center text-[#1e5ae6] hover:bg-gray-100 transition-all duration-200">
          <ChevronRight size={28} color="#1e5ae6" />
        </button>

        {/* Left Content Area */}
        <div className=" relative z-0 sm:ml-2 lg:ml-10">
          <div className="flex flex-col justify-center items-center sm:items-start max-w-xl space-y-4 md:space-y-6">
            <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h2>
            <p className="text-center sm:text-left text-sm md:text-base opacity-85 max-w-lg">
              {description}
            </p>
            <div className="pt-2">
              <button className="bg-white text-[#1e5ae6] font-semibold sm:px-4 sm:py-2 lg:px-8 lg:py-3 rounded-md hover:bg-gray-200 transition-all duration-200 shadow-md text-sm md:text-base">
                {buttonText}
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
        <div className=" relative mt-8 md:mt-0 w-full md:w-1/2 flex justify-center items-center h-70 md:h-90 ">
          <img
            src={bgImage}
            alt="Car Background Circle"
            className="hidden md:block absolute z-0 object-contain  lg:h-[545px] lg:w-[545px]"
          />
          {/* Car Image */}
          <img
            src={vehicleImage}
            alt="Chevrolet Captiva SUV"
            className="relative z-10 max-h-full object-contain max-w-[99%] drop-shadow-2xl"
          />
        </div>

      </div>
    </div>


    
  );
}

export default SellingVehicles;
