import { useState } from "react";
import data from "../data.json";
import { useSearchParams } from "react-router-dom";
import { getImageURL } from "../util/image-util";

export default function TripulantComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [number, setNumber] = useState(searchParams.get("tripulant") || "1");

  const { crew } = data;
  const actualTripulant = crew.find(
    (_, index) => index + 1 === parseInt(number)
  );

  function handleClick(crew) {
    setNumber(crew);
    setSearchParams({ tripulant: crew });
  }

  return (
    <div className="flex-col justify-center space-y-20 md:px-32 px-8 py-4">
      <div className="md:grid md:grid-cols-2 gap-8 flex flex-col-reverse justify-center">
        <div className="flex flex-col-reverse md:flex-col space-y-8">
          <div className="text-2xl md:flex items-center gap-4 hidden">
            <span className="font-bold">02</span>
            <span className="uppercase tracking-widest">Meet your crew</span>
          </div>
          <div className="space-y-8 text-center md:text-start">
            <div>
              <h2 className="text-4xl md:text-5xl uppercase">
                {actualTripulant.role}
              </h2>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl uppercase">
                {actualTripulant.name}
              </h1>
            </div>
            <div>
              <p className="text-lg">{actualTripulant.bio}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mx-auto pb-10 md:mb-0 md:mx-0">
            <div
              onClick={() => handleClick("1")}
              className={`cursor-pointer hover:scale-105 rounded-full p-2 transition-all duration-200 ${
                number === "1" ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              onClick={() => handleClick("2")}
              className={`cursor-pointer hover:scale-105 rounded-full p-2 transition-all duration-200 ${
                number === "2" ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              onClick={() => handleClick("3")}
              className={`cursor-pointer hover:scale-105 rounded-full p-2 transition-all duration-200 ${
                number === "3" ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
            <div
              onClick={() => handleClick("4")}
              className={`cursor-pointer hover:scale-105 rounded-full p-2 transition-all duration-200 ${
                number === "4" ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          </div>
        </div>
        <div className="border-b md:border-0 mb-8 md:mb-0">
          <img
            src={getImageURL("crew", actualTripulant.images.png)}
            alt="tripulantImg"
          />
        </div>
      </div>
    </div>
  );
}
