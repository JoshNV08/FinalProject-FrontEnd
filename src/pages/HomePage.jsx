import React from "react";
import Header from "../components/Header"; // Ensure the correct path
import SobreNosotros from "../components/AboutUs";
import MenuSection from "../components/MenuCards";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <Header />
      <SobreNosotros />
      <MenuSection />
      <Testimonials/>
    </>
  );
}

export default HomePage;
