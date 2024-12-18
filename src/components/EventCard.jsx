import computer from "../assets/images/computer.png";
import { FaClock } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// "sms:flex-row sms:items-center ss4:text-base flex flex-col text-sm"
export default function EventCard({ courseData }) {
  return (
    <div className="rounded-xl border border-gray-50 bg-white p-4 shadow-md drop-shadow-sm">
      <div className="flex flex-col text-sm sms:flex-row sms:items-center sms2:text-base">
        <img src={computer} alt="computer science event" />
        <div className="mt-2">
          <div className="flex">
            <FaClock className="mx-2 mb-4 mt-1" />
            <p className="overflow-hidden">
              <span>{courseData.start_time}</span> - {courseData.end_time}
            </p>
          </div>
          <div className="flex">
            <BiSolidCategoryAlt className="mx-2 mb-4 mt-1" />
            <p>{courseData.tag}</p>
          </div>
          <div className="flex">
            <FaCalendarDays className="mx-2 mb-4 mt-1" />
            <p>{courseData.date}</p>
          </div>
          <div className="flex">
            <IoLocationSharp className="mx-2 mb-4 mt-1" />
            <p>{courseData.location}</p>
          </div>
        </div>
      </div>
      <div className="m-1 sms:my-4">
        <h3 className="my-2 text-xl font-medium">{courseData.title}</h3>
        <p className="">{courseData.details}</p>
        <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          <Link to="/event-details">See More</Link>
        </button>
      </div>
    </div>
  );
}
