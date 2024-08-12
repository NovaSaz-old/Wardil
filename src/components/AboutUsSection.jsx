import SimpleCard from "../components/SimpleCard";
import aboutUsSide from "../assets/images/image 2.png";
import videoFrame from "../assets/images/video.png";
import marketing from "../assets/homeSVGs/marketing.svg";
import volunteers from "../assets/homeSVGs/volunteers.svg";
import donations from "../assets/homeSVGs/donations.svg";
import increase from "../assets/homeSVGs/increase.svg";

export default function AboutUsSection() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center p-8 md:grid-cols-3 md:p-24">
        {/** left col */}
        <div className="flex w-11/12 flex-col justify-center text-center md:text-left">
          <h3
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" }}
            className="mb-1 text-xl text-gray-800"
          >
            WHAT WE DO
          </h3>
          <h1
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-5xl font-bold leading-tight md:leading-none"
          >
            Our objective is to aid the community
          </h1>
          <p
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" }}
            className="my-4"
          >
            Our organization truly believes that byworking together, <br />
            <span>we can save more lives than ever before</span>
          </p>
          <button className="mx-auto h-12 w-36 rounded bg-blue-600 p-2 text-white shadow-lg md:ml-0 md:shadow-md">
            Discover More
          </button>
        </div>

        {/** mid col */}
        <div className="mt-8">
          <SimpleCard />
          <SimpleCard />
        </div>

        {/** right col */}
        <div className="flex items-center">
          <SimpleCard />
        </div>
      </div>

      {/** 2nd About us section with a side picture */}
      <div className="felx justify-center p-8 text-center md:p-28 md:text-left">
        <div className="grid gap-6 md:grid-cols-4 md:gap-20">
          {/** left column */}
          <div className="md:col-span-3">
            <p className="mb-1 mt-4 text-lg font-semibold text-blue-700">
              About us
            </p>
            <h1 className="mb-4 text-6xl font-semibold">
              Together for a world without poverty
            </h1>
            <h3 className="mt-8 text-3xl md:mt-4">
              Povert is a widespread issue that affects millions of people
              around the world, and it is our collective responsibility to
              address it.
            </h3>
            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
              About Us
            </button>
          </div>

          {/** right column */}
          <div className="mx-auto md:ml-0">
            <img src={aboutUsSide} alt="" />
          </div>
        </div>
      </div>

      {/** video section   ---  flex items-center justify-center text-center*/}
      <div className="bg-[#F5F5DC] px-4 py-8 md:px-8 md:py-12">
        <img src={videoFrame} className="mx-auto" />
        <div className="mt-12 grid grid-cols-2 gap-x-4 md:grid-cols-4">
          <div className="mb-8">
            <img
              src={marketing}
              alt="marketing"
              className="mx-auto rounded-[1.25rem] bg-blue-300 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
            />
            <h4 className="mt-4 text-center text-lg font-semibold md:mx-36 md:text-left md:text-xl">
              10000+
              <br />
              <span className="font-normal">
                Fundraising campaing in all time
              </span>
            </h4>
          </div>
          <div className="mb-8">
            <img
              src={volunteers}
              alt="marketing"
              className="mx-auto rounded-[1.25rem] bg-green-900 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
            />
            <h4 className="mt-4 text-center text-lg font-semibold md:mx-36 md:text-left md:text-xl">
              1200 +
              <br />
              <span className="font-normal">
                Our volunteers around the world
              </span>
            </h4>
          </div>
          <div className="mb-8">
            <img
              src={donations}
              alt="marketing"
              className="mx-auto rounded-[1.25rem] bg-yellow-300 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
            />
            <h4 className="mt-4 text-center text-lg font-semibold md:mx-36 md:text-left md:text-xl">
              $120M+
              <br />
              <span className="font-normal">
                Raised and counting donations in all time
              </span>
            </h4>
          </div>
          <div className="mb-8">
            <img
              src={increase}
              alt="marketing"
              className="mx-auto rounded-[1.25rem] bg-[#FFC2B4] px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
            />
            <h4 className="mt-4 text-center text-lg font-semibold md:mx-36 md:text-left md:text-xl">
              98%
              <br />
              <span className="font-normal">positive review from public</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
