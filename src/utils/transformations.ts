import {
  Forecast,
  ForecastApiResponse,
  ForecastApiResponseTransformed,
  PlacesApiResponse,
  PlacesApiResponseTransformed,
  WeatherApiResponse,
  WeatherApiResponseTransformed,
} from '../types';
import { getNext5Days, isSameDay } from './date';

const findSameDayForecast =
  (date: Date) =>
  (forecast: Forecast): boolean => {
    return isSameDay(new Date(forecast.dt_txt), date);
  };

export const transformForecast = (
  forecast: ForecastApiResponse
): ForecastApiResponseTransformed => {
  const next5Days = getNext5Days(new Date());
  const next5DaysForecast = next5Days.map((day) => {
    const forecastDay = forecast.list.find(findSameDayForecast(day));
    return forecastDay;
  });
  return {
    ...forecast,
    list: next5DaysForecast,
  };
};

export const transformWeather = (
  weather: WeatherApiResponse
): WeatherApiResponseTransformed => {
  return weather;
};

export const transformWeatherAndForecast = (data: {
  weather: WeatherApiResponse;
  forecast: ForecastApiResponse;
}): {
  weather: WeatherApiResponseTransformed;
  forecast: ForecastApiResponseTransformed;
} => {
  return {
    weather: transformWeather(data.weather),
    forecast: transformForecast(data.forecast),
  };
};

export const transformPlaces = (
  mapPoints: PlacesApiResponse
): PlacesApiResponseTransformed => {
  return mapPoints.map((point) => {
    const addressLabel = [
      point.address.town,
      point.address.city,
      point.address.state,
      point.address.country,
    ]
      .filter((addressSlice) => !!addressSlice)
      .join(', ');
    return {
      value: {
        id: point.place_id,
        lat: point.lat,
        lon: point.lon,
      },
      label: addressLabel,
    };
  });
};
