import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";
import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: string
}

function FeatureCard({ icon }: FeatureCardProps) {
  const { state } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        state.isDarkMode ? "bg-dark_secondary" : "bg-light_secondary"
      }  rounded-xl p-6 flex flex-col justify-between`}
    >
      <div
        className={`${
          state.isDarkMode ? "bg-dark_primary" : " bg-dark_secondary/10"
        } w-12 h-12 mb-6  rounded-md flex items-center justify-center`}
      >
        <motion.img
          
          initial={{ scale: 0.5, opacity: 0.3 }}
          whileInView={{ scale: 1, opacity: 1 }}
          // transition={{delay: 0.2}}
          className={`w-6 h-6 duration-200 ease-out`}
          src={icon}
          alt=''
        ></motion.img>
      </div>
      <motion.h3
        className={`${
          state.isDarkMode ? "text-white/90" : "text-midnight"
        } text-white/90 font-semibold text-left`}
      >
        Instant Server Start
      </motion.h3>
      <p
        className={`${
          state.isDarkMode ? "text-white/50" : "text-midnight/70"
        } font-semibold text-sm text-left mt-2 leading-tight`}
      >
        On demand file serving over native ESM, no bundling required!
      </p>
    </div>
  );
}
export default FeatureCard