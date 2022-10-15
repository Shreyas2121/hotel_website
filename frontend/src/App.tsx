import "./App.css";
import NavBar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin";
import Rooms from "./pages/Rooms";
import Halls from "./pages/Halls";
import Restaurants from "./pages/Restaurants";
import { Booking } from "./pages/Booking";
import { Payment } from "./pages/Payment";
import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import { Checkbooking } from "./pages/Checkbooking";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="admin" element={<Admin />} />
        <Route path="booking/room" element={<Rooms />} />
        <Route path="booking/hall" element={<Halls />} />
        <Route path="booking/restaurant" element={<Restaurants />} />
        <Route path="booking" element={<Booking />} />
        <Route path="payment" element={<Payment />} />
        <Route path="addreview" element={<AddReview />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="checkbooking" element={<Checkbooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
