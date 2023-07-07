import useForecast from "./hooks/useForecast";
import { BG_IMG } from "./utils/constant";
import Search from "./components/Search";

const App = (): JSX.Element => {
  const {
    weather,
    suggestions,
    forecast,
    suggestionData,
    onInputChange,
    onSubmit,
  } = useForecast();

  return (
    <main
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMG})` }}
    >
      {forecast ? (
        "forecast"
      ) : (
        <Search
          weather={weather}
          suggestions={suggestions}
          onInputChange={onInputChange}
          suggestionData={suggestionData}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
// className='hover:bg-[image:var(--image-url)] focus:bg-[image:var(--image-url)] ...'