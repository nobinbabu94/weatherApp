import { useState,  ChangeEvent } from "react";
import { forecastType, suggestionType } from "../types/index";
import { BASE_URL } from "../utils/constant";

const useForecast = () => {
  const [weather, setWeather] = useState<string>("");
  const [suggestions, setSuggestions] = useState<[]>([]);
  // const [city, setCity] = useState<suggestionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearch = async (value: string) => {
    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${value.trim()}&limit=5&lang=en&appid=${
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
    }, 300);
  };

  // useEffect(() => {
  //   if (city) {
  //     setWeather(city.name);
  //     setSuggestions([]);
  //   }
  // }, [city]);

  const suggestionData = (item: suggestionType) => {
    fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${item.lat}&lon=${item.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
        setSuggestions([])
      });  };

  // const getWeather = (item: suggestionType) => {
  //   fetch(
  //     `${BASE_URL}/data/2.5/forecast?lat=${item.lat}&lon=${item.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const forecastData = {
  //         ...data.city,
  //         list: data.list.slice(0, 16),
  //       };

  //       setForecast(forecastData);
  //     });
  // };

  // const onSubmit = () => {
  //   if (!city) return;
  //   getWeather(city);
  // };

  return {
    weather,
    suggestions,
    forecast,
    suggestionData,
    onInputChange,
    setSuggestions
    // onSubmit,
  };
};

export default useForecast;
