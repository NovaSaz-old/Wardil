import React from 'react';
import { PiHandHeartLight } from "react-icons/pi";

const CampaignDetails = () => (
  <div className="bg-white p-4 mb-4">
    <h2 className="text-2xl font-bold mb-2">Campaign to provide books for children</h2>
    <div className="flex flex-col md:flex-row">
      <img src="https://imageio.forbes.com/specials-images/imageserve/5fea08b9359920f0dad766b9/The-Nine-Types-of-People-You-Need-in-Your-Success-Circle/960x0.jpg?format=jpg&width=1440" alt="Children reading" className="mr-0 mb-4 md:mr-4 md:mb-0" />
      <div>
        <p className="mb-4">
          We focus on child education which is critical in ensuring that children have access to quality education
          and the opportunity to reach their full potential. Every child needs healthy food and basic educational resources.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded mb-4 md:mb-0">Watch Video</button>
        <div className="mt-4">
          <p><strong>Goals:</strong> $25,000</p>
          <p><strong>Raised:</strong> $21,000</p>
        </div>
      </div>
    </div>
  </div>
);

const DonationButtons = () => (

  <div className="grid grid-cols-2 gap-4 bg-[#0056B3] p-4 ss4:gap-8 ss4:p-8 sm:gap-10 sm:p-10 xl:p-20">
    <button className="rounded-lg border-none bg-[#EAED58] px-8 py-4 text-xl font-medium text-gray-900 shadow-md drop-shadow-sm hover:bg-[#fbff00] lg:py-8">
      Donate Offline
    </button>
    <button className="rounded-lg border-none bg-gray-100 px-8 py-4 text-xl font-medium text-[#0056B3] shadow-md drop-shadow-sm hover:bg-white lg:py-8">
      Donate Online
    </button>
  </div>
);

const DonationInfo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <div>
      <h3 className="text-xl font-semibold mb-2">Please transfer funds to:</h3>
      <p>Fastpay Number: 4534980</p>
      <p>FIB Number: 4534980</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">How your donation helps:</h3>
      <ul className="list-disc pl-5">
        <li>$10 provides school supplies for one child.</li>
        <li>$50 funds a health check-up for a family.</li>
        <li>$100 supports community development projects.</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">For assistance, please contact us at:</h3>
      <p>Email: support@donationpage.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Thank you for your support!</h3>
      <p>Every donation counts and brings us closer to our goal.</p>
    </div>
  </div>
);

const DonateButton = () => (
  <button className="bg-blue-700 text-white w-full py-3 text-xl font-semibold">
    Donate Now
  </button>
);

const DonationPage = () => {
  return (
    <div className="font-sans">
      <CampaignDetails />
      <DonationButtons />
      <DonationInfo />
      <DonateButton />
    </div>
  );
};

export default DonationPage;
