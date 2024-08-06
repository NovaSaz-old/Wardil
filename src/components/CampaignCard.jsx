import { Link } from "react-router-dom";

function CampaignCard() {
  return (
    <div className="m-2 w-96 overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Campaign to provide books for children
        </h2>
        <p className="mt-2 text-gray-700">
          We focus on child education are critical in ensuring that children
          have access to quality education and the opportunity to reach their
          full potential. Every children needs healthy foods.
        </p>
      </div>
      <div className="flex-col items-center justify-between bg-gray-100 p-3">
        <div>
          <p className="h-9 w-32 rounded-md bg-red-500 pt-1 text-center text-white shadow-md">
            Education
          </p>
          <div className="mt-2 flex items-center">
            <p className="font-bold text-gray-900">Goals:</p>
            <p className="ml-2 text-gray-700">$25000</p>
          </div>
          <div className="mt-2 flex items-center">
            <p className="font-bold text-gray-900">Raised:</p>
            <p className="ml-2 text-gray-700">$21000</p>
          </div>
          <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <Link to="/donate">Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
