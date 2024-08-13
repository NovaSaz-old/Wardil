import { Link } from "react-router-dom";
import cardImage from "../assets/images/cardImage.png";

function CampaignCard() {
  return (
    <div className="m-2 w-96 overflow-hidden rounded-lg bg-white shadow-md drop-shadow-md">
      <div className="p-6">
        <img src={cardImage} className="mx-auto mb-4 w-full" />
        <h2 className="text-2xl font-semibold text-gray-900">
          Campaign to provide books for children
        </h2>
        <p className="mt-2 text-gray-700">
          We focus on child education are critical in ensuring that children
          have access to quality education and the opportunity to reach their
          full potential. Every children needs healthy foods.
        </p>
      </div>
      <div className="flex-col items-center justify-between bg-gray-50 p-3">
        <div>
          <p className="h-10 w-32 rounded-md bg-red-500 pt-2 text-center text-white shadow-md drop-shadow-sm">
            Education
          </p>
          <div className="mt-4 flex items-center justify-between">
            <p className="font-semibold text-gray-900">
              Goals:
              <span className="ml-2 font-normal text-gray-700">$25000</span>
            </p>
            <p className="font-semibold text-gray-900">
              Raised:
              <span className="ml-2 font-normal text-gray-700">$21000</span>
            </p>
          </div>
          <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-xl font-semibold text-white hover:bg-blue-700">
            <Link to="/donate">Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
