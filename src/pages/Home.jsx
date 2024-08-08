import heroImage from "../assets/images/Hero.png";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/** Hero Section */}
      <div className="grid grid-cols-2">
        <h1>shesma</h1>
        <img src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
}
