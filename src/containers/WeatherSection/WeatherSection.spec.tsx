import { renderWithProviders } from '../../tests/utils';

import { fireEvent, screen, waitFor } from '@testing-library/react';
import * as placesQueries from '../../queries/placeQueries';
import { useQueryResult, weather } from '../../tests/fixtures';
import WeatherSection from './WeatherSection';

describe('WeatherSection', () => {
  it('should render with location', async () => {
    jest
      .spyOn(placesQueries, 'useGetCurrentLocation')
      .mockImplementation(() => useQueryResult);

    const { findByText } = renderWithProviders(
      <WeatherSection location={{ latitude: 1, longitude: 1 }} />
    );
    const title = await findByText(`${weather.name} / ${weather.sys.country}`);
    expect(title).toBeInTheDocument();
  });
  it('should render with mock user location', async () => {
    const location = { ...useQueryResult, data: { latitude: 1, longitude: 1 } };
    jest
      .spyOn(placesQueries, 'useGetCurrentLocation')
      // @ts-ignore
      .mockImplementation(() => location);

    const { findByText } = renderWithProviders(
      <WeatherSection currentLocation />
    );
    const title = await findByText(`${weather.name} / ${weather.sys.country}`);
    expect(title).toBeInTheDocument();
  });

  it('should render with mock user location with error', async () => {
    const error = 'User denied Geolocation';
    const location = {
      ...useQueryResult,
      data: { latitude: 1, longitude: 1, error },
    };
    jest
      .spyOn(placesQueries, 'useGetCurrentLocation')
      // @ts-ignore
      .mockImplementation(() => location);

    const { findByText } = renderWithProviders(
      <WeatherSection currentLocation />
    );
    const errorMessage = await findByText(error);
    expect(errorMessage).toBeInTheDocument();
  });
});
