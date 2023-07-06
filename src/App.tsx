import React from "react";
import "./App.css";
import { BG_IMG } from "./utils/constant";
import { useState, ChangeEvent } from "react";

const App = (): JSX.Element => {
  const [weather, setWeather] = useState<string>('');
  const [suggestions, setSuggestions] = useState<[]>([]);

  const apiCall = (value: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setWeather(value);

    if (value === '') return
    apiCall(value);
  };

  console.log(suggestions);

  // const fetchApi = async () => {
  //   const data = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${process.env.REACT_APP_API_KEY}`
  //   );
  //   const json = await data.json();
  //   setWeatherData(json);

  //   console.log(suggestions);
  // };

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
            className="p-2 text-black rounded-l-lg border-2 border-white"
          />

          <button className="border-2 rounded-r-lg p-2">get</button>
        </div>
        <div>
          {/* {suggestions.map((item : {name:string}) =>(
            <p>{item.name}</p>
          ))} */}
        </div>

        {/* <ol className="bg-white flex w-3/5 flex-col justify-center items-center rounded-lg">
          {suggestions.map((item: { name: string }) => (
            <li className="text-black bg-gray-200 w-full p-1 mt-1 rounded-t-lg ">
              {item?.name}
            </li>
          ))}
        </ol> */}
      </section>
    </main>
  );
};

export default App;
// className='hover:bg-[image:var(--image-url)] focus:bg-[image:var(--image-url)] ...'
