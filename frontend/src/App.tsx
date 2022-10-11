import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
