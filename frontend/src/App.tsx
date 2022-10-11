import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
