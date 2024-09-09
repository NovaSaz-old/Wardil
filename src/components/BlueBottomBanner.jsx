import { PiFlowerLight, PiHandHeart } from "react-icons/pi";
import { PiListHeart } from "react-icons/pi";

export default function BlueBottomBanner() {
  return (
    <div className="flex items-center justify-center bg-[#BFD2E7]">
      <div className="mx-2 flex items-center justify-center p-2">
        <PiFlowerLight className="text-4xl" />
        <p className="text-2xl">Brighter Tomorrow</p>
      </div>
      <div className="mx-2 flex items-center justify-center p-2">
        <PiListHeart className="text-4xl font-extralight" />
        <p className="text-2xl">Brighter Tomorrow</p>
      </div>
      <div className="x-2 mx-2 flex items-center justify-center">
        <PiHandHeart className="text-4xl" />
        <p className="text-2xl">Brighter Tomorrow</p>
      </div>
    </div>
  );
}
