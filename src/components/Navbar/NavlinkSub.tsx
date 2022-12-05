import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";

interface NavlinkProps {
  isExtend: boolean;
  setIsExtend: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavlinkSub({isExtend, setIsExtend} : NavlinkProps) {

  const { state } = useContext(DarkModeContext);

    function toggleExtend() {
        setIsExtend(prev => !prev)
    }

  return (
    <li
      className={`py-3 border-b ${
        state.isDarkMode ? "border-white/10" : " border-black/10"
      } `}
    >
      <div
        className="flex justify-between items-center group cursor-pointer"
        onClick={toggleExtend}
      >
        <p
          className={`group-hover:text-sky-500 transition-all duration-200 ${
            isExtend && "text-sky-500"
          }`}
        >
          Resources
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          className={`w-5 h-5 ${state.isDarkMode ? "stroke-white/70" : "stroke-black/50"}  ${
            isExtend ? "rotate-45" : "rotate-0"
          } transition-all duration-200`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
      <ul
        className={`flex flex-col py-2 ${
          isExtend ? " " : "hidden"
        } transition-all duration-200`}
      >
        <a
          href=""
          className="ml-3 font-normal py-1 hover:text-sky-300 transition-all duration-200"
        >
          Team
        </a>
        <a
          href=""
          className="ml-3 font-normal py-1 hover:text-sky-300 transition-all duration-200"
        >
          Twitter
        </a>
        <a
          href=""
          className="ml-3 font-normal py-1 hover:text-sky-300 transition-all duration-200"
        >
          Awesome
        </a>
        <a
          href=""
          className="ml-3 font-normal py-1 hover:text-sky-300 transition-all duration-200"
        >
          Honor
        </a>
        <a
          href=""
          className="ml-3 font-normal py-1 hover:text-sky-300 transition-all duration-200"
        >
          Leaders
        </a>
      </ul>
    </li>
  );
}
export default NavlinkSub