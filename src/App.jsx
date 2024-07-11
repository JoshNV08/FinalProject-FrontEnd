import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import UserLogin from "./pages/UserLogin";
import Nav from "./components/Home/Navbar";
import MenuBurgers from "./components/Menu/MenuBurgers";
import MenuSnacks from "./components/Menu/MenuSnacks";
import MenuDrinks from "./components/Menu/MenuDrinks";
import MenuDesserts from "./components/Menu/MenuDesserts";
import MenuCoffee from "./components/Menu/MenuCoffee";
import Information from "./pages/Information";
import FaqPage from "./pages/FaqPage";
import CouponsPage from "./pages/CouponsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ProductMenu from "./pages/ProductMenu";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivateRoute from "./components/PrivateRoutes";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />}>
          <Route path="menu-burgers" element={<MenuBurgers />} />
          <Route path="menu-snacks" element={<MenuSnacks />} />
          <Route path="menu-drinks" element={<MenuDrinks />} />
          <Route path="menu-desserts" element={<MenuDesserts />} />
          <Route path="menu-coffee" element={<MenuCoffee />} />
        </Route>
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/productmenu/:id" element={<ProductMenu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/aboutus" element={<Information />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/workwithus" element={<WorkPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/coupons" element={<CouponsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}

export default App;
