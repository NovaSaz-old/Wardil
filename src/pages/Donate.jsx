import { PiHandHeartLight } from "react-icons/pi";
import hero2sm from "../assets/images/hero2sm.png";
import fastpay from "../assets/logos/fastpay.png";
import fib from "../assets/logos/fib.png";

export default function Donate() {
  return (
    <div>
      <img src={hero2sm} alt="" />
      <div className="bg-[#F5F5DC]">
        <div className="p-10 text-center">
          <PiHandHeartLight className="mx-auto text-6xl" />
          <h3 className="text-4xl font-semibold">Donate</h3>
          <h3 className="text-3xl">Your donation makes a difference</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-[#0056B3] p-4 ss4:gap-8 ss4:p-8 sm:gap-10 sm:p-10 xl:p-20">
        <button className="rounded-lg border-none bg-[#EAED58] px-8 py-4 text-xl font-medium text-gray-900 shadow-md drop-shadow-sm hover:bg-[#fbff00] lg:py-8">
          Donate Offline
        </button>
        <button className="rounded-lg border-none bg-gray-100 px-8 py-4 text-xl font-medium text-[#0056B3] shadow-md drop-shadow-sm hover:bg-white lg:py-8">
          Donate Online
        </button>
      </div>
      <div className="grid gap-8 p-6 ss2:p-8 md:grid-cols-2 md:grid-rows-2 md:p-16">
        <div className="md:ml-2">
          <h6 className="mb-2 text-xl font-semibold">
            Please transfer founds to:
          </h6>
          <p>Bank Number: ex</p>
          <p>Bank Number: 4534980</p>
        </div>
        <div className="md:ml-2">
          <h6 className="mb-2 text-xl font-semibold">
            Please transfer founds to:
          </h6>
          <div className="flex">
            <img src={fastpay} className="mr-2" />
            <p>Fastpay Number: 4534980</p>
          </div>
          <div className="flex">
            <img src={fib} className="mr-2" />
            <p>Fastpay Number: 4534980</p>
          </div>
        </div>
        <div className="md:ml-2">
          <h6 className="mb-2 text-xl font-semibold">
            For assistance, please contact us at:
          </h6>
          <p>Email:support@donationpage.com</p>
          <p>{`Phone: (123) 456-7890`}</p>
        </div>
        <div className="md:ml-2">
          <h6 className="text-xl font-semibold">Thank you for your support!</h6>
          <h6 className="text-xl font-semibold">
            Every donation counts and brings us closer to our goal.
          </h6>
        </div>
      </div>
    </div>
  );
}
