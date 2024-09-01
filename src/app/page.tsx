import React from "react";
import LandingPage from "@/sections/Home";
import Description from "@/sections/Description";
import Speakers from "@/sections/Speakers";
import Timeline from "@/sections/Timeline";
import Partners from "@/sections/Partners";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <LandingPage />
      </div>
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
