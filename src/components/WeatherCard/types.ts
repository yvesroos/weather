import {
  ForecastApiResponseTransformed,
  WeatherApiResponseTransformed,
} from '../../types';

export interface WeatherCardProps {
  weather?: WeatherApiResponseTransformed;
  forecast?: ForecastApiResponseTransformed;
  isLoading?: boolean;
  error?: string;
  onClose?: () => void;
}
