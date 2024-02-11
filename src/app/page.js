import About from "@/components/About/About";
import HeroSection from "@/components/Hero/HeroSection";
import Achivements from "@/components/Achivements/Achivements";
import Promotional from "@/components/promotional/Promotional";
import Footer from "@/components/Footer/Footer";
import { JobSection } from "@/components/JobSection/JobSection";
import Testimonial from "@/components/Testinomial/Testinomial";
import Navbar from "@/components/Navbar/Navbar";
import Mission from "@/components/Mission/Mission";
import Services from "@/components/ServicePage/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Mission />
        <Services />
        <Achivements />
        <JobSection />
        <Promotional />
        <Testimonial />
        {/* <TestimonialSection /> */}
        <Footer />
      </main>
    </>
  );
}
