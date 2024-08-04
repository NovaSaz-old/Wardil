import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import TempNavbar from "./components/TempNavbar"
// import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="bg-gray-50 h-screen">
      {/* <Navbar /> */}
      <TempNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  )
}