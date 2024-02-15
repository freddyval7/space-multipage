import { useState } from "react";
import data from "../data.json";
import { useSearchParams } from "react-router-dom";

export default function TechnologyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [number, setNumber] = useState(searchParams.get("number") || "1");

  const { technology } = data;
  const actualTechnology = technology.find(
    (_, index) => index + 1 === parseInt(number)
  );

  function handleClick(technology) {
    setNumber(technology);
    setSearchParams({ number: technology });
  }

  return (
    <div className="flex-col justify-center space-y-20 md:px-32 px-8 py-4">
      <div className="text-2xl items-center gap-4 hidden md:flex">
        <span className="font-bold">03</span>
        <span className="uppercase tracking-widest">Space Technology</span>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse container gap-8">
          <div className="flex flex-col items-center md:flex-row space-y-10 md:space-x-10">
            <div className="flex flex-row md:flex-col items-center gap-12">
              <span
                onClick={() => handleClick("1")}
                className={`cursor-pointer border py-4 px-6 rounded-full hover:scale-105 md:text-4xl transition-all duration-200 ${
                  number === "1" && "bg-white text-black"
                }`}
              >
                1
              </span>
              <span
                onClick={() => handleClick("2")}
                className={`cursor-pointer border py-4 px-6 rounded-full hover:scale-105 md:text-4xl transition-all duration-200 ${
                  number === "2" && "bg-white text-black"
                }`}
              >
                2
              </span>
              <span
                onClick={() => handleClick("3")}
                className={`cursor-pointer border py-4 px-6 rounded-full hover:scale-105 md:text-4xl transition-all duration-200 ${
                  number === "3" && "bg-white text-black"
                }`}
              >
                3
              </span>
            </div>
            <div className="space-y-8 text-center md:text-start">
              <div>
                <h1 className="text-6xl md:text-7xl uppercase">
                  {actualTechnology.name}
                </h1>
              </div>
              <div>
                <p className="text-lg">{actualTechnology.description}</p>
              </div>
            </div>
          </div>
        <div>
          <img className="rounded-md mx-auto" src={actualTechnology.images.portrait} alt="technologyImg" />
        </div>
      </div>
    </div>
  );
}
