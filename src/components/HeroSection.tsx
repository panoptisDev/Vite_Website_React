import { useContext } from 'react';
import logo from '../assets/icon/logo.svg'
import { DarkModeContext } from '../context/DarkmodeContext';
import { motion } from "framer-motion";

function HeroSection() {
  const { state } = useContext(DarkModeContext);

  

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:w-10/12 justify-end items-center pt-16 lg:pt-36 pb-12">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="mb-12 relative  lg:mb-0 flex justify-center lg:justify-center duration-700">
        <img className="w-44 sm:w-48 lg:w-80" src="../assets/icon/logo-with-shadow.png" alt="vite logo" />
        <div className=" -top-8 -right-8 lg:-top-14 lg:inset-x-auto absolute w-60 h-60 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 -z-20 rounded-full blur-3xl"></div>
      </motion.div>
      <div className="sm:w-4/5 sm:px-8 lg:w-fit lg:mr-32 lg:px-0 lg:text-left container flex flex-col items-center lg:items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-600 w-fit">
          Vite
        </h1>
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            state.isDarkMode ? "text-white/90" : "text-midnight"
          }  mt-1 max-w-lg`}
        >
          Next Generation Frontend Tooling
        </h2>
        <p
          className={`text-lg sm:text-xl lg:text-2xl ${
            state.isDarkMode ? "text-white/50" : "text-midnight/50"
          }  lg:text-semibold mt-2 lg:mt-4 max-w-xl`}
        >
          Get ready for a development environment that can finally catch up with
          you.
        </p>

        <div className="mt-3 lg:mt-6 flex gap-5 flex-wrap">
          <button className="rounded-full bg-indigo-500 leading-tight px-6 font-semibold text-white/80 text-base py-3 hover:brightness-125 active:brightness-90 transition-all duration-200">
            Get Started
          </button>
          <button
            className={`rounded-full ${
              state.isDarkMode
                ? "bg-[#3A3A3A] text-white/80 hover:brightness-125 border-white/10 active:brightness-90"
                : "bg-light_secondary text-midnight hover:brightness-90 border-black/10 active:brightness-75"
            }  border  leading-tight px-6 font-semibold text-base py-3   transition-all duration-200`}
          >
            Why Vite?
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection