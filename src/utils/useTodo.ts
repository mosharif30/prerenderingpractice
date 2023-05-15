import ITodo from "@/interfaces/ITodo";
import useSWR from "swr";

interface TodoFI {
  Todo: ITodo;
  isLoading: boolean;
  isError: Error;
}
const url = (id: number): string =>
  `https://jsonplaceholder.typicode.com/todos/${id}`;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useTodo = (id: number): TodoFI => {
  const { data, error, isLoading } = useSWR(url(id), (url) => fetcher(url));

  return {
    Todo: data,
    isLoading,
    isError: error,
  };
};
export default useTodo;
