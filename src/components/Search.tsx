import React, { ChangeEvent } from "react";
import { suggestionType } from "../types";
import { BG_IMG } from "../utils/constant";

type Props = {
  weather: string;
  suggestions: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  suggestionData: (item: suggestionType) => void;
  onSubmit: () => void;
};

const Search = (props as Props): JSX.Element => {
  const {onInputChange,weather,suggestions,onSubmit,suggestionData} = props;
  return (
    <main
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      <section
        className="w-full md:max-w-[500px] h-full md:max-h-[500px] text-center p-4 flex flex-col items-center 
        justify-center md:px-10 text-white bg-white md:bg-opacity-5 bg-opacity-20 
        backdrop-blur-lg drop-shadow-lg rounded-lg"
      >
        <h1 className="text-4xl font-black ">
          Weather<span className="font-thin">Forecast</span>
        </h1>
        <p>Enter a place that you want to know the weather</p>
        <div className="flex justify-center mt-5 items-center">
          <input
            type="text"
            value={weather}
            onChange={onInputChange}
            className="p-2 text-black rounded-l-lg border-2 border-white pl-6"
          />

          <button onClick={onSubmit} className="border-2 rounded-r-lg p-2">
            get
          </button>
        </div>
        <ul className="bg-white flex w-3/5 flex-col items-start rounded-lg ">
          {suggestions.map((item: suggestionType, index: number) => (
            <li
              key={item.name + index}
              onClick={() => suggestionData(item)}
              className="text-black bg-gray-100 w-full p-1 rounded-b-lg hover:bg-slate-200 flex justify-start pl-4"
            >
              {item?.name + "," + item.country}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Search;
