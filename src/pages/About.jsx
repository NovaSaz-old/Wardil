import hero2sm from "../assets/images/hero2sm.png";
import aboutUsSide from "../assets/images/image 2.png";
import BlueBottomBanner from "../components/BlueBottomBanner";
import VideoBanner from "../components/VideoBanner";
import CourseRegistrationForm from "../components/CourseRegistrationForm";

export default function About() {
  return (
    <div>
      <img className="w-full h-auto" src={hero2sm} alt="hero" />
      <div className="flex justify-center p-4 sm:p-8 text-center md:p-20 2xl:text-left">
        <div className="grid grid-cols-1 place-items-center gap-6 2xl:grid-cols-2">
          {/** left column */}
          <div
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="col-span-2 px-4 sm:px-0"
          >
            <p className="mb-1 mt-4 text-base sm:text-lg font-semibold text-blue-700">
              About us
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-[1.15] lg:text-5xl xl:text-6xl">
              Together for a world without poverty
            </h1>
            <h3 className="mt-4 text-sm sm:text-lg lg:text-2xl xl:mt-8 xl:text-3xl">
              Poverty is a widespread issue that affects millions of people
              around the world, and it is our collective responsibility to
              address it.
            </h3>
            <button className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              About Us
            </button>
          </div>

          {/** right column */}
          <div className="flex justify-center text-center 2xl:ml-auto">
            <img className="w-full max-w-xs sm:max-w-sm" src={aboutUsSide} alt="About Us Image" />
          </div>
        </div>
      </div>

      {/** 2nd one */}
      <div className="flex justify-center p-4 sm:p-8 text-center md:p-20 2xl:text-left">
        <div className="grid grid-cols-1 place-items-center gap-6 2xl:grid-cols-2">
          {/** right column */}
          <div className="flex justify-center text-center 2xl:mr-auto">
            <img className="w-full max-w-xs sm:max-w-sm" src={aboutUsSide} alt="About Us Image" />
          </div>

          {/** left column */}
          <div
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="col-span-2 px-4 sm:px-0"
          >
            <p className="mb-1 mt-4 text-base sm:text-lg font-semibold text-blue-700">
              About us
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-[1.15] lg:text-5xl xl:text-6xl">
              Together for a world without poverty
            </h1>
            <h3 className="mt-4 text-sm sm:text-lg lg:text-2xl xl:mt-8 xl:text-3xl">
              Poverty is a widespread issue that affects millions of people
              around the world, and it is our collective responsibility to
              address it.
            </h3>
            <button className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              About Us
            </button>
          </div>
        </div>
      </div>

      <VideoBanner />
      <BlueBottomBanner />
      <CourseRegistrationForm />
    </div>
  );
}
