import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function TempNavbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    return (
        <nav className="bg-gray-200 p-4">
            <div className="flex items-center justify-between">

                { /** LOGO */}
                <div className="text-gray-900 text-2xl font-bold">
                    <NavLink to="/">WARDIL LOGO</NavLink>
                </div>
                <button className="bg-blue-600 px-4 py-2 text-white font-bold rounded block ">
                    <NavLink to="/donate">
                        Donate
                    </NavLink>
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

                <ul className="hidden md:flex space-x-4">
                    <li className="text-gray-900"><NavLink to="/">Home</NavLink></li>
                    <li className="text-gray-900"><NavLink to="/events">Events</NavLink></li>
                    <li className="text-gray-900"><NavLink to="/contact">Contact Us</NavLink></li>
                    <li className="text-gray-900"><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            {/* MOBILE MENU */}
            {isMenuOpen ? (
                <>
                    <ul className="flex-col text-center md:hidden">
                        <li className="text-gray-900 text-lg pt-8 pb-2"><NavLink to="/">Home</NavLink></li>
                        <li className="text-gray-900 text-lg py-2"><NavLink to="/events">Events</NavLink></li>
                        <li className="text-gray-900 text-lg py-2"><NavLink to="/contact">Contact Us</NavLink></li>
                        <li className="text-gray-900 text-lg py-2"><NavLink to="/about">About</NavLink></li>
                    </ul>
                </>
            ) : null}

        </nav>
    )
}