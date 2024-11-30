import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeaderImg } from "../components/HeaderImg";
import TitleSection from "../components/itleSection";

const API_URL = "http://my.admin.wardil.org/api";

const CampaignDetails = ({ campaign }) => (
  <div className="flex flex-col md:flex-row items-start bg-white p-8 mb-10 shadow-lg rounded-lg border border-gray-300">
    {/* Left: Image */}
    <div className="md:w-1/2 w-full mb-6 md:mb-0 md:pr-6">
      <img
        src={`http://my.admin.wardil.org/${campaign.image.replace(/\\/g, "/")}`}
        alt={campaign.title}
        className="w-full h-72 object-cover rounded-lg"
      />
    </div>

    {/* Right: Text and Details */}
    <div className="md:w-1/2 w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{campaign.title}</h3>
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        {campaign.details}
      </p>

      <a
        href={campaign.youtube_link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-6 py-2 rounded-md mb-6 hover:bg-red-700 transition duration-300 inline-block"
      >
        Watch Video
      </a>

      <div className="flex justify-between text-gray-600">
        <p>
          <strong>Goals:</strong> ${campaign.goals}
        </p>
        <p>
          <strong>Raised:</strong> ${campaign.raised}
        </p>
      </div>
    </div>
  </div>
);

const DonationButtons = () => (
  <div className="bg-[#0056B3] py-12 rounded-lg shadow-lg mb-12 text-center text-white">
    <h2 className="text-2xl font-bold mb-6">Choose Your Donation Method</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
      <button className="rounded-lg bg-yellow-400 py-4 text-lg font-medium text-gray-900 hover:bg-yellow-500 transition duration-300">
        Donate Offline
      </button>
      <button className="rounded-lg bg-white py-4 text-lg font-medium text-[#0056B3] hover:bg-gray-100 transition duration-300">
        Donate Online
      </button>
    </div>
  </div>
);

const DonationInfo = () => (
  <div className="bg-white p-8 mb-12 shadow-lg rounded-lg text-gray-700">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-2">Transfer Funds To:</h3>
        <p>Fastpay Number: 4534980</p>
        <p>FIB Number: 4534980</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">How Your Donation Helps:</h3>
        <ul className="list-disc pl-5">
          <li>$10 provides school supplies for one child.</li>
          <li>$50 funds a health check-up for a family.</li>
          <li>$100 supports community development projects.</li>
        </ul>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
      <p>Email: support@donationpage.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Thank You for Your Support!</h3>
      <p>Your contribution brings us closer to our goal.</p>
    </div>
  </div>
);

const DonationPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`${API_URL}/campaigns`, {
          headers: {
            "x-api-key": "zJ6Z", // Replace with your actual API key
          },
        });
        setCampaigns(response.data); // Update state with campaign data
      } catch (err) {
        setError("Failed to load campaigns.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="font-sans bg-gray-100 px-2 sm:px-4 lg:px-10 py-6">
      <HeaderImg />
      <TitleSection
        title="Welcome to Our Community"
        subtitle1="We are glad to have you here."
        subtitle2="Explore our latest updates"
      />

      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading campaigns...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : (
        campaigns.map((campaign) => (
          <CampaignDetails key={campaign.id} campaign={campaign} />
        ))
      )}

      <DonationButtons />
      <DonationInfo />
    </div>
  );
};

export default DonationPage;
