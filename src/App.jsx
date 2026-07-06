import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Test } from "./components/test";
import QuikLinks from "./components/QuikLinks";
import BrowseCars from "./components/BrowseCars";

function App(){
  return(
    <>
      <Navbar />
      {/* <Test/> */}
      <Hero />
      <QuikLinks/>
      <BrowseCars/>
     </>
  )
}

export default App;
