export type suggestionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type forecastType = {
    name: string
    country: string
    list: [
      {
        dt: number
        main: {
          feels_like: number
          humidity: number
          pressure: number
          temp: number | any
          temp_max: number | any
          temp_min: number | any
        }
        weather: [
          {
            main: string
            icon: string
            description: string
          }
        ]
        wind: {
          speed: number
          gust: number
          deg: number
        }
        clouds: {
          all: number
        }
        pop: number
        visibility: number | any
      }
    ]
    sunrise: number
    sunset: number
  }
