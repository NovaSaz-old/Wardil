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
    <nav className="fixed z-20 mb-2 w-full bg-gray-100 px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="">
          <NavLink to="/">
            <img src={logo} className="h-12" />
          </NavLink>
        </div>

        {/* Mobile Burger List */}

        <div className="flex">
          {/* Navigation Links Container */}
          <div className="flex">
            <ul className="mt-2 hidden space-x-4 md:flex">
              <li className="text-gray-900">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-medium text-blue-600" : "text-gray-900"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? "font-medium text-blue-600" : "text-gray-900"
                  }
                >
                  Events
                </NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink
                  to="/volunteer"
                  className={({ isActive }) =>
                    isActive ? "font-medium text-blue-600" : "text-gray-900"
                  }
                >
                  Become a Volunteer
                </NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "font-medium text-blue-600" : "text-gray-900"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="text-gray-900">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "font-medium text-blue-600" : "text-gray-900"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Donate Button */}
          <button className="hidden md:ml-12 md:block md:rounded md:bg-blue-600 md:px-4 md:py-2 md:font-semibold md:text-white">
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
            <li className="pb-2 pt-8 text-lg font-medium text-gray-900">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-medium text-blue-600" : "text-gray-900"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "font-medium text-blue-600" : "text-gray-900"
                }
              >
                Events
              </NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink
                to="/volunteer"
                className={({ isActive }) =>
                  isActive ? "font-medium text-blue-600" : "text-gray-900"
                }
              >
                Become a Volunteer
              </NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "font-medium text-blue-600" : "text-gray-900"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className="py-2 text-lg text-gray-900">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "font-medium text-blue-600" : "text-gray-900"
                }
              >
                About
              </NavLink>
            </li>
            <li className="pb-2 pt-8 text-lg font-medium text-gray-900">
              <button className="rounded bg-blue-600 px-4 py-2 text-white">
                <NavLink to="/donate">Donate</NavLink>
              </button>
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
}
