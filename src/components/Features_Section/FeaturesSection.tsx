import FeatureCard from "./FeatureCard"
import lightbulb from "../../assets/icon/light-bulb.png"
import lighting from "../../assets/icon/lighting.png"
import tool from "../../assets/icon/tool.png"
import box from "../../assets/icon/box.png";
import screw from "../../assets/icon/screw.png";
import key from "../../assets/icon/key.png";


function FeaturesSection() {
    return (
      <div className="mt-10 pb-28 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeatureCard icon={lightbulb} />
        <FeatureCard icon={lighting} />
        <FeatureCard icon={tool} />
        <FeatureCard icon={box} />
        <FeatureCard icon={screw} />
        <FeatureCard icon={key} />
      </div>
    );
}
export default FeaturesSection