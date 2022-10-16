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
import { BookingDetails } from "./pages/BookingDetails/BookingDetails";
import { Payment } from "./pages/Payment";
import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import { Checkbooking } from "./pages/Checkbooking";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="admin" element={<Admin />} />
        <Route path="booking/room" element={<Rooms />} />
        <Route path="booking/hall" element={<Halls />} />
        <Route path="booking" element={<BookingDetails />} />
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
