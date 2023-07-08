import React from "react";
import { forecastType, suggestionType } from "../types";

type Props = {
  forecastData: forecastType | null;
  weather: string;
};
const Forecast = ({ forecastData, weather }: Props): JSX.Element => {
  const list = forecastData?.list[0];
  const temp = Math.round(list?.main?.temp);
  const maxTemp = Math.round(list?.main?.temp_max);
  const minTemp = Math.round(list?.main?.temp_min);
  const forecastList = forecastData?.list.splice(0, 7);

  return (
    <>
      <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto drop-shadow-lg z-0">
        <h1 className="text-2xl font-extrabold text-black">
          {forecastData?.name}
          <span className="font-thin">, {forecastData?.country}</span>
        </h1>
        <h1 className="text-2xl">
          {temp}
          <sup>o</sup>
        </h1>
        <p>{list?.weather[0].main}</p>
        <div className="flex justify-center">
          <p>
            H:{Math.ceil(maxTemp)} <sup>o</sup>, M:{Math.floor(minTemp)}{" "}
            <sup>o</sup>
          </p>
        </div>
        <div className="flex mt-4 pb-2 mb-5 justify-center">
          {forecastList?.map((item, index) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0"
              key={index}
            >
              <h1>
                {index === 0 ? "now" : new Date(item.dt * 1000).getHours()}
              </h1>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <h1>
                {Math.round(item?.main?.temp)}
                <sup>o</sup>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
