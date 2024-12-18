import { Link } from "react-router-dom";
import cardImage from "../assets/images/cardImage.png";

function CampaignCard({ campaignInfo }) {
  return (
    <div className="m-2 w-80 rounded-lg bg-white shadow-md drop-shadow-md xl:w-96">
      <div className="p-4 xl:p-6">
        <img src={cardImage} className="mx-auto mb-4 w-full" />
        <h2 className="text-2xl font-semibold text-gray-900">
          {campaignInfo.title}
        </h2>
        <p className="mt-2 overflow-hidden text-gray-700">
          {campaignInfo.details}
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
              <span className="ml-2 font-normal text-gray-700">
                {campaignInfo.goals}
              </span>
            </p>
            <p className="font-semibold text-gray-900">
              Raised:
              <span className="ml-2 font-normal text-gray-700">
                {campaignInfo.raised}
              </span>
            </p>
          </div>
          <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-lg font-medium text-white hover:bg-blue-700">
            <Link to="/donate">Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
