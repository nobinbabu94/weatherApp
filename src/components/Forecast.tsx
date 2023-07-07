import React from "react";
import { forecastType, suggestionType } from "../types";

type Props = {
  forecastData: forecastType | null;
  weather: string;
};
const Forecast = ({ forecastData, weather }: Props): JSX.Element => {
  const list = forecastData?.list[0];
  const temp = Math.round(list?.main?.temp - 273.15);



//   console.log(weather, "ccccccccccciiiiiiiiiiiitttttttttyyyyyyyyyyyy");
  return (
    <>
      {weather !== forecastData?.name ? (
        "not found"
      ) : (
        <div className="mt-5 flex flex-col">
          <h1 className="text-2xl font-extrabold text-black">
            {forecastData?.name}
            <span className="font-thin">, {forecastData?.country}</span>
          </h1>
          <h1>
            {temp}
            <sup>o</sup>
          </h1>
        </div>
      )}
    </>
  );
};

export default Forecast;
