import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ONE_HOUR, SIX_HOURS } from './consts';
import App from './containers/App';
import { GlobalStyles } from './globalStyle';
import { theme } from './theme';

const persister = createSyncStoragePersister({
  storage: window.localStorage
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: SIX_HOURS, retry: false, cacheTime: ONE_HOUR }
  }
});

const Bootstrap: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <App />
      </PersistQueryClientProvider>
    </ThemeProvider>
  );
};

export default Bootstrap;
