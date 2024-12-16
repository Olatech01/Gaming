import Hero from "@/components/LandingPage/Hero";
import NewRelease from "@/components/LandingPage/NewRelease";
import Play from "@/components/LandingPage/Play";
import Services from "@/components/Services";
import Show from "@/components/Show";
import Tournaments from "@/components/Tournaments";


export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#1F1F1F] flex flex-col gap-[3rem]">
      <Hero />
      <NewRelease />
      <Play />
      <Services />
      {/* <Tournaments /> */}
      <Show />
    </div>
  );
}
