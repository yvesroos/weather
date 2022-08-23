import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './tests/utils';

process.env.REACT_APP_PLACES_URL = 'https://places.com';
process.env.REACT_APP_OPEN_WEATHER_MAP_URL = 'https://weather.com';
process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY = '';
process.env.REACT_APP_DEFAULT_LAT = '0';
process.env.REACT_APP_DEFAULT_LON = '0';

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
