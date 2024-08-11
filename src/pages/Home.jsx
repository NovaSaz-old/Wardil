import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-10">
      {/** Hero Section */}
      <Hero />
      <AboutUsSection />
    </div>
  );
}
