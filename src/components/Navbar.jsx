// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/logos/logo.png";

// export default function TempNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');

//   function toggleMenu() {
//     setIsMenuOpen(!isMenuOpen);
//     console.log(isMenuOpen);
//   }

//   return (
//     <nav className="fixed z-50 mb-2 w-full bg-gray-100 px-8 py-4 shadow">
//       <div className="flex items-center justify-between">
//         {/* LOGO - Visible on mobile, hidden on larger screens */}
//         <div className="block md:hidden">
//           <NavLink to="/">
//             <img src={logo} className="h-10" alt="Logo" />
//           </NavLink>
//         </div>

//         {/* Navigation Links Container */}
//         <div className="flex w-full items-center justify-between">
//           <div className="flex">
//             <ul className="mt-2 hidden space-x-4 md:flex">
//               {/* Existing navigation links */}
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/events"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   Events
//                 </NavLink>
//               </li>
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/volunteer"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   Become a Volunteer
//                 </NavLink>
//               </li>
//               <li className="text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/imgs"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Images
//               </NavLink>
//             </li>
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className="text-gray-900">
//                 <NavLink
//                   to="/OurTeam"
//                   className={({ isActive }) =>
//                     isActive ? "font-medium text-blue-600" : "text-gray-900"
//                   }
//                 >
//                   Our Team
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Donate Button and Language Selector */}
//           <div className="flex items-center">
//             {/* Donate Button - Hidden on mobile */}
//             <button className="hidden md:block md:rounded md:bg-blue-600 md:px-4 md:py-2 md:font-semibold md:text-white">
//               <NavLink to="/donate">Donate</NavLink>
//             </button>

//             {/* Language Selector - Hidden on mobile */}
//             <div className="relative ml-4 hidden md:block">
//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className="rounded border-gray-300 px-2 py-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//               >
//                 <option value="English">English</option>
//                 <option value="French">French</option>
//                 {/* Add more languages as needed */}
//               </select>
//             </div>

//             {/* Mobile Burger Menu */}
//             <div className="md:hidden">
//               <button className="text-gray-900" onClick={toggleMenu}>
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   viewBox="0 0 24 24"
//                   className="w-6 h-6"
//                 >
//                   <path d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <>
//           <ul className="flex-col text-center md:hidden">
//             {/* Existing mobile nav links */}
//             <li className="pb-2 pt-8 text-lg font-medium text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/events"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Events
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/volunteer"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Become a Volunteer
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/imgs"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Images
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/about"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="py-2 text-lg text-gray-900">
//               <NavLink
//                 onClick={toggleMenu}
//                 to="/OurTeam"
//                 className={({ isActive }) =>
//                   isActive ? "font-medium text-blue-600" : "text-gray-900"
//                 }
//               >
//                 Our Team
//               </NavLink>
//             </li>

//             {/* Language Selector in Mobile Menu */}
//             <li className="py-2 text-lg text-gray-900">
//               <div className="flex justify-center">
//                 <select
//                   value={selectedLanguage}
//                   onChange={(e) => {
//                     setSelectedLanguage(e.target.value);
//                     toggleMenu();
//                   }}
//                   className="rounded border-gray-300 px-2 py-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//                 >
//                   <option value="English">English</option>
//                   <option value="French">French</option>
//                   {/* Add more languages as needed */}
//                 </select>
//               </div>
//             </li>

//             {/* Donate Button in Mobile Menu */}
//             <li className="pb-2 pt-8 text-lg font-medium text-gray-900">
//               <button className="rounded bg-blue-600 px-4 py-2 text-white">
//                 <NavLink onClick={toggleMenu} to="/donate">
//                   Donate
//                 </NavLink>
//               </button>
//             </li>
//           </ul>
//         </>
//       )}
//     </nav>
//   );
// }

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logos/logo.png";
import Cookies from "js-cookie";
import axios from "axios";

export default function TempNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    Cookies.get("lang") || "en_US"
  );


  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Handle language change and save to cookies
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    Cookies.set("lang", lang);

    // Navigate to home page
    navigate("/");

    // Make AJAX request to update language
    $.ajax({
      url: `http://my.admin.wardil.org/api/lang/${lang}`,
      type: "POST",
      headers: {
        "x-api-key": "zJ6Z",
      },
      xhrFields: {
        withCredentials: true, 
      },
      success: function (data) {
        console.log("Language change response:", data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error updating language:", textStatus, errorThrown);
      },
    });
  };

  useEffect(() => {
    console.log("Current language:", selectedLanguage);
  }, [selectedLanguage]);

  // Navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/volunteer", label: "Become a Volunteer" },
    { to: "/imgs", label: "Images" },
    { to: "/contact", label: "Contact Us" },
    { to: "/about", label: "About" },
    { to: "/OurTeam", label: "Our Team" },
  ];

  const renderLanguageSelector = () => (
    <select
      aria-label="Select Language"
      value={selectedLanguage}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="rounded border-gray-300 px-2 py-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    >
      <option value="en_US">English</option>
      <option value="ku_KUSK">Kurdish</option>
      <option value="ar_IQ">Arabic</option>
    </select>
  );

  return (
    <nav className="fixed z-50 w-full bg-gray-100 px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="block md:hidden">
          <img src={logo} className="h-10" alt="Logo" />
        </NavLink>

        <div className="flex w-full items-center justify-between">
          {/* NAVIGATION LINKS */}
          <ul className="hidden space-x-4 md:flex">
            {navLinks.map((link, index) => (
              <li key={index} className="text-gray-900">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-blue-600"
                      : "text-gray-900 hover:text-blue-500"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* DONATE BUTTON & LANGUAGE SELECTOR */}
          <div className="flex items-center">
            {/* Donate Button */}
            <button className="hidden md:block rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
              <NavLink to="/donate">Donate</NavLink>
            </button>

            {/* Language Selector */}
            <div className="relative ml-4 hidden md:block">
              {renderLanguageSelector()}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="block text-gray-900 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <ul className="mt-4 flex flex-col text-center md:hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="py-2 text-lg text-gray-900">
              <NavLink
                onClick={toggleMenu}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-blue-600"
                    : "text-gray-900 hover:text-blue-500"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Language Selector */}
          <li className="py-2">{renderLanguageSelector()}</li>

          {/* Donate Button */}
          <li className="py-2">
            <button
              className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={toggleMenu}
            >
              <NavLink to="/donate">Donate</NavLink>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
