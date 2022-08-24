import { defaultLocation } from '../consts';
import { SimpleLocationCoordinates } from '../types';
export const getUserLocation = async (
  options: PositionOptions = {
    enableHighAccuracy: false,
    maximumAge: Infinity,
    timeout: Infinity,
  },
  defaultLocationOnFailed: SimpleLocationCoordinates = {
    latitude:
      defaultLocation.latitude ||
      parseFloat(process.env.REACT_APP_DEFAULT_LAT || '0'),
    longitude:
      defaultLocation.longitude ||
      parseFloat(process.env.REACT_APP_DEFAULT_LON || '0'),
    error: '',
  }
) =>
  new Promise((resolve: (value: SimpleLocationCoordinates) => void) => {
    const { geolocation } = navigator;
    const handleSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      resolve({
        latitude,
        longitude,
        error: undefined,
      });
    };
    const handleError = (error: GeolocationPositionError | Error) => {
      resolve({
        ...defaultLocationOnFailed,
        error: error.message,
      });
    };
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  });
