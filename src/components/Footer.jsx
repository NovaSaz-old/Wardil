import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";

export default function FooterTest() {
  return (
    <footer className="mt-2 bg-[#F5F5DC] p-8 md:p-16">
      {" "}
      {/* Added md:p-16 for smaller padding on mobile */}
      {/* Top part */}
      <div className="grid grid-cols-1 justify-center gap-16 md:grid-cols-3 md:gap-8">
        {" "}
        {/* Changed to grid-cols-1 for mobile and added md:gap-8 */}
        {/* Left */}
        <div className="">
          <img className="h-32" src={logo} alt="Wardil logo" />
          <p className="mt-4 text-lg md:text-base">
            {" "}
            {/* Added md:text-base for smaller text on mobile */}
            Donate and help other people around the world
          </p>
        </div>
        {/* Mid */}
        <div className="md:mt-8">
          {" "}
          {/* Added md:mt-8 for margin top on mobile */}
          <div>
            <h1 className="text-3xl font-semibold">{`Navigation's`}</h1>
            <hr className="mt-3 w-1/4 border-t-2 border-gray-500" />
            <ul className="mt-4 md:mt-2">
              {" "}
              {/* Added md:mt-2 for smaller margin top on mobile */}
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
              <li>
                <Link to="/join-our-community">Join our community</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Right */}
        <div className="text-left md:mt-8">
          {" "}
          {/* Added md:mt-8 for margin top on mobile */}
          <h1 className="text-3xl font-semibold">Stay Connected</h1>
          <hr className="mt-3 w-1/4 border-t-2 border-gray-500" />
          <p className="mt-4 md:text-base">
            {" "}
            {/* Added md:text-base for smaller text on mobile */}
            To ensure that you receive all the latest news and updates from us,
            subscribe to our mailing list!
          </p>
          {/* Email subscription form */}
          <form className="mt-16 md:mt-8">
            {" "}
            {/* Added md:mt-8 for smaller margin top on mobile */}
            <input
              type="email"
              className="w-full border-b-2 border-gray-500 bg-[#F5F5DC] p-2 focus:outline-none"
              placeholder="Email Address"
            />
            <button className="ml-auto mt-4 block rounded-md bg-blue-600 px-8 py-4 font-bold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom part */}
      <div className="mt-20 md:mt-8">
        {" "}
        {/* Added md:mt-8 for smaller margin top on mobile */}
        <p className="w-full md:w-1/2">
          {" "}
          {/* Changed w-1/2 to w-full for mobile */}
          At Hope Raiser, we are dedicated to making a positive impact in the
          lives of those we serve. We believe that every individual has the
          power to create society.
        </p>
        <hr className="mt-16 border-t-2 border-gray-500" />
        <div className="mt-10 flex justify-between">
          <p>©NovaSaz.com 2023. All Rights Reserved.</p>
          <div>
            <Link to="terms-of-use">Terms Of Use</Link>
            <Link to="terms-privacy" className="ml-4 md:ml-8">
              {" "}
              {/* Added md:ml-8 for larger spacing on mobile */}
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
