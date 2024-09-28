import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";

export default function FooterTest() {
  return (
    <footer className="bg-[#F5F5DC] p-6 md:px-10 md:py-8">
      {/* Top part */}
      <div className="grid grid-cols-1 justify-center gap-12 md:grid-cols-3 md:gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <img className="h-28 md:h-32" src={logo} alt="Wardil logo" />
          <h3 className="md:text-x2 mt-2 text-sm font-semibold">
            Donate and help other people around the world
          </h3>
        </div>

        {/* Mid */}
        <div className="md:mt-4">
          <h1 className="text-xl font-semibold md:text-2xl">{`Navigation's`}</h1>
          <hr className="mt-2 w-1/4 border-t-2 border-gray-500" />
          <ul className="mt-2 md:mt-1">
            <li>
              <Link to="/faq" className="text-base md:text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-base md:text-lg">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base md:text-lg">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-base md:text-lg">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/join-our-community" className="text-base md:text-lg">
                Join our community
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-base md:text-lg">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="text-left md:mt-4">
          <h1 className="text-xl font-semibold md:text-2xl">Stay Connected</h1>
          <hr className="mt-2 w-1/4 border-t-2 border-gray-500" />
          <p className="mt-2 text-sm md:text-base">
            To ensure that you receive all the latest news and updates from us,
            subscribe to our mailing list!
          </p>
          {/* Email subscription form */}
          <form className="mt-4 md:mt-6">
            <input
              type="email"
              className="w-full border-b-2 border-gray-500 bg-[#F5F5DC] p-1 focus:outline-none"
              placeholder="Email Address"
            />
            <button className="ml-auto mt-2 block rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:px-8 md:py-3 md:text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom part */}
      <div className="mt-12 md:mt-6">
        <p className="w-full text-sm md:w-1/2 md:text-base">
          At Hope Raiser, we are dedicated to making a positive impact in the
          lives of those we serve. We believe that every individual has the
          power to create society.
        </p>
        <hr className="mt-8 border-t-2 border-gray-500" />
        <div className="mt-6 flex flex-col justify-between md:flex-row">
          <p className="text-sm md:text-base">
            ©NovaSaz.com 2023. All Rights Reserved.
          </p>
          <div className="mt-2 text-right md:mt-0">
            <Link to="terms-of-use" className="text-sm md:text-base">
              Terms Of Use
            </Link>
            <span className="mx-2">|</span>
            <Link to="terms-privacy" className="text-sm md:text-base">
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
