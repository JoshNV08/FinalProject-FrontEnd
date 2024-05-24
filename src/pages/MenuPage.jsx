import React from "react";
import Footer from "../components/Footer";
import Filter from "../components/FilterList";
import MenuBurgers from "../components/MenuBurgers";


function MenuPage() {

  return (
    <>
      <Filter />
      <MenuBurgers />

      <Footer />
    </>
  );
}

export default MenuPage;
