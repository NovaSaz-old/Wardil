import heroImage from "../assets/images/Hero.png";
export default function Home() {
  return (
    <div className="bg-gray-50">
      {/** Hero Section */}
      <div className="px-8 py-4 md:mx-20 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-8 md:px-16 md:py-20">
        {/** left part */}
        <div className="mb-8 mt-4">
          <h1 className="mb-4 mt-4 text-4xl font-bold md:mb-8 md:text-8xl">
            Kindness and charity can change lives
          </h1>
          <p className="md:text-xl">
            Join us in creating a future where every life is valued by
            supporting our education, healthcare, and livelihood initiatives
          </p>
          <button className="mt-6 rounded border-2 border-blue-700 bg-white px-4 py-2">
            Donate Now!
          </button>
        </div>
        {/** right part */}
        <img src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
}
