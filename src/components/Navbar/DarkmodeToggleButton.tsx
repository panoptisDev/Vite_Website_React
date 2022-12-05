import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";

function DarkmodeToggleButton() {
  const { state, dispatch } = useContext(DarkModeContext);

    function toggleDarkMode() {
      dispatch({ type: "TOGGLE_DARKMODE" });
      console.log(state.isDarkMode);
      
    }

    function DarkLightIcon() {
        if (!state.isDarkMode) {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-3 h-3 stroke-black/90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            );
        }
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-3 h-3 stroke-white/90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        );
    }

  return (
    <button
      className={`${
        state.isDarkMode
          ? "border-white/10 hover:border-white/60 bg-[#3A3A3A]"
          : "border-black/30 hover:border-black/60 bg-gray-100"
      } relative w-10 h-6 px-[1px] border  rounded-full  flex items-center transition-all duration-200 shadow-2xl` }
      onClick={toggleDarkMode}
    >
      <div
        className={`${
          state.isDarkMode
            ? "bg-black translate-x-4"
            : "bg-white/90 translate-x-0"
        } absolute top-[1px] w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all duration-200 ease-in-out`}
      >
        {DarkLightIcon()}
      </div>
    </button>
  );
}
export default DarkmodeToggleButton