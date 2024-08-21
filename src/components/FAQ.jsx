import { IoCloseOutline } from "react-icons/io5";

export default function FAQ() {
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

        {/** First card with a close button */}
        <div className="rounded-xl bg-white p-8 shadow-md drop-shadow-sm sm:p-10">
          <div className="flex justify-between">
            <h3
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
              className="text-2xl font-semibold"
            >
              What Is A Charity Organization?
            </h3>
            <button className="flex h-10 w-10 items-center justify-center rounded-full p-1 text-center hover:bg-gray-200">
              <IoCloseOutline
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
                className="text-4xl text-gray-600"
              />
            </button>
          </div>
          <p className="mt-4 text-xl">
            A charity organization is a non-profit organization that aims to
            help people, animals, or the environment by providing various forms
            of assistance or support.
          </p>
        </div>

        {/** Blue card sized buttons */}

        <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-left text-2xl font-semibold text-white"
          >
            What Kinds Of Services Do Charity Organizations Offer?
          </h3>
        </button>
        <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-left text-2xl font-semibold text-white"
          >
            How Can I Donate To A Charity Organization?
          </h3>
        </button>
        <button className="rounded-xl bg-blue-700 p-8 shadow-md drop-shadow-sm hover:bg-blue-800 sm:p-10">
          <h3
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
            className="text-left text-2xl font-semibold text-white"
          >
            Can I Volunteer For A Charity Organization?
          </h3>
        </button>
      </div>
    </div>
  );
}
