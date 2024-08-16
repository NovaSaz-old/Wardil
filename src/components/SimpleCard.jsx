import lArrow from "../assets/generalSVGs/leftArrowButton.svg";

export default function SimpleCard() {
  return (
    <div className="mb-8 rounded-sm bg-white px-8 py-3 shadow-lg">
      <div className="my-2 h-20 w-20 rounded-full bg-blue-500"></div>
      <h2 className="mb-1 text-2xl font-semibold">Healthy Food</h2>
      <p>
        Our mission is to ensure that every child has access to healthy,
        nutrtious meals regardless of their socio-economic status.
      </p>
      <div className="flex">
        <button className="mt-4 flex">
          <h6 className="mr-2 mt-1 font-medium italic">know more</h6>
          <img src={lArrow} />
        </button>
      </div>
    </div>
  );
}
