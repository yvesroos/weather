import { UseQueryResult } from '@tanstack/react-query';

export const useQueryResult: UseQueryResult<any, any> = {
  data: undefined,
  dataUpdatedAt: 0,
  error: null,
  errorUpdatedAt: 0,
  failureCount: 0,
  isError: false,
  isFetched: false,
  isFetchedAfterMount: false,
  isFetching: false,
  isLoading: false,
  isLoadingError: false,
  isPlaceholderData: false,
  isPreviousData: false,
  isRefetchError: false,
  isRefetching: false,
  isStale: false,
  isSuccess: true,
  status: 'success',
  refetch: jest.fn(),
  remove: jest.fn(),
  errorUpdateCount: 0,
  isPaused: false,
  fetchStatus: 'idle'
};
