import React from 'react';
import eventDetailsPng from "../assets/images/EventDetails.png";
import instructorImage from "../assets/images/Anu.png";
import { FaStar, FaPlayCircle, FaUserGraduate } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

function EventDetails() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Event Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={eventDetailsPng}
            alt="Event"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              UX & Web Design Master Course
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mt-2">
              Strategy, Design, Development
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-700">
              Learn how to apply User Experience (UX) principles to your website designs, code a variety of sites, and increase sales and returns!
            </p>
          </div>
          <div className="mt-6">
            <button className="w-full md:w-auto inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Instructor Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
        <div className="lg:col-span-3">
          <img
            src={instructorImage}
            alt="Instructor"
            className="w-48 h-48 mx-auto rounded-full shadow-lg"
          />
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center">
              <FaStar className="text-yellow-500 text-2xl mr-2" />
              <p className="text-lg">
                <span className="font-bold">4.5</span> Instructor Rating
              </p>
            </div>
            <div className="flex items-center justify-center">
              <MdReviews className="text-yellow-500 text-2xl mr-2" />
              <p className="text-lg">
                <span className="font-bold">28,707</span> Reviews
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaUserGraduate className="text-yellow-500 text-2xl mr-2" />
              <p className="text-lg">
                <span className="font-bold">155,242</span> Students
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaPlayCircle className="text-yellow-500 text-2xl mr-2" />
              <p className="text-lg">
                <span className="font-bold">8</span> Courses
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Instructor Name
          </h3>
          <h4 className="text-lg md:text-xl font-medium text-gray-600 mt-2">
            29 Years of UX & Design Experience
          </h4>
          <div className="my-4 border-b border-gray-300"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            quis tortor ut urna aliquet maximus. Fusce vitae posuere nisl. Sed
            eget mi vel sapien commodo placerat. Vivamus fringilla ex massa,
            eget cursus ante porttitor vitae. Proin scelerisque mi vitae justo
            dignissim, sit amet fermentum lectus luctus. Integer volutpat, nisl
            eget consectetur sagittis, sapien mauris dapibus tellus, sed viverra
            enim leo in sapien. Suspendisse potenti.
          </p>
          <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
            Read More...
          </button>
        </div>
      </div>

      {/* Course Stats Section */}
      <div className="bg-blue-600 text-white mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
              24+
            </h3>
            <p className="text-lg md:text-xl mt-2">Hours of Courses</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
              18+
            </h3>
            <p className="text-lg md:text-xl mt-2">Total Assignments</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
              20+
            </h3>
            <p className="text-lg md:text-xl mt-2">Video Lessons</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
              4,312+
            </h3>
            <p className="text-lg md:text-xl mt-2">Students Enrolled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
