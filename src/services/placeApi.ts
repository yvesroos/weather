import { PlacesApiResponse } from '../types';
import { api } from '../utils/api';

export const fetchCities = async (query: string) =>
  api.get<PlacesApiResponse>(
    `${process.env.REACT_APP_PLACES_URL}/search?city=${query}&format=json&addressdetails=1`
  );
