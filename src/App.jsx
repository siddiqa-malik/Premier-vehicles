import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Test } from "./components/test";
import QuikLinks from "./components/QuikLinks";
import BrowseCars from "./components/BrowseCars";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SellingVehicles from "./components/SellingVehicles";
import { cars, bikes, carBanner, bikeBanner, AutoParts, reviewCar, toyota } from "./components/ProductsData"
import WhyChooseSection from "./components/WhyChooseSection"
import InfoCard from "./components/InfoCard"
import FuelPriceSection  from "./components/FuelPriceSection"
import FuelCard from "./components/FuelCard"
import Footer from "./components/Footer"

function App(){
  return(
    <>
      <Navbar />
      {/* <Test/> */}
      <Hero />
      <QuikLinks/>
      <BrowseCars/>
   <ProductList
  title="Featured Cars"
  products={cars}
  type="car"
/>

<div className="block md:hidden">
  <ProductList
    title="Recently added"
    products={cars}
    type="car"
  />
</div>

<SellingVehicles {...carBanner} />

<div className="hidden md:block">
  <ProductList
    title="Featured Bikes"
    products={bikes}
    type="bike"
  />
</div>

<div className="hidden md:block">
  <SellingVehicles {...bikeBanner} />
</div>

<ProductList
  title="Recent Auto Parts"
  products={AutoParts}
  type="autopart"
/>

<div className="hidden md:block">
 <WhyChooseSection />
</div>
 <ProductList
  title="Popular Reviewed Cars"
  products={reviewCar}
  type="review"
/>
<div className="block md:hidden">
<FuelPriceSection />
</div>


 <ProductList
  title="Toyota"
  products={toyota}
  type="toyota"
/>

<Footer/>
     </>
  )
}

export default App;
