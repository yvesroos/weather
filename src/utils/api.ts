import axios, { AxiosRequestConfig } from 'axios';

export const api = {
  get: <T>(url: string, params?: AxiosRequestConfig) =>
    axios.get<T>(url, {
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers
      },
      ...params
    }),
  post: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    axios.post<T>(url, data, {
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers
      },
      ...params
    }),
  patch: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
    axios.patch<T>(url, data, {
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers
      },
      ...params
    }),
  delete: <T>(url: string, params?: AxiosRequestConfig) =>
    axios.delete<T>(url, {
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers
      },
      ...params
    })
};
