import React, { ChangeEvent } from "react";
import { forecastType, suggestionType } from "../types";
import Forecast from "./Forecast";

type Props = {
  weather: string;
  suggestions: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  suggestionData: (item: suggestionType) => void;
  // onSubmit: () => void;
  forecastData: forecastType | null;
};

const Search = ({
  onInputChange,
  weather,
  suggestions,
  // onSubmit,
  suggestionData,
  forecastData,
}: Props): JSX.Element => {
  return (

      <section
        className="w-full md:max-w-[500px] min-h-screen max-h-auto md:max-h-full text-center p-4 flex flex-col items-center 
         md:px-10 text-white bg-white md:bg-opacity-5 bg-opacity-20 
        backdrop-blur-lg drop-shadow-lg rounded-lg"
      >
        <h1 className="text-4xl font-black mt-5">
          Weather
          {/* <span className="font-thin">Forecast</span> */}
        </h1>
        <p>Enter a place that you want to know the weather</p>
        <div className="flex justify-center mt-5 items-center">
          <input
            type="text"
            value={weather}
            onChange={onInputChange}
            className="p-2 text-black rounded-lg border-2 border-white pl-6"
          />
{/* 
          <button onClick={onSubmit} className="border-2 rounded-r-lg p-2">
            get
          </button> */}
        </div>
        <ul className="z-10 fixed mt-[146px] bg-white flex w-[14em] flex-col items-start rounded-lg ">
          {suggestions.map((item: suggestionType, index: number) => (
            <li
              key={item.name + index}
              onClick={() => suggestionData(item)}
              className="text-black bg-gray-100 cursor-pointer w-full p-1 rounded-b-lg hover:bg-slate-200 flex justify-start pl-4"
            >
              {item?.name + "," + item.country}
            </li>
          ))}
        </ul>
       
        {forecastData ? (
        <Forecast forecastData={forecastData} weather={weather}/>
      ) : ''}
      </section>

  );
};

export default Search;
