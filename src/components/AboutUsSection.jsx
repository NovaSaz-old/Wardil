import SimpleCard from "../components/SimpleCard";
import aboutUsSide from "../assets/images/image 2.png";
import CampaignCard from "../components/CampaignCard.jsx";
import VideoBanner from "./VideoBanner.jsx";

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
            <h1 className="mb-4 text-6xl font-semibold leading-[1.15]">
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
      <VideoBanner />

      {/** Help others section */}
      <div className="p-4 md:p-12 xl:px-20">
        <div className="mt-32 text-center">
          <h3 className="text-xl font-medium leading-tight text-[#957E00]">
            HELP OTHERS
          </h3>
          <h1 className="text-4xl font-semibold leading-tight">
            Introducing Our Campaigns
          </h1>
          <p className="mt-4 leading-loose">
            How to do something great to help others? We try our best to help
            people in need. See our progress in numbers
          </p>
        </div>
        <div className="mt-8 flex flex-col place-items-center md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:gap-20">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
        <button className="mx-auto mt-12 flex rounded bg-blue-600 px-4 py-2 text-center font-medium text-white">
          See more
        </button>
      </div>
    </div>
  );
}
