import { NavLink } from "react-router-dom";
import heroImage from "../assets/images/Hero.png";
import logo from "../assets/logos/logo.png"; // Assuming this is the logo image
import care from "../assets/homeSVGs/care.svg";
import helping from "../assets/homeSVGs/helping.svg";
import kindness from "../assets/homeSVGs/kindness.svg";
import hope from "../assets/homeSVGs/hope.svg";
import dove2 from "../assets/homeSVGs/dove-svgrepo-com.svg";
import unite from "../assets/homeSVGs/unite.svg";
import globe from "../assets/homeSVGs/globe.svg";
import future from "../assets/homeSVGs/future.svg";
import newspaper from "../assets/homeSVGs/newspaper.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div>
        {/** Top hero part */}
        <div className="px-8 py-4 md:grid md:grid-cols-2 md:place-items-center md:justify-center md:gap-8 md:py-20 lg:mx-8 lg:px-8 2xl:mx-20 2xl:px-16">
          {/** left part */}
          <div className="mb-8 mt-4">
            {/** Logo for larger screens (hidden on small screens) */}
            <div className="hidden md:block">
              <NavLink to="/">
                {/** Set larger width and height for a more prominent logo */}
                <img src={logo} className="h-100 w-60" alt="Logo" />
              </NavLink>
            </div>
            {/** Hero heading */}
            <h1
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="mb-4 mt-4 text-4xl font-bold lg:mb-8 lg:text-7xl 2xl:text-8xl"
            >
              Kindness and charity can change lives
            </h1>
            {/** Hero description */}
            <p
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="md:text-xl"
            >
              Join us in creating a future where every life is valued by
              supporting our education, healthcare, and livelihood initiatives
            </p>
            {/** Donate Button */}
            <button className="mt-6 rounded border-2 border-blue-700 bg-white px-4 py-2 font-semibold shadow-md drop-shadow-sm hover:bg-blue-50">
              <Link to="/donate">Donate Now!</Link>
            </button>
          </div>

          {/** Right part: Hero image */}
          <img src={heroImage} className="h-70 w-90" alt="heroImage" />
        </div>
      </div>

      {/* * Mid hero part with icons and descriptions
      <div className="mx-3 my-2 grid grid-cols-2 bg-[#F5F5DC] py-12 text-left text-sm shadow-sm zf:gap-x-1 zf:px-2 zf:py-11 ss:pl-6 ss:pr-2 sm:py-16 sm:pl-8 md:mx-4 md:grid md:grid-cols-3 md:place-items-center md:gap-8 md:text-xl 2xl:mx-8 2xl:gap-16 2xl:p-24 2xl:text-left">
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={care} className="h-12" alt="Care - Brighter Tomorrow" />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Brighter<span>Tomorrow</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={helping}
            className="zf:h-11 sm:h-12"
            alt="Helping - Giving Hearts"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Giving<span>Hearts</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={kindness}
            alt="Kindness - Impactful Giving"
            className="h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Impactful<span>Giving</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={hope} alt="Hope - Transforming Lives" className="h-12" />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Transforming<span>Lives</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={dove2} alt="Dove - Help & Hope" className="ml-1 h-12" />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Help &<span>Hope</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={unite} alt="Dove - Help & Hope" className="h-12" />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Unite for a<span>Better Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={globe} alt="Dove - Help & Hope" className="mt-3 h-14" />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Unite for a<span>Better Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={future}
            alt="Dove - Help & Hope"
            className="ml-[-5px] mt-1 h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.20rem] flex flex-col text-left font-semibold leading-6"
          >
            Sustainable<span>Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={newspaper}
            className="zf:h-11 sm:h-12"
            alt="Care - Brighter Tomorrow"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mx-[.35rem] flex flex-col text-left font-semibold leading-6"
          >
            Brighter<span>Tomorrow</span>
          </h4>
        </div>
      </div> */}
      {/** Mid hero part with icons and descriptions */}
      <div className="mx-3 my-2 grid grid-cols-2 gap-4 bg-[#F5F5DC] py-6 text-left text-sm shadow-sm sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-12 2xl:p-16">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <img
            src={care}
            className="h-10 sm:h-12 md:h-14"
            alt="Care - Brighter Tomorrow"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Brighter<span>Tomorrow</span>
          </h4>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <img
            src={helping}
            className="h-10 sm:h-12 md:h-14"
            alt="Helping - Giving Hearts"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Giving<span>Hearts</span>
          </h4>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <img
            src={kindness}
            alt="Kindness - Impactful Giving"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Impactful<span>Giving</span>
          </h4>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <img
            src={hope}
            alt="Hope - Transforming Lives"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Transforming<span>Lives</span>
          </h4>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col items-center">
          <img
            src={dove2}
            alt="Dove - Help & Hope"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Help &<span>Hope</span>
          </h4>
        </div>

        {/* Item 6 */}
        <div className="flex flex-col items-center">
          <img
            src={unite}
            alt="Unite - Better Future"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Unite for a<span>Better Future</span>
          </h4>
        </div>

        {/* Item 7 */}
        <div className="flex flex-col items-center">
          <img
            src={globe}
            alt="Globe - Better Future"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Unite for a<span>Better Future</span>
          </h4>
        </div>

        {/* Item 8 */}
        <div className="flex flex-col items-center">
          <img
            src={future}
            alt="Sustainable Future"
            className="h-10 sm:h-12 md:h-14"
          />
          <h4
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-2 text-center font-semibold leading-6"
          >
            Sustainable<span>Future</span>
          </h4>
        </div>

        {/* Item 9 */}
        {/* <div className="flex flex-col items-center">
  <img src={newspaper} className="h-10 sm:h-12 md:h-14" alt="Brighter Tomorrow" />
  <h4 style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }} className="mt-2 text-center font-semibold leading-6">
    Brighter<span>Tomorrow</span>
  </h4>
</div> */}
      </div>
    </>
  );
}
