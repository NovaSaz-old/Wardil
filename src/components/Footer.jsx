import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";

export default function FooterTest() {
  return (
    <footer className="bg-[#F5F5DC] p-28">
      {/** Top part */}
      <div className="grid grid-cols-3 justify-center gap-16">
        {/** Left */}

        <div className="">
          <img className="h-32" src={logo} alt="Wardil logo" />
          <p className="mt-4 text-lg">
            Donate and help other people around the world
          </p>
        </div>

        {/** Mid */}
        <div>
          <div>
            <h1 className="text-3xl font-semibold">{`Navigation's`}</h1>
            <hr className="mt-3 w-1/4 border-t-2 border-gray-500" />
            <ul className="mt-4">
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
                <Link to="/join-our-community"></Link>Join our community
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>

        {/** Right */}
        <div className="text-left">
          <h1 className="text-3xl font-semibold">Stay Connected</h1>
          <hr className="mt-3 w-1/4 border-t-2 border-gray-500" />
          <p className="mt-4">
            to ensure that you receive all the latest news and updates from us,
            subscribe to mailing list!
          </p>
        </div>
      </div>
      {/** Bottom part */}
      <div className="mt-20">
        <p className="w-1/2">
          At Hope Raiser, we are dedicated to making a positive impact in the
          lives of those we serve. We belive that every individual has the power
          to create society.
        </p>
        <hr className="mt-16 border-t-2 border-gray-500" />
      </div>
    </footer>
  );
}
