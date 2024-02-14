import { useState } from "react";
import data from "../data.json";
import { useSearchParams } from "react-router-dom";

export default function DestinationComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [planet, setPlanet] = useState(searchParams.get("planet") || "moon");

  const { destinations } = data;

  const actualPlanet = destinations.find(
    (destination) => destination.name.toLowerCase() === planet
  );

  function handleClick(destination) {
    setPlanet(destination);
    setSearchParams({ planet: destination });
  }

  return (
    <div className="flex-col justify-center space-y-20">
      <div className="text-2xl items-center gap-4 hidden md:flex">
        <span className="font-bold">01</span>
        <span className="uppercase tracking-widest">Pick your destination</span>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-8 container justify-center">
        <div>
          <img src={actualPlanet.images.png} alt="planetImg" />
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4 md:justify-start justify-center">
            <span
              onClick={() => handleClick("moon")}
              className={`cursor-pointer hover:scale-105 transition-all duration-200 ${
                planet === "moon" && "border-b-2"
              }`}
            >
              MOON
            </span>
            <span
              onClick={() => handleClick("mars")}
              className={`cursor-pointer hover:scale-105 transition-all duration-200 ${
                planet === "mars" && "border-b-2"
              }`}
            >
              MARS
            </span>
            <span
              onClick={() => handleClick("europa")}
              className={`cursor-pointer hover:scale-105 transition-all duration-200 ${
                planet === "europa" && "border-b-2"
              }`}
            >
              EUROPA
            </span>
            <span
              onClick={() => handleClick("titan")}
              className={`cursor-pointer hover:scale-105 transition-all duration-200 ${
                planet === "titan" && "border-b-2"
              }`}
            >
              TITAN
            </span>
          </div>
          <div className="space-y-8 text-center md:text-start">
            <div>
              <h1 className="text-7xl md:text-8xl uppercase">
                {actualPlanet.name}
              </h1>
            </div>
            <div>
              <p className="text-lg">{actualPlanet.description}</p>
            </div>
            <hr />
            <div className="flex items-center justify-around">
              <div className="space-y-2">
                <span>AVG. DISTANCE</span>
                <h2 className="text-4xl">{actualPlanet.distance}</h2>
              </div>
              <div className="space-y-2">
                <span>EST. TRAVEL TIME</span>
                <h2 className="text-4xl">{actualPlanet.travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
