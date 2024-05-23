import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/Login" element={<UserLogin/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
