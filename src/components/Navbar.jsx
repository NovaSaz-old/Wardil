import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logos/logo.png";

export default function TempNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <nav className="bg-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/** LOGO */}
        <div className="text-2xl font-bold text-gray-900">
          <NavLink to="/">
            <img src={logo} className="h-12" />
          </NavLink>
        </div>

        {/** Mobile Burger List */}

        <div className="flex">
          {/* Navigation Links Container */}
          <div className="flex">
            <ul className="mt-1 hidden space-x-4 md:flex">
              <li className="text-gray-900">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink to="/events">Events</NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>

          {/** Donate Button */}
          <button className="hidden md:ml-12 md:block md:rounded md:bg-blue-600 md:px-4 md:pb-2 md:pt-1 md:font-bold md:text-white">
            <NavLink to="/donate">Donate</NavLink>
          </button>
          <div className="md:hidden">
            <button className="text-gray-900" onClick={toggleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 *:h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      {isMenuOpen ? (
        <>
          <ul className="flex-col text-center md:hidden">
            <li className="pb-2 pt-8 text-lg text-gray-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
}
