import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    function showNavbar() {
        setToggle(!toggle)
    }

    return (
        <nav className="fixed top-0 w-full bg-gray-50 items-center flex p-4">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">

                <h1 className="text-xl text-teal font-bold cursor-pointer">LOGO</h1>



                <button className="felx justify-end md:hidden rounded-2xl bg-gray-200 px-3 py-1 ring-1 ring-gray-100">
                    =
                </button>

                <ul
                    className={`${toggle ? "flex" : "hidden"} flex-col justify-center items-center 2-full first:mt-2 md:flex-row md:2-auto md:space-x-10 md:flex`}
                >
                    <li><NavLink to="/"></NavLink>Home</li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

                <button>
                    <NavLink to="/donate">Donate</NavLink>
                </button>
            </div>
        </nav>
    )
}
