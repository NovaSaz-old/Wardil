import NewsCard from "./NewsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbArrowLeftToArc } from "react-icons/tb";
import { TbArrowRightToArc } from "react-icons/tb";

export default function CardCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        className="p-8"
        centerMode={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
      >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Carousel>
    </div>
  );
}
