import { useFetch } from '@vueuse/core';

const API_URL: URL = import.meta.env.VITE_API_BASE_URL;

export function useApi() {
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
