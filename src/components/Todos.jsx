import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
     <div className="max-w-2xl mt-2 p-6 bg-white rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">My Todos</h2> */}
      
      <ul className="space-y-4">
        {todos.map((v) => (
          <li
          key={v.id}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{v.text}</span>
            <button
              onClick={() => dispatch(removeTodo(v.id))}
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition duration-200"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
        </>
  );
};

export default Todos;
