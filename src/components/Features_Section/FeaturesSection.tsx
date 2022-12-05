import FeatureCard from "./FeatureCard"

function FeaturesSection() {
    return (
      <div className="mt-10 pb-28 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeatureCard icon={"bg-lightbulb"} />
        <FeatureCard icon={"bg-lighting"} />
        <FeatureCard icon={"bg-tool"} />
        <FeatureCard icon={"bg-box"} />
        <FeatureCard icon={"bg-screw"} />
        <FeatureCard icon={"bg-key"} />
      </div>
    );
}
export default FeaturesSection