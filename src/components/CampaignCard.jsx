import { Link } from "react-router-dom";

function CampaignCard() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-96">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Campaign to provide books for children
        </h2>
        <p className="text-gray-700 mt-2">
          We focus on child education are critical in ensuring that children
          have access to quality education and the opportunity to reach their
          full potential. Every children needs healthy foods.
        </p>
      </div>
      <div className="bg-gray-100 p-3 justify-between items-center flex-col">
        <div>
          <p className="text-white w-32 h-9 pt-1 bg-red-500 rounded-md text-center shadow-md ">
            Education
          </p>
          <div className="flex items-center mt-2">
            <p className="text-gray-900 font-bold">Goals:</p>
            <p className="text-gray-700 ml-2">$25000</p>
          </div>
          <div className="flex items-center mt-2">
            <p className="text-gray-900 font-bold">Raised:</p>
            <p className="text-gray-700 ml-2">$21000</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/donate">Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
