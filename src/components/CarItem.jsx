import { GiGearStickPattern } from "react-icons/gi";
import { ImNewTab } from "react-icons/im";
import { IoMdSpeedometer } from "react-icons/io";
import { LuFuel } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

function CarItem({ car }) {
  return (
    <Link to={"/listing-details/" + car?.id}>
      <div className="group rounded-xl bg-white border hover:shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden">
        <div className="relative overflow-hidden">
          <h2 className="absolute m-2 bg-amber-500 px-2 rounded-full text-sm text-white z-10 transform group-hover:scale-110 transition-transform duration-300">
            New
          </h2>
          <img
            src={car?.images[0]?.imageUrl}
            width={"100%"}
            height={250}
            className="rounded-t-xl h-[180px] object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <svg
              className="w-4 h-4 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>

        <div className="p-4">
          <h2 className="font-bold text-black text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {car?.listingTitle}
          </h2>

          <Separator />
          <div className="grid grid-cols-3 mt-5">
            <div className="flex flex-col items-center group-hover:text-blue-600 transition-colors duration-300">
              <LuFuel className="text-lg mb-2 transform group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-sm">{car?.mileage} M</h2>
            </div>

            <div className="flex flex-col items-center group-hover:text-green-600 transition-colors duration-300">
              <IoMdSpeedometer className="text-lg mb-2 transform group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-sm">{car?.fuelType}</h2>
            </div>

            <div className="flex flex-col items-center group-hover:text-purple-600 transition-colors duration-300">
              <GiGearStickPattern className="text-lg mb-2 transform group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-sm">{car?.transmission}</h2>
            </div>
          </div>

          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl group-hover:text-green-600 transition-colors duration-300">
              {car.sellingPrice}
            </h2>
            <h2 className="text-blue-500 text-sm flex gap-2 items-center group-hover:text-blue-700 transform group-hover:translate-x-1 transition-all duration-300">
              View Details
              <ImNewTab className="transform group-hover:scale-125 transition-transform duration-300" />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
