import SimpleCard from "../components/SimpleCard";
import EventCard from "../components/EventCard.jsx";
import aboutUsSide from "../assets/images/image 2.png";
import CampaignCard from "../components/CampaignCard.jsx";
import CardCarousel from "./CardCarousel.jsx";
import VideoBanner from "./VideoBanner.jsx";
import volunteers from "../assets/images/volunteers.png";
import FAQ from "./FAQ.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { Link } from "react-router-dom";

export default function AboutUsSection() {
  return (
    <div>
      <div className="grid w-full grid-cols-1 place-items-center gap-x-9 p-8 lg:grid-cols-3 lg:p-24">
        {/** left col */}
        <div className="grid grid-cols-1 text-center lg:text-left">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mb-1 text-xl text-gray-800"
          >
            WHAT WE DO
          </h3>
          <h1
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-4xl font-semibold xl:text-5xl"
          >
            Our objective is to aid the community
          </h1>
          <p
            style={{ textShadow: "1px 1px 2x rgba(0, 0, 0, 0.25)" }}
            className="my-4 text-lg"
          >
            Our organization truly believes that byworking together, we can save
            more lives than ever before.
          </p>
          <button className="mx-auto h-12 w-36 rounded bg-blue-600 p-2 text-white shadow-lg hover:bg-blue-700 md:shadow-md lg:ml-0">
            Discover More
          </button>
        </div>

        {/** mid col */}
        <div className="mt-8">
          <SimpleCard />
          <SimpleCard />
        </div>

        {/** right col */}
        <div className="mx-auto flex items-center">
          <SimpleCard />
        </div>
      </div>
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
      {/** video section   ---  flex items-center justify-center text-center*/}
      <VideoBanner />
      {/** Help others section */}
      <div className="p-4 md:p-12 xl:px-20">
        <div
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
          className="mt-32 text-center"
        >
          <h3 className="text-2xl font-medium leading-tight text-[#957E00]">
            HELP OTHERS
          </h3>
          <h1 className="text-4xl font-semibold leading-tight">
            Introducing Our Campaigns
          </h1>
          <p className="mt-4 text-lg leading-loose">
            How to do something great to help others? We try our best to help
            people in need. See our progress in numbers
          </p>
        </div>
        <div className="mt-4 flex flex-col place-items-center md:grid md:grid-cols-2 md:gap-12 lg:mt-8 lg:grid-cols-3 xl:gap-20">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
        <button className="mx-auto mt-12 flex rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700">
          See more
        </button>
        <hr className="mx-auto mt-12 flex w-full shadow-sm shadow-gray-50 drop-shadow-sm" />
      </div>
      {/** Bellow the campaign cards -> Volunteer section */}
      <div
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
        className="grid grid-cols-1 place-items-center p-9 text-center lg:grid-cols-2 lg:gap-4 lg:p-10 lg:text-left xl:p-16 2xl:gap-8 2xl:p-32"
      >
        {/** Left side */}
        <div className="">
          <h3 className="text-2xl font-medium text-[#293A73]">Our Team</h3>
          <p className="my-4 text-lg 2xl:text-xl">
            Our mission is to make a significant difference in the lives of
            others. We are dedicated to supporting those in need and invite you
            to explore our measurable impact.
          </p>
          <h2 className="my-4 text-4xl font-semibold 2xl:text-5xl">
            Meet Our Volunteers{" "}
          </h2>
          <button className="mb-6 mt-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 xl:px-8 xl:py-4">
            <Link to="/volunteer">Become a Volunteer</Link>
          </button>
        </div>

        {/** Right side */}
        <img className="lg:ml-auto" src={volunteers} alt="volunteers" />
      </div>
      {/** Introducing the campaigns */}
      <div className="px-2 lg:px-10 2xl:px-24">
        <div className="mt-8 grid grid-cols-1 place-items-center lg:grid-cols-3">
          <div
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="col-span-2 text-center lg:text-left"
          >
            <h3 className="text-2xl font-medium text-[#293A73]">HELP OTHERS</h3>
            <h2 className="my-4 text-4xl font-semibold 2xl:text-5xl">
              Introducing Our Campaign
            </h2>
            <p className="my-4 text-lg sm:p-4 lg:p-0 2xl:text-xl">
              Join us in creating a brighter future. Your support will make a
              tangible difference in the lives of those in need.
            </p>
          </div>
          <button className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 lg:ml-auto xl:px-8 xl:py-4 2xl:mr-8">
            <Link to="/events">See More</Link>
          </button>
        </div>

        <div className="my-8 grid gap-4 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-0 2xl:gap-24">
          <EventCard />
          <EventCard />
        </div>
      </div>
      <FAQ />
      <div className="grid grid-cols-1 place-items-center p-2 text-center lg:grid-cols-2 lg:gap-4 lg:p-10 lg:text-left xl:p-16 2xl:gap-8 2xl:p-32">
        {/** side text */}
        <div
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
          className="text-center lg:text-left"
        >
          <h3 className="text-xl font-medium text-blue-600">OUR TESTIMONIAL</h3>
          <h2 className="my-4 text-4xl font-semibold 2xl:text-5xl">
            What our clients say about Wardil charity
          </h2>
        </div>

        {/** Testimonial card component */}
        <TestimonialCard className="w-full" />
      </div>

      {/** News Section */}
      <div className="p-1 lg:p-10 xl:p-16 2xl:p-32">
        <div
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
          className="text-center"
        >
          <h3 className="text-xl font-medium text-blue-600">
            OUR SUCCESS STORIES
          </h3>
          <h2 className="my-4 text-4xl font-semibold 2xl:text-5xl">
            Latest News and Articles from our Blog Posts
          </h2>
        </div>
        <CardCarousel />
      </div>
    </div>
  );
}
