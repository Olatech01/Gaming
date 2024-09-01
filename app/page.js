import Hero from "@/components/Hero";
import Navbar from "./Navbar";
import Show from "@/components/Show";
import Services from "@/components/Services";
import Tournaments from "@/components/Tournaments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tournaments />
      <Footer />
    </div>
  );
}
