import NewsCard from "./NewsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CardCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1343 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 883 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <div className="-z-50">
      <Carousel
        className="mx-5 p-5 ss3:p-7 ss4:p-8"
        dotListClass="react-multi-carousel-dot-list"
        swipeable={true}
        showDots={true}
        arrows={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        itemClass="carousel-item-padding-20-px"
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
