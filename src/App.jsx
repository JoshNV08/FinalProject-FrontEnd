import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Nav from "./components/Home/Navbar";
import MenuBurgers from "./components/Menu/MenuBurgers";
import MenuSnacks from "./components/Menu/MenuSnacks";
import MenuDrinks from "./components/Menu/MenuDrinks";
import MenuDesserts from "./components/Menu/MenuDesserts";
import MenuCoffee from "./components/Menu/MenuCoffee";
import Information from "./pages/Information";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />}>
          <Route path="menu-burgers" element={<MenuBurgers />} />
          <Route path="menu-snacks" element={<MenuSnacks />} />
          <Route path="menu-bebidas" element={<MenuDrinks />} />
          <Route path="menu-postres" element={<MenuDesserts />} />
          <Route path="menu-coffee" element={<MenuCoffee />} />
        </Route>
        <Route path="/sobrenosotros" element={<Information />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/trabajo" element={<WorkPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
