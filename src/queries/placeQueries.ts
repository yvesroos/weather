import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../consts';
import { getUserLocation } from '../services/locationService';
import { fetchCities } from '../services/placeApi';
import { transformPlaces } from '../utils/transformations';

export const useCitiesByQuery = (query: string) =>
  useQuery(
    [QueryKeys.citiesByQuery, query],
    async () => {
      const response = await fetchCities(query);
      return response.data;
    },
    {
      enabled: !!query,
      select: transformPlaces
    }
  );

export const useGetCurrentLocation = (
  options?: PositionOptions,
  enabled?: boolean
) =>
  useQuery(
    [QueryKeys.userLocation],
    async () => {
      const response = await getUserLocation(options);
      return response;
    },
    {
      staleTime: 1,
      cacheTime: 1,
      enabled
    }
  );
