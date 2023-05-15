import ITodo from "@/interfaces/ITodo";
import { Interface } from "readline";
import useSWR from "swr";

interface IUseTodo {
  Todos: ITodo[];
  isLoading: boolean;
  isError: Error;
}

const fetcher = () => fetch(url).then((res) => res.json());
const url = "https://jsonplaceholder.typicode.com/todos";
const useTodos = (): IUseTodo => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    Todos: data,
    isLoading,
    isError: error,
  };
};
export default useTodos;
