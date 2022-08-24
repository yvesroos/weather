import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { forecast, places, weather } from './fixtures';

export const handlers = [
  rest.get('*/search', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(places));
  }),
  rest.get('*/weather', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(weather));
  }),
  rest.get('*/forecast', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(forecast));
  }),
];

export function renderWithProviders(ui: JSX.Element) {
  const queryClient = new QueryClient({
    logger: {
      log: console.log,
      warn: console.warn,
      error: console.warn,
    },
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}
