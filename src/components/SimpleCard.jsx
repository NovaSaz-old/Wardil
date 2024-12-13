import lArrow from "../assets/generalSVGs/leftArrowButton.svg";

export default function SimpleCard({ missionData }) {
  return (
    <div className="mb-8 rounded-sm bg-white px-8 py-3 shadow-lg">
      <div className="my-2 h-20 w-20 rounded-full bg-blue-500"></div>
      <h2 className="mb-1 text-2xl font-semibold">{missionData.title}</h2>
      <p>{missionData.details}</p>
      <div className="flex">
        <button className="mt-4 flex">
          <h6 className="mr-2 mt-1 font-medium italic">know more</h6>
          <img src={lArrow} />
        </button>
      </div>
    </div>
  );
}
