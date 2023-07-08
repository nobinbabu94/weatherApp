import React from "react";
import { forecastType, suggestionType } from "../types";

type Props = {
  forecastData: forecastType | null;
  weather: string;
};
const Forecast = ({ forecastData, weather }: Props): JSX.Element => {
  const list = forecastData?.list[0];
  const temp = Math.round(list?.main?.temp - 273.15);
  const maxTemp = Math.round(list?.main?.temp_max - 273.15);
  const minTemp = Math.round(list?.main?.temp_min - 273.15);
  const forecastList = forecastData?.list.splice(0,7)
  return (
    <>
      <div className="mt-5 flex flex-col">
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
        <div className="flex mt-4 pb-2 mb-5">
          {forecastList?.map((item, index) => (
            <div className="inline-block text-center w-[50px] px-5" key={index}>
              <h1>
                {index === 0 ? "now" : new Date(item.dt * 1000).getHours()}
              </h1>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <h1>
                {Math.round(item?.main?.temp - 273.15)}
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
