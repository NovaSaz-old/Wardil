import SimpleCard from "../components/SimpleCard";
import aboutUsSide from "../assets/images/image 2.png";
export default function AboutUsSection() {
  return (
    <div>
      <div className="grid grid-cols-1 p-24 md:grid-cols-3">
        {/** left col */}
        <div className="flex w-11/12 flex-col justify-center">
          <h3
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" }}
            className="mb-1 text-xl text-gray-800"
          >
            WHAT WE DO
          </h3>
          <h1
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-5xl font-bold"
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
          <button className="h-12 w-36 rounded bg-blue-600 p-2 text-white shadow-md">
            Discover More
          </button>
        </div>

        {/** mid col */}
        <div>
          <SimpleCard />
          <SimpleCard />
        </div>

        {/** right col */}
        <div className="flex items-center">
          <SimpleCard />
        </div>
      </div>

      {/** 2nd About us section with a side picture */}
      <div className="felx justify-center p-28">
        <div className="grid grid-cols-4 gap-20">
          {/** left column */}
          <div className="col-span-3">
            <p className="mt-4 text-blue-700">About us</p>
            <h1 className="my-4 text-6xl font-semibold">
              Together for a world without poverty
            </h1>
            <h3 className="text-3xl">
              Povert is a widespread issue that affects millions of people
              around the world, and it is our collective responsibility to
              address it.
            </h3>
            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
              About Us
            </button>
          </div>

          {/** right column */}
          <div>
            <img src={aboutUsSide} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
