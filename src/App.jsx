import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Test } from "./components/test";
import QuikLinks from "./components/QuikLinks";
import BrowseCars from "./components/BrowseCars";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SellingVehicles from "./components/SellingVehicles";

function App(){
  return(
    <>
      <Navbar />
      {/* <Test/> */}
      <Hero />
      <QuikLinks/>
      <BrowseCars/>
     <ProductCard/>
     <ProductList/>
     <SellingVehicles/>
     </>
  )
}

export default App;
