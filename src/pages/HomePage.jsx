import React from "react";
import Header from "../components/Home/Header";
import SobreNosotros from "../components/Home/AboutUs";
import MenuSection from "../components/Home/MenuCards";
import Testimonials from "../components/Home/Testimonials";
import FooterHome from "../components/Home/FooterHome";

function HomePage() {
  return (
    <>
      <Header />
      <SobreNosotros />
      <MenuSection />
      <Testimonials />
      <FooterHome />
    </>
  );
}

export default HomePage;
