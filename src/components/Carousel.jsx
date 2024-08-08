import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Carousel({ slides }) {
  // THIS IS ONLY FOR TESTING PURPOSES
  // ==================================
  // const slides = [
  //   {
  //     id: 1,
  //     path: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_731844_16691416235032549.jpg",
  //   },
  //   {
  //     id: 2,
  //     path: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1",
  //   },
  //   {
  //     id: 3,
  //     path: "https://townsquare.media/site/691/files/2020/07/GettyImages-103131833.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
  //   },
  //   {
  //     id: 4,
  //     path: "https://cats.com/wp-content/uploads/2022/12/group-of-cats-compressed.jpg",
  //   },
  //   {
  //     id: 5,
  //     path: "https://mrwallpaper.com/images/hd/this-cute-and-cuddly-duck-will-keep-you-company-1y47ri9c45164k84.jpg",
  //   },
  // ];

  let [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }
  function nextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="relative m-auto mt-11 h-[60%] w-[95%] overflow-hidden md:w-[60%]">
      <div
        className="duration-400 flex transition ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.path}
            alt={`Image ${slide.id}`}
            className="h-full"
          />
        ))}
      </div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between px-5 text-white">
        <button
          onClick={previousSlide}
          className="rounded-full opacity-70 shadow shadow-slate-500 md:text-xl"
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full opacity-70 shadow shadow-slate-500 md:text-xl"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div className="absolute bottom-[3%] mt-20 flex w-full justify-center gap-3">
        {slides.map((slide, index) => {
          return (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              key={"circle" + index}
              className={`h-3 w-3 cursor-pointer rounded-full shadow-sm shadow-slate-700 md:shadow-slate-500 ${
                index == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
