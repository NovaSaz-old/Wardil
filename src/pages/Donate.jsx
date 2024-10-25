import React, { useState } from 'react';
import { HeaderImg } from "../components/HeaderImg"; 
import TitleSection from '../components/itleSection';




const CampaignDetails = () => (
  <div className="flex flex-col md:flex-row items-start bg-white p-8 mb-10 shadow-lg rounded-lg border border-gray-300">
    {/* Left: Image */}
    <div className="md:w-1/2 w-full mb-6 md:mb-0 md:pr-6">
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/5fea08b9359920f0dad766b9/The-Nine-Types-of-People-You-Need-in-Your-Success-Circle/960x0.jpg?format=jpg&width=1440"
        alt="Children reading"
        className="w-full h-72 object-cover rounded-lg"
      />
    </div>

    {/* Right: Text and Details */}
    <div className="md:w-1/2 w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Campaign to provide books for children
      </h3>
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        We focus on child education, which is critical in ensuring that children have access to quality education and the opportunity to reach their full potential. Every child needs healthy food and basic educational resources.
      </p>

      <button className="bg-red-600 text-white px-6 py-2 rounded-md mb-6 hover:bg-red-700 transition duration-300">
        Video
      </button>

      <div className="flex justify-between text-gray-600">
        <p><strong>Goals:</strong> $25,000</p>
        <p><strong>Raised:</strong> $21,000</p>
      </div>
    </div>
  </div>
);

const AdditionalDetails = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start bg-white p-8 shadow-md rounded-lg mb-10">
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Campaign to provide books for children
        </h3>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We focus on child education, which is critical in ensuring that children have access to quality education and the opportunity to reach their full potential. Every child needs healthy food and basic educational resources.
        </p>
      </div>

      <div className="md:w-1/2 w-full">
        {showMore && (
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            This campaign aims to provide resources to children in underserved communities. By supporting this cause, you help us deliver books, learning materials, and basic necessities to children. We also focus on nutrition, ensuring that every child receives healthy meals while gaining access to quality education. This program is essential for fostering long-term growth and development.
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-700 font-semibold hover:text-blue-900"
        >
          {showMore ? 'Show Less' : 'Read More...'}
        </button>
      </div>
    </div>
  );
};

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

const DonationPage = () => (
  <div className="font-sans bg-gray-100 px-2 sm:px-4 lg:px-10 py-6">
<HeaderImg />
<TitleSection
  title="Welcome to Our Community"
  subtitle1="We are glad to have you here."
  subtitle2="Explore our latest updates"
/>
    <CampaignDetails />
    <DonationButtons />
    <DonationInfo />
  </div>
);

export default DonationPage;
