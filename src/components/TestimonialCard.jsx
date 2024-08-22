import { useState } from "react";
import testimonials from "../test/testimonials.json";
import { TbArrowLeftToArc } from "react-icons/tb";
import { TbArrowRightToArc } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import eng from "../assets/images/engineer.png";

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.data.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.data.length) % testimonials.data.length,
    );
  };

  const currentTestimonial = testimonials.data[currentIndex];

  return (
    <div className="grid gap-2 rounded-xl bg-white p-8 shadow-md drop-shadow-sm md:grid-cols-12">
      {/* img */}
      <div className="md:col-span-2">
        <img
          src={eng}
          alt={currentTestimonial.alt}
          className="w-32 rounded-full shadow drop-shadow-sm"
        />
      </div>

      {/* words */}
      <div className="mt-4 flex flex-col justify-between md:col-span-9 md:mt-0">
        <div className="flex md:mx-8 md:mb-4">
          {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
            <FaStar
              key={index}
              className="text-lg text-amber-400 drop-shadow"
            />
          ))}
        </div>
        <p className="md:mx-8">{currentTestimonial.testimonial}</p>
        <div className="md:mx-8">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-4 text-xl font-medium"
          >
            {currentTestimonial.name}
          </h3>
          <p className="">{currentTestimonial.title}</p>
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-end justify-self-end text-end md:col-span-1">
        <button
          className="text-4xl text-green-600 drop-shadow"
          onClick={handlePreviousClick}
        >
          <TbArrowLeftToArc />
        </button>
        <button
          className="text-4xl text-green-600 drop-shadow"
          onClick={handleNextClick}
        >
          <TbArrowRightToArc />
        </button>
      </div>
    </div>
  );
}
