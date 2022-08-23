export type Unit = 'imperial' | 'metric' | 'standard';

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Forecast {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: Main;
  wind: Wind;
}

export type WeatherApiResponse = {
  name: string;
  weather: Weather[];
  main: Main;
  wind: Wind;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
};

export type WeatherApiResponseTransformed = {
  name: string;
  weather: Weather[];
  main: Main;
  wind: Wind;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
};

export interface ForecastApiResponse {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    name: string;
    id: number;
    timezone: number;
  };
  list: Forecast[];
}

export interface ForecastApiResponseTransformed {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    name: string;
    id: number;
    timezone: number;
  };
  list: (Forecast | undefined)[];
}
