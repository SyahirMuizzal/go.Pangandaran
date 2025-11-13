import HeroSection from "@/components/ui/HeroSection";
import RecomendedPage from "@/components/ui/Recomended";
import SectionCard from "@/components/ui/SectionCard";
import Welcome from "@/components/ui/Welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <HeroSection />
      <RecomendedPage />
      <div id="jelajahi">
        <SectionCard />
      </div>
    </div>
  );
}
