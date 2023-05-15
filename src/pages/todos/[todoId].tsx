import ITodo from "@/interfaces/ITodo";
import useTodo from "@/utils/useTodo";
import { useRouter } from "next/router";

const Todo = () => {
  const router = useRouter();
  const todoId = parseInt(router.query.todoId as string, 10);

  const { Todo, isLoading }: { Todo: ITodo; isLoading: boolean } =
    useTodo(todoId);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          {Todo.id}-{Todo.title}
        </div>
      )}
    </>
  );
};

export default Todo;
