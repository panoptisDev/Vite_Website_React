import { useContext, useState } from "react";
import logo from "../../assets/icon/logo.svg";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import Hamburger from "./Hamburger";
import NavlinkSub from "./NavlinkSub";
import { DarkModeContext } from "../../context/DarkmodeContext";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({isOpen, setIsOpen} : NavbarProps) {
  const [subIsExtend, setSubIsExtend] = useState<boolean>(false);
  const { state } = useContext(DarkModeContext);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`px-6 md:px-10  h-16 md:h-20 w-full border-b ${
          state.isDarkMode
            ? "border-white/10 bg-dark_primary/30"
            : "border-black/10 bg-white/30"
        }  lg:border-0 flex justify-between items-center backdrop-blur-lg lg:fixed lg:top-0 lg:inset-x-0 z-50`}
      >
        <div className="flex justify-between w-full max-w-[1600px] mx-auto">
          <div className="flex items-center hover:opacity-50 transition-all duration-200 cursor-pointer w-1/5">
            {/* Logo */}
            <a className="mr-2 shrink-0" href="#" target="_blank">
              <img src={logo} className="w-8" alt="Vite logo" />
            </a>
            <p
              className={`font-bold text-xl ${
                state.isDarkMode ? "text-white/90" : "text-midnight"
              }`}
            >
              Vite
            </p>
          </div>

          {/* Desktop Nav */}
          <div
            className={`${
              state.isDarkMode ? "text-white/90" : "text-midnight"
            } font-semibold text-left max-lg:hidden flex h-full`}
          >
            <div className="flex items-center">
              <a className="nav_item " href="#">
                Guide
              </a>
            </div>
            <div className="flex items-center">
              <a className="nav_item" href="#">
                Config
              </a>
            </div>
            <div className="flex items-center">
              <a className="nav_item" href="#">
                Plugins
              </a>
            </div>
            <div className="flex items-center relative">
              <p className="nav_item peer ">
                Resources
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-3 h-3 inline ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </p>

              <div
                className={`${
                  state.isDarkMode
                    ? "border-white/10 bg-dark_primary"
                    : "border-black/10 bg-white"
                } px-2 py-3 absolute top-16 right-1 border  rounded-xl hidden peer-hover:flex hover:flex transition-all duration-500 w-40 flex-col  drop-shadow-lg z-30`}
              >
                <a
                  className={`py-2 px-3 mb-1 rounded-md ${
                    state.isDarkMode
                      ? "text-white/80 hover:bg-dark_secondary"
                      : "text-midnight hover:bg-gray-100"
                  }  hover:text-sky-500 text-sm `}
                  href="#"
                >
                  About Us
                </a>
                <a
                  className={`py-2 px-3 mb-1 rounded-md ${
                    state.isDarkMode
                      ? "text-white/80 hover:bg-dark_secondary"
                      : "text-midnight hover:bg-gray-100"
                  }  hover:text-sky-500 text-sm `}
                  href="#"
                >
                  Contact Us
                </a>
                <a
                  className={`py-2 px-3 mb-1 rounded-md ${
                    state.isDarkMode
                      ? "text-white/80 hover:bg-dark_secondary"
                      : "text-midnight hover:bg-gray-100"
                  }  hover:text-sky-500 text-sm `}
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a className="nav_item" href="">
                Version
              </a>
            </div>
            <div className="py-6 pl-4 flex items-center">
              <DarkmodeToggleButton />
            </div>
          </div>
        </div>

        {/* for small screen */}
        <div className="flex justify-end items-center w-4/5 lg:hidden">
          {/* Search Icon   */}
          <button className="mr-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // use "fill-current" in class to control the svg color with text-color
              className={`fill-current ${
                state.isDarkMode ? "text-white/90" : "text-black/90"
              }  w-6 h-6`}
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </button>

          <Hamburger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSubExtend={setSubIsExtend}
          />
        </div>
      </div>

      {/* Mobile Nav Dropdown Menu */}
      <div
        className={`${
          isOpen ? "opacity-100 h-screen" : "opacity-0 invisible h-0"
        }  px-8 ${
          state.isDarkMode ? "bg-dark_primary " : "bg-white"
        } transition-all duration-500 ease-in-out inset-x-0 z-40 fixed overflow-hidden `}
      >
        <div className="pt-6 pb-24 w-72 mx-auto">
          <ul
            className={`${
              state.isDarkMode ? "text-white/90" : " text-midnight"
            }  font-semibold text-left`}
          >
            <li
              className={`py-3 border-b ${
                state.isDarkMode ? "border-white/10" : "border-black/10"
              } `}
            >
              <a
                className="hover:text-sky-500 transition-all duration-200 block"
                href="#"
              >
                Guide
              </a>
            </li>
            <li
              className={`py-3 border-b ${
                state.isDarkMode ? "border-white/10" : "border-black/10"
              } `}
            >
              <a
                className="hover:text-sky-500 transition-all duration-200 block"
                href="#"
              >
                Config
              </a>
            </li>
            <li
              className={`py-3 border-b ${
                state.isDarkMode ? "border-white/10" : "border-black/10"
              } `}
            >
              <a
                className="hover:text-sky-500 transition-all duration-200 block"
                href="#"
              >
                Plugin
              </a>
            </li>
            <NavlinkSub isExtend={subIsExtend} setIsExtend={setSubIsExtend} />
            <li
              className={`py-3 border-b ${
                state.isDarkMode ? "border-white/10" : "border-black/10"
              } `}
            >
              <a
                className="hover:text-sky-500 transition-all duration-200 block"
                href="#"
              >
                Version
              </a>
            </li>
          </ul>
          <div
            className={`${
              state.isDarkMode ? "bg-dark_secondary" : " bg-light_secondary"
            }  rounded-lg h-12 mt-8 py-3 px-4 flex justify-between`}
          >
            <p
              className={`${
                state.isDarkMode ? "text-white/50" : "text-black/50"
              } text-sm  font-semibold`}
            >
              Appearance
            </p>
            <DarkmodeToggleButton />
          </div>
          <div className="mt-8 flex justify-center h-9 items-center">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-current ${
                  state.isDarkMode
                    ? "text-white/60 hover:text-white/90"
                    : "text-black/60 hover:text-black/90"
                }  w-7 h-7 mx-2  hover:scale-105 transition-all duration-300`}
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-current ${
                  state.isDarkMode
                    ? "text-white/60 hover:text-white/90"
                    : "text-black/60 hover:text-black/90"
                }  w-7 h-7 mx-2  hover:scale-105 transition-all duration-300`}
              >
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                <circle cx="11.994" cy="11.979" r="3.003" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-current ${
                  state.isDarkMode
                    ? "text-white/60 hover:text-white/90"
                    : "text-black/60 hover:text-black/90"
                }  w-7 h-7 mx-2  hover:scale-105 transition-all duration-300`}
              >
                <path
                  fill-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
