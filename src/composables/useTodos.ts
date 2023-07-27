import { ref } from "vue";
import { useApi } from "./useApi";
import { useAsyncState } from '@vueuse/core';

interface Todo {
  id: number;
  description: string;
};

const { fetchApi } = useApi();

const TODOS_URL: string = import.meta.env.VITE_API_TODOS_PATH;

export function useTodos() {
  const todos = ref<Todo[]>([]);

  const fetchTodos = () => {
    return fetchApi(TODOS_URL);
  };

  const { isLoading, error, execute } = useAsyncState(
    fetchTodos,
    { todos: [] },
    {
      //immediate: false,
      onSuccess: (result: any) => {
        todos.value.push(...result);
      }
    }
  );

  return {
    todos,
    isLoading,
    error,
    execute,
  };
}