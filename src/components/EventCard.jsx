import computer from "../assets/images/computer.png";
import { FaClock } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
// "sms:flex-row sms:items-center ss4:text-base flex flex-col text-sm"
export default function EventCard() {
  return (
    <div className="rounded-xl border border-gray-50 bg-white p-4 shadow-md drop-shadow-sm">
      <div className="flex flex-col text-sm sms:flex-row sms:items-center sms2:text-base">
        <img src={computer} alt="computer science event" />
        <div className="mt-2">
          <div className="flex">
            <FaClock className="mx-2 mb-4 mt-1" />
            <p className="overflow-hidden">00:00 am - 00:00 pm</p>
          </div>
          <div className="flex">
            <BiSolidCategoryAlt className="mx-2 mb-4 mt-1" />
            <p>Computer</p>
          </div>
          <div className="flex">
            <FaCalendarDays className="mx-2 mb-4 mt-1" />
            <p>May 15th</p>
          </div>
          <div className="flex">
            <IoLocationSharp className="mx-2 mb-4 mt-1" />
            <p>Ontario, Canada</p>
          </div>
        </div>
      </div>
      <div className="m-1 sms:my-4">
        <h3 className="my-2 text-xl font-medium">Computer Course</h3>
        <p className="">
          Ah, you’ve got the key ingredients for a successful computer training
          institute right there! Let’s break it ou can have the best training
          program, but if no one have the best training program.
        </p>
      </div>
    </div>
  );
}
