import { ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/images/hero.png";
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import PlaylistCard from "../assets/images/playlistCard.png";
import NewsCard from "../assets/images/newsCard.png";
import LocationCard from "../assets/images/locationCard.png";

export const Hero = () => {
  

  

  return (
    <section className="relative w-full sm:min-h-[889px] min-h-[1126px] lg:h-[80vh] pt-30 flex items-center overflow-hidden mb-5 ">
      
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
      <div className="relative z-10 w-full max-w-5x1 mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center items-center ">
        <div className="relative  w-full max-w-5xl mx-auto text-center flex flex-col justify-center items-center sm:items-start gap-10 mb-5 sm:mb-15 lg:mb-15">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Find New & Used Cars
 <br />
          <span className="block text-left">in Pakistan.</span> 
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-normal  leading-relaxed max-w-lg">
           <span className="block text-left">Find information about the latest cars in the market.</span>
          </p>
</div>      
      
      
       



        {/* Search Bar Wrapper */}
        <div className="hidden md:flex w-full bg-white p-2 rounded-xl shadow-xl flex-row items-center gap-3">

           {/* Filter Toggle Icon */}
            <button 
             
              className="p-3.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 hover:text-orange-600 transition flex-shrink-0"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          
          {/* Make/Model Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="Make & Model"
              className="w-full bg-gray-50 text-gray-800   pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Cities Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="City"
              className="w-full bg-gray-50 text-gray-800 pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Price Range Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="Price Range"
              className="w-full bg-gray-50 text-gray-800 pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto">
           

            {/* Main Search Button */}
            <button className="flex items-center justify-center gap-2 px-3.5 py-3.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition w-full md:w-auto font-semibold">
              <Search className="w-5 h-5"></Search>
            </button>
          </div></div>  </div>

            

          
  {/* Search Bar Wrapper */}
        <div className="md:hidden w-[92vw] max-w-md bg-white py-5 px-4 mt-3 mb-3 rounded-xl shadow-xl flex flex-col items-center gap-2">

          
          
          {/* Make/Model Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="Make & Model"
              className="w-full bg-gray-50 text-gray-800 pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Cities Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="City"
              className="w-full bg-gray-50 text-gray-800 pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Price Range Input */}
          <div className="relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="Price Range"
              className="w-full bg-gray-50 text-gray-800 pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition cursor-pointer font-medium appearance-none" 
            />
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto">
           
            {/* Filter Toggle Icon */}
            <button 
             
              className="p-3.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 hover:text-orange-600 transition flex-shrink-0"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 w-full mt-4">
            {/* Main Search Button */}
            <button className="flex items-center justify-center gap-2 px-3.5 py-3.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition w-full md:w-auto font-semibold">
              <Search className="w-5 h-5"></Search>
            </button>
           </div>
          </div></div>
    <div className="flex items-center gap-6 w-full md:w-auto mb-10 sm:mb-0 md:flex-row md:flex-wrap md:justify-center
 flex-col mt-4">
            <img src={PlaylistCard} alt="PlayList" className="w-90 sm:w-110 md:w-auto" />
            <img src={NewsCard} alt="News" className="w-90 sm:w-110 md:w-auto" />
            <img src={LocationCard} alt="Location" className="w-90 sm:w-110 md:w-auto" /></div>
    


    
    </div>
       
     
    </section>
  );
};
