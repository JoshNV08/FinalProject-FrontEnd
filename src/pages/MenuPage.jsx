import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Filter from "../components/Menu/FilterList";
import FeaturedProducts from "../components/Menu/featuredProducts";
import { useLocation } from "react-router-dom";
import '../Styles/Menu/Menu.css'

function MenuPage() {
  const location = useLocation();

  return (
    <>
      <Filter />
      {location.pathname === "/menu" && (
        <>
          <FeaturedProducts/>
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default MenuPage;
