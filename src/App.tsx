import { useContext, useEffect, useState } from 'react'
import './App.css'
import './components/HeroSection'
import HeroSection from './components/HeroSection'
import useWindowDimensions from './hook/useWindowDimensions'
import Navbar from './components/Navbar/Navbar'
import FeaturesSection from './components/Features_Section/FeaturesSection'
import SponsorSection from './components/Sponsor_Section/SponsorSection'
import Footer from './components/Footer'
import { DarkModeContext } from './context/DarkmodeContext'

function App() {
  const { state } = useContext(DarkModeContext);
  // Set background color for whole body
  useEffect(() => {
    if (state.isDarkMode) {
      document.body.style.background = "#242424";
    } else {
      document.body.style.background = "#ffffff";
    }
  }, [state.isDarkMode]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Track the window viewport width,
  // close the mobile nav menu if width is desktop size
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 1024) {
      setIsOpen(false);
    }
  }, [width])
  
  // Disable scrolling in the background when the mobile menu is open,
  // when a menu is open, set position: fixed on the body, and remove on close.
  return (
    <div className={`w-full ${isOpen && "fixed"}`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="px-6 lg:px-16 flex flex-col justify-center">
        <HeroSection />
        <FeaturesSection />
      </div>
      <SponsorSection />
      <Footer/>
    </div>
  );
}

export default App
