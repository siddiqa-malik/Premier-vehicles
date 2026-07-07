import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Test } from "./components/test";
import QuikLinks from "./components/QuikLinks";
import BrowseCars from "./components/BrowseCars";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

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
     </>
  )
}

export default App;
