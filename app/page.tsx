import Footer from "@/components/Footer";
import HeroSection from "@/components/home/herosection";
import Services from "@/components/home/services";
import WhyChooseUs from "@/components/home/whychoseus";
import Navbar from "@/components/navbar";
import Image from "next/image";
import SubscribeSection from "../components/subscription";
import OurWorkSection from "@/components/home/ourworksec";

export default function Home() {
  return (
 <div>
  <Navbar/>
  <HeroSection/>
  <Services/>
  <WhyChooseUs />
  <OurWorkSection />
  <SubscribeSection/>
  <Footer/>
 </div>
  );
}
