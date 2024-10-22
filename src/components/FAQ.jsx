// import { IoCloseOutline } from "react-icons/io5";

// export default function FAQ() {
//   return (
//     <div className="bg-[#E6EEF7] px-4 py-8 ss:p-8 sm:p-24 xl:px-60 xl:py-32">
//       <div className="grid grid-cols-1 gap-8 xl:gap-12">
//         <div className="grid gap-4">
//           <h3
//             style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//             className="mb-0 text-center text-4xl font-semibold"
//           >
//             FAQ's - Frequently Asked Questions
//           </h3>
//           <p className="text-center text-xl font-medium">
//             As you might imagine, real estate agents field quite a few questions
//             every day. People are naturally curious, and it's an agent's job to
//             guide.
//           </p>
//         </div>

//         {/** First card with a close button */}
//         <div className="rounded-xl bg-white p-8 shadow-md drop-shadow-sm sm:p-10">
//           <div className="flex justify-between">
//             <h3
//               style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//               className="text-2xl font-semibold"
//             >
//               What Is A Charity Organization?
//             </h3>
//             <button className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-gray-200">
//               <IoCloseOutline
//                 style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//                 className="text-4xl text-gray-600"
//               />
//             </button>
//           </div>
//           <p className="mt-4 text-xl">
//             A charity organization is a non-profit organization that aims to
//             help people, animals, or the environment by providing various forms
//             of assistance or support.
//           </p>
//         </div>

//         {/** Blue card sized buttons */}

//         <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
//           <h3
//             style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//             className="text-left text-2xl font-semibold text-white"
//           >
//             What Kinds Of Services Do Charity Organizations Offer?
//           </h3>
//         </button>
//         <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
//           <h3
//             style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//             className="text-left text-2xl font-semibold text-white"
//           >
//             How Can I Donate To A Charity Organization?
//           </h3>
//         </button>
//         <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
//           <h3
//             style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
//             className="text-left text-2xl font-semibold text-white"
//           >
//             Can I Volunteer For A Charity Organization?
//           </h3>
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import arrow icons

export default function FAQ() {
  // State to track which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle FAQ open or close
  };

  return (
    <div className="bg-[#E6EEF7] px-4 py-8 ss:p-8 sm:p-24 xl:px-60 xl:py-32">
      <div className="grid grid-cols-1 gap-8 xl:gap-12">
        <div className="grid gap-4">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="mb-0 text-center text-4xl font-semibold"
          >
            FAQ's - Frequently Asked Questions
          </h3>
          <p className="text-center text-xl font-medium">
            As you might imagine, real estate agents field quite a few questions
            every day. People are naturally curious, and it's an agent's job to
            guide.
          </p>
        </div>

        {/** First card with toggleable content */}
        <div className="rounded-xl bg-white p-8 shadow-md drop-shadow-sm sm:p-10">
          <div className="flex justify-between items-center">
            <h3
              onClick={() => toggleFAQ(1)}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="cursor-pointer text-2xl font-semibold"
            >
              What Is A Charity Organization?
            </h3>
            <button
              onClick={() => toggleFAQ(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-gray-200"
            >
              {openFAQ === 1 ? (
                <IoIosArrowUp className="text-3xl text-gray-600" />
              ) : (
                <IoIosArrowDown className="text-3xl text-gray-600" />
              )}
            </button>
          </div>
          {openFAQ === 1 && (
            <p className="mt-4 text-xl">
              A charity organization is a non-profit organization that aims to
              help people, animals, or the environment by providing various forms
              of assistance or support.
            </p>
          )}
        </div>

        {/** Blue card buttons with toggleable content */}
        <div className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <div className="flex justify-between items-center">
            <h3
              onClick={() => toggleFAQ(2)}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="cursor-pointer text-left text-2xl font-semibold text-white"
            >
              What Kinds Of Services Do Charity Organizations Offer?
            </h3>
            <button
              onClick={() => toggleFAQ(2)}
              className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-blue-600"
            >
              {openFAQ === 2 ? (
                <IoIosArrowUp className="text-3xl text-white" />
              ) : (
                <IoIosArrowDown className="text-3xl text-white" />
              )}
            </button>
          </div>
          {openFAQ === 2 && (
            <p className="mt-4 text-lg text-white">
              Charity organizations offer various services such as providing food, education, shelter, and healthcare to those in need.
            </p>
          )}
        </div>

        <div className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <div className="flex justify-between items-center">
            <h3
              onClick={() => toggleFAQ(3)}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="cursor-pointer text-left text-2xl font-semibold text-white"
            >
              How Can I Donate To A Charity Organization?
            </h3>
            <button
              onClick={() => toggleFAQ(3)}
              className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-blue-600"
            >
              {openFAQ === 3 ? (
                <IoIosArrowUp className="text-3xl text-white" />
              ) : (
                <IoIosArrowDown className="text-3xl text-white" />
              )}
            </button>
          </div>
          {openFAQ === 3 && (
            <p className="mt-4 text-lg text-white">
              You can donate through various means such as online donations, direct transfers, or fundraising events organized by the charity.
            </p>
          )}
        </div>

        <div className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <div className="flex justify-between items-center">
            <h3
              onClick={() => toggleFAQ(4)}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="cursor-pointer text-left text-2xl font-semibold text-white"
            >
              Can I Volunteer For A Charity Organization?
            </h3>
            <button
              onClick={() => toggleFAQ(4)}
              className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-blue-600"
            >
              {openFAQ === 4 ? (
                <IoIosArrowUp className="text-3xl text-white" />
              ) : (
                <IoIosArrowDown className="text-3xl text-white" />
              )}
            </button>
          </div>
          {openFAQ === 4 && (
            <p className="mt-4 text-lg text-white">
              Yes! Most charity organizations rely on volunteers to assist in various initiatives and events to help support their mission.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
