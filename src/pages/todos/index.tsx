import useTodos from "@/utils/useTodos";
import router from "next/router";

const Todos = () => {
  const { Todos, isLoading } = useTodos();

  return (
    <>
      {isLoading ? (
        <div>loding</div>
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {Todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <button
                    className="mt-5 bg-indigo-700 text-white ml-5 rounded-md p-2"
                    onClick={() => router.push(`/todos/${todo.id}`)}
                  >
                    More ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Todos;
