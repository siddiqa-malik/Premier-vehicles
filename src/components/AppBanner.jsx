import React from "react";
import googlePlay from "../assets/images/google-play.png";
import AppStore from "../assets/images/app-store.png"
import mobile from "../assets/images/mobile.png"


function AppBanner (){
return(
<section className="px-4 mx-6 lg:mx-8 xl:mx-28 -mt-10 lg:mt-15 sm:px-6 lg:px-10 py-24">
  <div className=" relative w-full ">

    {/* Blue Background */}
<div className="bg-[#2456D3]  rounded-3xl h-[800px] md:h-[900px] lg:h-[460px] flex flex-col item-center lg:flex-row lg:items-center">
      {/* Left Content */}
<div className="w-full  lg:w-1/2 px-8 lg:px-12 text-white py-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left">
          Browse, Sell & Buy on the Go
        </h2>

        <p className="mt-5 text-md  text-center lg:text-left sm:text-lg text-white/90">
          Instant Notifications, Easy Listing, 24/7 Support
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center lg:justify-start">

          <img
            src={AppStore}
            alt="AppStore"
            className=" w-60 h-15 cursor-pointer"
          />

          <img
            src={googlePlay}
            alt="googlePlay"
            className="w-60 h-15 cursor-pointer"
          />

        </div>
        
    {/* Mobile Image */}
<div className="hidden lg:block absolute z-20 right-20 -top-55">
  <img
    src={mobile}
    alt="mobile"
    className="w-[600px]"
  />
</div>


<div className="flex justify-center lg:hidden -mb-10 -ml-24 md:-mt-5">
  <img
    src={mobile}
    alt="mobile"
    // className="w-[550px] "
  />
</div>
      </div>

    </div>

  </div>
</section>)}

export default AppBanner;