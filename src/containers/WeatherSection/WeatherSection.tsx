import WeatherCard from '../../components/WeatherCard';
import { useOpenWeatherAndForecastByLatLon } from '../../queries/openWeatherQueries';
import { useGetCurrentLocation } from '../../queries/placeQueries';
import { SimpleLocationCoordinates } from '../../types';

const WeatherSection = ({
  location,
  currentLocation,
  onClose
}: {
  location?: SimpleLocationCoordinates | undefined;
  currentLocation?: boolean;
  onClose?: () => void;
}) => {
  const {
    data: userLocation,
    isLoading: isLoadingLocation,
    isFetching: isFetchingLocation
  } = useGetCurrentLocation(undefined, currentLocation);
  const { data, isLoading, isFetching, error } =
    useOpenWeatherAndForecastByLatLon(
      currentLocation ? userLocation?.latitude : location?.latitude,
      currentLocation ? userLocation?.longitude : location?.longitude
    );

  const loading =
    (currentLocation ? isLoadingLocation || isFetchingLocation : false) ||
    isLoading ||
    isFetching;

  const errorMessage =
    (error as Error)?.message ?? currentLocation
      ? userLocation?.error
      : location?.error;

  return (
    <WeatherCard
      weather={data?.weather}
      forecast={data?.forecast}
      isLoading={loading}
      error={errorMessage}
      onClose={onClose}
    />
  );
};

export default WeatherSection;
