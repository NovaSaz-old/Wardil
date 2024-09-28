import hero2sm from "../assets/images/hero2sm.png";
import aboutUsSide from "../assets/images/image 2.png";
import BlueBottomBanner from "../components/BlueBottomBanner";
import VideoBanner from "../components/VideoBanner";
import CourseRegistrationForm from "../components/CourseRegistrationForm";

export default function About() {
  return (
    <div>
      <img src={hero2sm} alt="hero" />
      <div className="felx justify-center p-8 text-center md:p-28 2xl:text-left">
        <div className="grid grid-cols-1 place-items-center gap-6 2xl:grid-cols-3">
          {/** left column */}
          <div
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="col-span-2"
          >
            <p className="mb-1 mt-4 text-lg font-semibold text-blue-700">
              About us
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] lg:text-5xl xl:text-6xl">
              Together for a world without poverty
            </h1>
            <h3 className="mt-4 text-lg md:mt-4 lg:text-2xl xl:mt-8 xl:text-3xl">
              Povert is a widespread issue that affects millions of people
              around the world, and it is our collective responsibility to
              address it.
            </h3>
            <button className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              About Us
            </button>
          </div>

          {/** right column */}
          <div className="flex place-items-center justify-center text-center 2xl:ml-auto">
            <img src={aboutUsSide} alt="" />
          </div>
        </div>
      </div>

      {/** 2nd one */}
      <div className="felx justify-center p-8 text-center md:p-28 2xl:text-left">
        <div className="grid grid-cols-1 place-items-center gap-6 2xl:grid-cols-3">
          {/** right column */}
          <div className="flex place-items-center justify-center text-center 2xl:mr-auto">
            <img src={aboutUsSide} alt="" />
          </div>

          {/** left column */}
          <div
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="col-span-2"
          >
            <p className="mb-1 mt-4 text-lg font-semibold text-blue-700">
              About us
            </p>
            <h1 className="text-4xl font-semibold leading-[1.15] lg:text-5xl xl:text-6xl">
              Together for a world without poverty
            </h1>
            <h3 className="mt-4 text-lg md:mt-4 lg:text-2xl xl:mt-8 xl:text-3xl">
              Povert is a widespread issue that affects millions of people
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
