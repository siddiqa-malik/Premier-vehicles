import FooterCarImg from "../assets/images/footerCarImg.png";

import {
  brands,
  models,
  cities,
  services,
} from "./footerData";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#404040] flex flex-col items-center text-white">

      {/* Main Container */}
      <div className="w-[90%] px-2 sm:px-4 py-14 ">

        <div className="w-full mx-auto px-4 py-14">

  {/* ================= TOP ================= */}

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">


    {/* ================= NEWSLETTER ================= */}

    <div className="order-1 col-span-2 lg:order-5 lg:col-span-1">

      <h3 className="font-semibold mb-4">
        Subscribe To Our Newsletter
      </h3>

      <div className="relative w-full">

        <input
          type="email"
          placeholder="name@email.com"
          className="w-full rounded-md px-3 py-3 text-black bg-white"
        />

        <button 
          className="absolute top-1 right-1 bottom-1 px-5 bg-[#FF5A2B] rounded-md text-sm"
        >
          Subscribe
        </button>

      </div>

    </div>



    {/* ================= BRANDS ================= */}

    <div className="order-2  lg:order-1">

      <h3 className="font-semibold mb-4">
        Cars By Brand
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">

        {brands.map((brand) => (

          <li key={brand}>

            <button className="hover:text-orange-500">
              {brand}
            </button>

          </li>

        ))}

      </ul>

    </div>




    {/* ================= MODELS ================= */}

    <div className="order-3 lg:order-2">

      <h3 className="font-semibold mb-4">
        Cars By Model
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">

        {models.map((model) => (

          <li key={model}>

            <button className="hover:text-orange-500">
              {model}
            </button>

          </li>

        ))}

      </ul>

    </div>




    {/* ================= CITIES ================= */}

    <div className="order-4 lg:order-3">

      <h3 className="font-semibold mb-4">
        Cars By City
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">

        {cities.map((city) => (

          <li key={city}>

            <button className="hover:text-orange-500">
              {city}
            </button>

          </li>

        ))}

      </ul>

    </div>




    {/* ================= CUSTOMER SERVICE ================= */}

    <div className="order-5 lg:order-4">

      <h3 className="font-semibold mb-4">
        Customer Service
      </h3>

      <ul className="space-y-2 text-sm text-gray-300">

        {services.map((service) => (

          <li key={service}>

            <button className="hover:text-orange-500">
              {service}
            </button>

          </li>

        ))}

      </ul>

    </div>


  </div>

</div>

        {/* ================= MIDDLE ================= */}

        <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Heading */}

          <div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">

              Find Your Ride

              <br />

              Or Sell It Fast

              <br />

              All In One Place.

            </h2>

          </div>

          {/* Car */}

          <div>

            <img
              src={FooterCarImg}
              alt="footer car"
              className="w-[500px] max-w-full"
            />

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-500 mt-10"></div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-6">

          <p className="text-sm text-gray-300">
            © All Rights Reserved. The Premier Vehicles
          </p>

          <div className="flex gap-4 mt-4 md:mt-0 mb-4 md:mb-0">

            < FaFacebookF size={18} />

            <  FaInstagram size={18} />

            < FaLinkedinIn size={18} />

            <FaLinkedin size={18} />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;