import videoFrame from "../assets/images/video.png";
import marketing from "../assets/homeSVGs/marketing.svg";
import volunteers from "../assets/homeSVGs/volunteers.svg";
import donations from "../assets/homeSVGs/donations.svg";
import increase from "../assets/homeSVGs/increase.svg";

export default function VideoBanner() {
  return (
    <div className="bg-[#F5F5DC] px-4 py-8 md:px-8 md:py-12">
      <img src={videoFrame} className="mx-auto" />
      <div className="mt-12 grid grid-cols-2 gap-x-4 xl:grid-cols-4">
        <div className="mb-8 grid">
          <img
            src={marketing}
            alt="marketing"
            className="mx-auto rounded-[1.25rem] bg-blue-300 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
          />
          <h4 className="mt-4 text-center text-lg font-semibold md:px-8 md:text-xl">
            10000+
            <br />
            <span className="font-normal">
              Fundraising campaing in all time
            </span>
          </h4>
        </div>

        <div className="mb-8 grid">
          <img
            src={volunteers}
            alt="marketing"
            className="mx-auto rounded-[1.25rem] bg-green-900 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
          />
          <h4 className="mt-4 text-center text-lg font-semibold md:px-8 md:text-xl">
            1200 +
            <br />
            <span className="font-normal">Our volunteers around the world</span>
          </h4>
        </div>

        <div className="mb-8 grid">
          <img
            src={donations}
            alt="marketing"
            className="mx-auto rounded-[1.25rem] bg-yellow-300 px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
          />
          <h4 className="mt-4 text-center text-lg font-semibold md:px-8 md:text-xl">
            $120M+
            <br />
            <span className="font-normal">
              Raised and counting donations in all time
            </span>
          </h4>
        </div>

        <div className="mb-8 grid">
          <img
            src={increase}
            alt="marketing"
            className="mx-auto rounded-[1.25rem] bg-[#FFC2B4] px-12 py-8 shadow-md shadow-slate-400 drop-shadow-sm"
          />
          <h4 className="mt-4 text-center text-lg font-semibold md:px-8 md:text-xl">
            98%
            <br />
            <span className="font-normal">
              positive review from public locally and globally
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}
