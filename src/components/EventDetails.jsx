import eventDetailsPng from "../assets/images/EventDetails.png";
import itMan from "../assets/images/Anu.png";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

function EventDetails() {
  return (
    <>
      <div className="p-4 lg:p-20">
        <div className="mx-auto grid md:grid-cols-12 md:gap-0">
          <img
            src={eventDetailsPng}
            alt="Event Picture"
            className="drop-shadow md:col-span-5"
          />
          <div className="mt-4 flex flex-col justify-between md:col-span-7 md:mt-0">
            <div>
              <div className="rounded bg-blue-600 px-8 py-4 text-center text-white drop-shadow-sm">
                <h3 className="text-3xl font-semibold drop-shadow-sm">
                  UX & Web Design Master Course:
                </h3>
                <p className="text-2xl drop-shadow-sm">
                  Strategy, Design, Development
                </p>
              </div>
              <p className="p-6 text-xl">
                Learn how to apply User Experience (UX) principles to your
                website designs, code a variety of sites, and increase sales and
                returns!
              </p>
            </div>
            <div>
              <button className="rounded bg-blue-600 px-8 py-4 text-white drop-shadow hover:bg-blue-800">
                <p className="drop-shadow">Register Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grid p-8 lg:grid-cols-12">
          {/** right column */}
          <div className="lg:col-span-2">
            <img src={itMan} alt="" />
            <div className="mt-4">
              <div className="mt-4 flex">
                <FaStar className="mr-4 text-xl text-amber-500" />
                <p>
                  <b>4.5</b> Instructor Rating
                </p>
              </div>
              <div className="mt-2 flex">
                <MdReviews className="mr-4 text-xl text-amber-500" />
                <p>
                  <b>28,707</b> Reviews
                </p>
              </div>
              <div className="mt-2 flex">
                <FaUserGraduate className="mr-4 text-xl text-amber-500" />
                <p>
                  <b>155,242</b> Student
                </p>
              </div>
              <div className="mt-2 flex">
                <FaPlayCircle className="mr-4 text-xl text-amber-500" />
                <p>
                  <b>8</b> Courses
                </p>
              </div>
            </div>
          </div>
          {/** Left column */}
          <div className="lg:col-span-10">
            <h3 className="text-4xl font-semibold text-gray-700">
              Instructor Name
            </h3>
            <h6 className="text-xl font-medium text-gray-500">
              29 - Year UX + Design
            </h6>
            <br />
            <div className="border-b border-gray-300"></div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              est asperiores deleniti sit suscipit magni officia, laborum
              ratione! Facere sit autem nemo deleniti expedita voluptate ad sint
              illo quisquam. Voluptates! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae est asperiores deleniti sit suscipit
              magni officia, laborum ratione! Facere sit autem nemo deleniti
              expedita voluptate ad sint illo quisquam. Voluptates! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Beatae est asperiores
              deleniti sit suscipit magni officia, laborum ratione! Facere sit
              autem nemo deleniti expedita voluptate ad sint illo quisquam.
              Voluptates! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Beatae est asperiores deleniti sit suscipit magni officia,
              laborum ratione! Facere sit autem nemo deleniti expedita voluptate
              ad sint illo quisquam. Voluptates! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Beatae est asperiores deleniti sit
              suscipit magni officia, laborum ratione! Facere sit autem nemo
              deleniti expedita voluptate ad sint illo quisquam. Voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              est asperiores deleniti sit suscipit magni officia, laborum
              ratione! Facere sit autem nemo deleniti expedita voluptate ad sint
              illo quisquam. Voluptates!
            </p>
            <button className="font-bold text-blue-900 hover:text-blue-600">
              Read More...
            </button>
          </div>
        </div>
      </div>
      <div className="grid bg-blue-600 px-12 py-4 text-center drop-shadow-sm lg:grid-cols-4">
        <div>
          <h3 className="text-4xl font-semibold text-amber-400 drop-shadow-sm">
            24+
          </h3>
          <h6 className="text-2xl font-medium text-white drop-shadow-sm">
            Hours of Courses
          </h6>
        </div>
        <div>
          <h3 className="text-4xl font-semibold text-amber-400 drop-shadow-sm">
            18+
          </h3>
          <h6 className="text-2xl font-medium text-white drop-shadow-sm">
            Total Assignments
          </h6>
        </div>
        <div>
          <h3 className="text-4xl font-semibold text-amber-400 drop-shadow-sm">
            20+
          </h3>
          <h6 className="text-2xl font-medium text-white drop-shadow-sm">
            Video Lessons
          </h6>
        </div>
        <div>
          <h3 className="text-4xl font-semibold text-amber-400 drop-shadow-sm">
            4,312+
          </h3>
          <h6 className="text-2xl font-medium text-white drop-shadow-sm">
            Students Enrolled
          </h6>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
