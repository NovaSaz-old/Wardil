import { useState, useEffect } from "react";
import { TbArrowLeftToArc, TbArrowRightToArc } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://my.admin.wardil.org/api/testimonials", {
          method: "GET",
          headers: {
            "x-api-key": "zJ6Z", 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();
        setTestimonials(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="grid gap-2 rounded-xl bg-white p-8 shadow-md drop-shadow-sm md:grid-cols-12">
      {/* img */}
      <div className="md:col-span-2">
        <img

          src={`http://my.admin.wardil.org/storage/${currentTestimonial.image}`}
          alt={currentTestimonial.name}
          className="w-32 rounded-full shadow drop-shadow-sm"
        />
      </div>

      {/* words */}
      <div className="mt-4 flex flex-col justify-between md:col-span-9 md:mt-0">
        <div className="flex md:mx-8 md:mb-4">
          {Array.from({ length: currentTestimonial.rating || 5 }).map((_, index) => (
            <FaStar
              key={index}
              className="text-lg text-amber-400 drop-shadow"
            />
          ))}
        </div>
        <p className="md:mx-8">{currentTestimonial.message}</p>
        <div className="md:mx-8">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mt-4 text-xl font-medium"
          >
            {currentTestimonial.name}
          </h3>
          <p className="">{currentTestimonial.experience}</p>
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
