import About from "@/components/About";
import Header from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Achivements from "@/components/Achivements";
import Promotional from "@/components/promotional";
import Footer from "@/components/Footer";
import { JobSection } from "@/components/JobSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative top-20" >
        <HeroSection />
        <About />

        <Achivements />

        <JobSection />
        <Promotional />
        <TestimonialSection />
        <Footer />
      </main>
    </>
  );
}
