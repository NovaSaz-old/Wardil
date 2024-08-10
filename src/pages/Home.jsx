import heroImage from "../assets/images/Hero.png";
import care from "../assets/homeSVGs/care.svg";
import helping from "../assets/homeSVGs/helping.svg";
import kindness from "../assets/homeSVGs/kindness.svg";
import hope from "../assets/homeSVGs/hope.svg";
import dove from "../assets/homeSVGs/dove.svg";
import unite from "../assets/homeSVGs/unite.svg";
import globe from "../assets/homeSVGs/globe.svg";
import future from "../assets/homeSVGs/future.svg";
import newspaper from "../assets/homeSVGs/newspaper.svg";

export default function Home() {
  return (
    <div className="bg-gray-50 pb-10">
      {/** Hero Section */}
      <div>
        <div className="px-8 py-4 md:mx-20 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-8 md:px-16 md:py-20">
          {/** left part */}
          <div className="mb-8 mt-4">
            <h1 className="mb-4 mt-4 text-4xl font-bold lg:mb-8 lg:text-8xl">
              Kindness and charity can change lives
            </h1>
            <p className="md:text-xl">
              Join us in creating a future where every life is valued by
              supporting our education, healthcare, and livelihood initiatives
            </p>
            <button className="mt-6 rounded border-2 border-blue-700 bg-white px-4 py-2">
              Donate Now!
            </button>
          </div>
          {/** right part */}
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>

      {/** Mid banner section */}
      <div className="mx-3 my-2 grid grid-cols-2 gap-6 bg-[#F5F5DC] px-2 py-16 text-left text-sm shadow-sm md:mx-4 md:grid md:grid-cols-3 md:place-items-center md:gap-8 md:text-xl 2xl:mx-8 2xl:gap-16 2xl:p-24 2xl:text-left">
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={care} className="h-12" alt="Care - Brighter Tomorrow" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Brighter<span>Tomorrow</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={helping} className="h-12" alt="Helping - Giving Hearts" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Giving<span>Hearts</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={kindness}
            alt="Kindness - Impactful Giving"
            className="h-14"
          />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Impactful<span>Giving</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={hope} alt="Hope - Transforming Lives" className="h-12" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Transforming<span>Lives</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={dove} alt="Dove - Help & Hope" className="h-12" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Help &<span>Hope</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={unite} alt="Dove - Help & Hope" className="h-12" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Unite for a<span>Better Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={globe} alt="Dove - Help & Hope" className="mt-3 h-14" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Unite for a<span>Better Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img src={future} alt="Dove - Help & Hope" className="mt-1 h-14" />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Sustainable<span>Future</span>
          </h4>
        </div>
        <div style={{ width: "12rem" }} className="flex items-center">
          <img
            src={newspaper}
            className="h-12"
            alt="Care - Brighter Tomorrow"
          />
          <h4 className="mx-[.35rem] flex flex-col text-left font-semibold leading-6">
            Brighter<span>Tomorrow</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
