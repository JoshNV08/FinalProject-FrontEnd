import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Filter from "../components/Menu/FilterList";
import MenuBurgers from "../components/Menu/MenuBurgers";
import MenuSnacks from "../components/Menu/MenuSnacks";
import MenuDrinks from "../components/Menu/MenuDrinks";
import MenuDesserts from "../components/Menu/MenuDesserts";
import MenuCoffee from "../components/Menu/MenuCoffee";
import { useLocation } from "react-router-dom";

function MenuPage() {
  const location = useLocation();

  return (
    <>
      <Filter />
      {location.pathname === "/menu" && (
        <>
          <MenuBurgers />
          <MenuSnacks />
          <MenuDrinks />
          <MenuDesserts />
          <MenuCoffee />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default MenuPage;
