import React, { useEffect } from "react";
import { BG_IMG } from "./utils/constant";
import { useState, ChangeEvent } from "react";
import { suggestionType } from "./types";
import Search from "./components/Search";

const App = (): JSX.Element => {
  const [weather, setWeather] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[]>([]);
  const [city, setCity] = useState<suggestionType | null>(null);

  const getSearch = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setSuggestions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setWeather(value);

    if (value === "") return;
    setTimeout(() => {
      getSearch(value);
    }, 1000);
  };

  useEffect(() => {
    console.log("city");
    if (city) {
      setWeather(city.name);
      setSuggestions([]);
    }
  }, [city]);

  const suggestionData = (item: suggestionType) => {
    setCity(item);
  };

  const getWeather = (item: suggestionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data, "latitude"));

    console.log(suggestions);
  };

  const onSubmit = () => {
    if (!city) return;
    getWeather(city);
  };

  console.log(city, "city");
  return (
    <>
      <Search
        weather={weather}
        suggestions={suggestions}
        onInputChange={onInputChange}
        suggestionData={suggestionData}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default App;
// className='hover:bg-[image:var(--image-url)] focus:bg-[image:var(--image-url)] ...'
