import React,{useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";


//Screens import
import Home from "./Screens/Home";
import About from "./Screens/About";
import Services from "./Screens/Services";
import Contact from "./Screens/Contact";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
      <div>
        <Navbar   isTopOfPage={isTopOfPage} />

        <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/"  element={<Contact />}/>
            <Route path="/"  element={<Services />}/>
        </Routes>
        <Footer />
      </div>

  )
};

export default App;
