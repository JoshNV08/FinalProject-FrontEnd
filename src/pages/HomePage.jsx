import React from "react";
import Header from "../components/Header";
import SobreNosotros from "../components/AboutUs";
import MenuSection from "../components/MenuCards";
import Testimonials from "../components/Testimonials";
import FooterHome from "../components/FooterHome";

function HomePage() {
  return (
    <>
      <Header />
      <SobreNosotros />
      <MenuSection />
      <Testimonials/>
      <FooterHome />
    </>
  );
}

export default HomePage;
