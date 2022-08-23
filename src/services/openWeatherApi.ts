import { ForecastApiResponse, Unit, WeatherApiResponse } from '../types';
import { api } from '../utils/api';

export const fetchWeather = async (
  lat: number | undefined,
  lon: number | undefined,
  units: Unit
) =>
  api.get<WeatherApiResponse>(
    `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  );

export const fetchForecast = async (
  lat: number | undefined,
  lon: number | undefined,
  units: Unit
) =>
  api.get<ForecastApiResponse>(
    `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  );
