'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { useState , useEffect } from "react";
import Services from "./components/Services";
import Rem from "./components/Rem";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
export default function Home() {
  const [isDarkMode, setisDarkMode] = useState(true);
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setisDarkMode(true);
    } else {
      setisDarkMode(false);
    }
    
  
   
  }, [])
  
  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    } else{
      document.documentElement.classList.remove('dark')
      localStorage.theme=''

    }
  }, [isDarkMode])
  

  return (
   <>
   <Navbar isDarkMode={isDarkMode} setisDarkMode={setisDarkMode}/>
   <Header  isDarkMode={isDarkMode} />

   <About isDarkMode={isDarkMode}/>
   <Services isDarkMode={isDarkMode}/>
   <Work isDarkMode={isDarkMode}/>
   <Rem isDarkMode={isDarkMode}/>
   <Contact isDarkMode={isDarkMode}/>
   <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
