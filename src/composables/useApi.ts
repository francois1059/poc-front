import { useFetch } from '@vueuse/core';

// @ts-ignore
const API_URL = config.VITE_API_BASE_URL;

export function useApi(): { fetchApi: <T>(url: string) => Promise<T>; } {
  return {
    fetchApi: async <T>(url: string): Promise<T> => {
      const { data, error } = await useFetch(new URL(url, API_URL).toString()).json<T>();

      if (error.value) {
        throw error.value;
      }

      return data.value!;
    }
  };
}
