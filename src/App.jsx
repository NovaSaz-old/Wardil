import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import OurTeam from "./pages/OurTeam";
import EventDetails from "./components/EventDetails";
import PhotoAlbum from "./pages/imgs";

export default function App() {
  return (
    <div className="h-screen w-full overflow-x-hidden bg-gray-50 font-[Poppins]">
      <Navbar />
      <div className="p-10"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imgs" element={<PhotoAlbum />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/OurTeam" element={<OurTeam />} />
      </Routes>
      <Footer />
    </div>
  );
}
