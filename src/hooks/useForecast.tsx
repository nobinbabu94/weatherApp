import { useState, useEffect, ChangeEvent } from "react";
import { forecastType, suggestionType } from "../types/index";

const useForecast = () => {
  const [weather, setWeather] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[]>([]);
  const [city, setCity] = useState<suggestionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearch = async (value: string) => {
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
    // console.log(value+'value')
    if (value === "") return;
    setTimeout(() => {
      getSearch(value);
    }, 300);
  };

  useEffect(() => {
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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${item.lat}&lon=${item.lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
      });
  };
  console.log(forecast);

  const onSubmit = () => {
    if (!city) return;

    // console.log(city?.name +'city')
    // console.log(weather +'weather')
    getWeather(city);
  };

  return {
    weather,
    suggestions,
    forecast,
    suggestionData,
    onInputChange,
    onSubmit,city
  };
};

export default useForecast;
