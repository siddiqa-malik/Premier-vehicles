import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Test } from "./components/test";
import QuikLinks from "./components/QuikLinks";
import BrowseCars from "./components/BrowseCars";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SellingVehicles from "./components/SellingVehicles";
import {cars , bikes , carBanner, bikeBanner, AutoParts} from "./components/ProductsData"

function App(){
  return(
    <>
      <Navbar />
      {/* <Test/> */}
      <Hero />
      <QuikLinks/>
      <BrowseCars/>
     <ProductCard/>
     <ProductList
    title="Featured Cars"
    products={cars}
/>
<div className="block md:hidden">
<ProductList
    title="Recently added"
    products={cars}
    
    
/></div>

     <SellingVehicles {...carBanner} />

     <div className="hidden md:block">
<ProductList
    title="Featured Bikes"
    products={bikes}
/></div>
<div className="hidden md:block">
<SellingVehicles {...bikeBanner} /></div>
<ProductList
    title="Featured Cars"
    products={AutoParts}
/>


     </>
  )
}

export default App;
