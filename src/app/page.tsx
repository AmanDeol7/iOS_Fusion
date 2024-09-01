import Image from "next/image";
import LandingPage from "@/sections/Home";
import Description from "@/sections/Description";
import Speakers from "@/sections/Speakers";
import Timeline from "@/sections/Timeline";
import Partners from "@/sections/Partners";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import ScrollTop from "@/components/ScrollTop";
import LandingPageMobile from "@/sections/Home-mobile";
import useWindowWidth from "@/components/WindowWidth";
export default function Home() {
  // const windowWidth = useWindowWidth();
  return (
    <>
      {/* {windowWidth > 768 ? <LandingPage /> : <LandingPageMobile />} */}
      <LandingPage />
      <Description />
      <Speakers />
      <Timeline />
      <Partners />
      <FAQ />
      <Footer />
      <ScrollTop />
    </>
  );
}
