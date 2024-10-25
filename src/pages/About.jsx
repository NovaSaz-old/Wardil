import hero2sm from "../assets/images/hero2sm.png";
import BlueBottomBanner from "../components/BlueBottomBanner";
import VideoBanner from "../components/VideoBanner";
import aboutUsSide from "../assets/images/image 2.png";

export default function About() {
  return (
    <div>
      <img className="w-full h-auto" src={hero2sm} alt="hero" />
      
            {/** 2nd About us section with a side picture */}
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
          </div>

          {/** right column */}
          <div className="flex place-items-center justify-center text-center 2xl:ml-auto">
            <img src={aboutUsSide} alt="" />
          </div>
        </div>
      </div>
      <VideoBanner />
      <BlueBottomBanner />
    </div>
  );
}
