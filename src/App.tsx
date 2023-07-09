import useForecast from "./hooks/useForecast";
import { BG_IMG, CLEAR, CLOUDS, RAIN } from "./utils/constant";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import "./App.css";

const App = (): JSX.Element => {
  const [bg, setBg] = useState(BG_IMG);
  // const [showBackground, setShowBackground] = useState<boolean>(false);

  const {
    weather,
    suggestions,
    forecast,
    suggestionData,
    onInputChange,
    // onSubmit,
    setSuggestions
  } = useForecast();

 
  // useEffect(() => {
  //   if (list?.weather[0].main === "Rain") {
  //     setBg(RAIN);
  //   } else if (list?.weather[0].main === "Clouds") {
  //     setBg(CLOUDS);
  //   } else if (list?.weather[0].main === "Clear") {
  //     setBg(CLEAR);
  //   }

  //   setShowBackground(false); // Trigger fade-out animation
  //   setTimeout(() => {
  //     setShowBackground(true); // Trigger fade-in animation after a short delay
  //   }, 100);
  // }, [forecast]);
  // className={`fade-container ${showBackground ? 'fade-in' : 'fade-out'}`}
  return (
    <main
    className={
      // `fade-container ${showBackground ? "fade-in" : "fade-out"} 
    'h-auto max-h-[500vh] w-full flex items-center justify-center bg-cover bg-center'}
    style={{
      backgroundImage: `url(${bg})`,
    }}
    >
      <Search
        weather={weather}
        suggestions={suggestions}
        onInputChange={onInputChange}
        suggestionData={suggestionData}
        // onSubmit={onSubmit}
        setSuggestions={setSuggestions}
        forecastData={forecast}
      />
 
    </main>
  );
};

export default App;
// className='hover:bg-[image:var(--image-url)] focus:bg-[image:var(--image-url)] ...'
