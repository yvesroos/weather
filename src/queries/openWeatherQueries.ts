import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../consts';
import { fetchForecast, fetchWeather } from '../services/openWeatherApi';
import { Unit } from '../types/Weather';
import { transformWeatherAndForecast } from '../utils/transformations';

export const useOpenWeatherAndForecastByLatLon = (
  lat: number | undefined,
  lon: number | undefined,
  units: Unit = 'metric'
) =>
  useQuery(
    [QueryKeys.weatherAndForecastByLatLon, lat, lon, units],
    async () => {
      const [weather, forecast] = await Promise.all([
        fetchWeather(lat, lon, units),
        fetchForecast(lat, lon, units),
      ]);
      return { weather: weather.data, forecast: forecast.data };
    },
    {
      enabled: !!lat && !!lon,
      select: transformWeatherAndForecast,
    }
  );
