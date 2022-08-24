export const ONE_HOUR = 1 * 60 * 60 * 1000;
export const SIX_HOURS = 6 * ONE_HOUR;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const defaultLocation = {
  latitude: 38.7259284,
  longitude: -9.137382,
};

export enum QueryKeys {
  weatherAndForecastByLatLon = 'weatherAndForecastByLatLon',
  citiesByQuery = 'citiesByQuery',
  userLocation = 'userLocation',
}
