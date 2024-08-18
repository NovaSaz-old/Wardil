import computer from "../assets/images/computer.png";
import clock from "../assets/homeSVGs/clock 1.svg";
import categories from "../assets/homeSVGs/categories 1.svg";
import schedule from "../assets/homeSVGs/schedule 1.svg";
import pin from "../assets/homeSVGs/pin 1.svg";

export default function EventCard() {
  return (
    <div className="rounded-xl border bg-white p-4 shadow drop-shadow-sm">
      <div>
        <div className="ss3:flex-row ss3:items-center flex flex-col">
          <img src={computer} alt="Computer Course" />
          <div className="ml-4 flex flex-col">
            <div className="container mt-1 flex">
              <img src={clock} alt="colck svg" className="mt-2 h-8" />
              <p className="sms:mt-4 ml-2 mt-2 text-xs sm:text-sm md:text-base">
                00:00am - 00:00pm
              </p>
            </div>
            <div className="mt-3 flex">
              <img src={categories} alt="categories svg" />
              <p className="ms:text-base ml-2 mt-2 text-xs">Computer</p>
            </div>
            <div className="mt-3 flex">
              <img src={schedule} alt="schedule svg" />
              <p className="ms:text-base ml-2 mt-2 text-xs">On May 15th</p>
            </div>
            <div className="mt-3 flex">
              <img src={pin} alt="schedule svg" className="h-8 md:ml-[-3px]" />
              <p className="ms:text-base ml-[0.35rem] mt-2 text-xs md:ml-2">
                Ontario, Canada
              </p>
            </div>
          </div>
        </div>
        <h3 className="mt-1 text-xl font-semibold">Computer Course</h3>
        <p>
          {`Ah, you’ve got the key ingredients for a successful computer training
          institute right there! Let’s break it ou can have the best training
          program, but if no one have the best training program.`}
        </p>
      </div>
    </div>
  );
}
