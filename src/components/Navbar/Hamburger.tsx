import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";


interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSubExtend: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hamburger({ isOpen, setIsOpen, setSubExtend }: HamburgerProps) {
  
  const { state } = useContext(DarkModeContext);

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
      setSubExtend(false);
    } else {
      setIsOpen(true);
    }
  }

  function menuIcon() {
    return (
      <div className="h-6 w-6 flex items-center justify-center">
        <button
          className="flex flex-col justify-between items-end w-4 h-4 group"
          onClick={handleClick}
        >
          <span
            className={`${
              isOpen
                ? "translate-y-[6px] h-1/6  w-full rotate-[-225deg] group-hover:opacity-50 transition-all duration-300 ease-in-out"
                : "h-1/6 w-full group-hover:w-2/3 transition-all duration-200"
            } ${state.isDarkMode ? "bg-white/90" : "bg-black/90"}`}
          ></span>
          <span
            className={`${
              isOpen && "opacity-0 transition-all duration-300"
            } h-1/6 ${
              state.isDarkMode ? "bg-white/90" : "bg-black/90"
            }  w-1/2 group-hover:w-full transition-all duration-200`}
          ></span>
          <span
            className={`${
              isOpen
                ? "translate-y-[-7px] h-1/6  w-full rotate-[225deg] group-hover:opacity-50 transition-all duration-300 ease-in-out"
                : "h-1/6 w-2/3 group-hover:w-1/2 transition-all duration-200"
            } ${state.isDarkMode ? "bg-white/90" : "bg-black/90"}`}
          ></span>
        </button>
      </div>
    );
  }
  

  return (
    <>
      {menuIcon()}
    </>
  );
}
export default Hamburger;
