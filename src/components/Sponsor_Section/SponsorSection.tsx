import { useContext } from "react";
import SponsorCard from "./SponsorCard";
import SponsorCardSmall from "./SponsorCardSmall";
import { DarkModeContext } from "../../context/DarkmodeContext";
import { motion } from "framer-motion";

function SponsorSection() {

  const { state } = useContext(DarkModeContext);

  return (
    <div className=" border-t border-transparent border-b px-6">
      <div
        className={`h-[1px] border-t ${
          state.isDarkMode ? "border-white/20" : " border-black/20"
        }  w-full absolute inset-x-0`}
      ></div>
      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        className="flex flex-col justify-center items-center mt-24 group duration-300 w-fit mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          className={`w-8 h-8 group-hover:stroke-rose-500 group-hover:animate-pulse ${
            state.isDarkMode ? "stroke-white/50" : " stroke-black/50"
          } `}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <p
          className={`${
            state.isDarkMode ? "text-white/60" : " text-black/60"
          }  font-semibold text-center max-w-xs mt-2 group-hover:text-rose-500/60`}
        >
          Vite is free and open source, made possible by wonderful sponsors.
        </p>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 gap-1 rounded-2xl overflow-hidden">
        <div
          className={`${
            state.isDarkMode ? "bg-dark_secondary" : " bg-light_secondary"
          } `}
        >
          <p
            className={`${
              state.isDarkMode ? "text-white/50" : " text-black/50"
            }  font-semibold leading-tight py-3`}
          >
            Platinum Sponsors
          </p>
        </div>

        <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3">
          <SponsorCard />
          <SponsorCard />
          <SponsorCard />
          <div className="hidden sm:max-md:flex">
            <SponsorCard />
          </div>
        </div>

        <div
          className={`${
            state.isDarkMode ? "bg-dark_secondary" : " bg-light_secondary"
          } `}
        >
          <p
            className={`${
              state.isDarkMode ? "text-white/50" : " text-black/50"
            } font-semibold leading-tight py-3`}
          >
            Gold Sponsors
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <SponsorCardSmall />
          <div className="hidden sm:max-lg:flex">
            <SponsorCardSmall />
          </div>
        </div>
      </div>
      <button
        className={`mb-24 text-sm ${
          state.isDarkMode
            ? "text-white/50 border-white/50"
            : " text-black/50 border-black/50"
        }  font-semibold mt-10 border  leading-tight px-5 py-2 rounded-full hover:border-rose-500 hover:text-rose-500 transition-all duration-200`}
      >
        Become a sponsor
      </button>
      <div
        className={`h-[1px] border-b ${
          state.isDarkMode ? "border-white/20" : " border-black/20"
        } w-full absolute inset-x-0`}
      ></div>
    </div>
  );
}
export default SponsorSection;
