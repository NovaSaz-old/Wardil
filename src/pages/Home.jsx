import Carousel from "../components/Carousel";
import image from "../assets/pictures/1.png";

export default function Home() {
  const slides = [
    {
      id: 1,
      path: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_731844_16691416235032549.jpg",
    },
    {
      id: 2,
      path: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1",
    },
    {
      id: 3,
      path: "https://townsquare.media/site/691/files/2020/07/GettyImages-103131833.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    },
    {
      id: 4,
      path: "https://cats.com/wp-content/uploads/2022/12/group-of-cats-compressed.jpg",
    },
    {
      id: 5,
      path: "https://mrwallpaper.com/images/hd/this-cute-and-cuddly-duck-will-keep-you-company-1y47ri9c45164k84.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">
      <h1>Home Page</h1>
      <Carousel slides={slides} />
    </div>
  );
}
