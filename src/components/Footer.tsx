import { useContext } from "react";
import { DarkModeContext } from "../context/DarkmodeContext";

function Footer() {
  const { state } = useContext(DarkModeContext);

  return (
    <div className={`p-8 ${state.isDarkMode ? "text-white/50" : "text-black/50"}  text-sm`}>
      <p>Recreate by let_woon in {new Date().getFullYear()}</p>
    </div>
  );
}
export default Footer