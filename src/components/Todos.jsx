import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [edit, setEdit] = useState({
    isEditing: false,
    id: null,
  });
  const [newText, setNewText] = useState("");

  const isDuplicateTodo = (text) => {
    return todos.some((todoItem) => todoItem.text === text);
  };

  const handleEdit = (todo) => {
    setEdit({ isEditing: true, id: todo.id });
    setNewText(todo.text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (newText.trim() === "") {
      setNewText("");
      alert("Please enter a valid text!");
      return;
    }

    if (isDuplicateTodo(newText)) {
      alert("This item already exists in the to-do list!");
      return;
    }

    dispatch(updateTodo({ id: edit.id, text: newText }));
    setEdit({ isEditing: false, id: null });
    setNewText("");
  };

  return (
    <div className="max-w-2xl mt-2 p-6 bg-white rounded-lg shadow-lg">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm ${
              edit.isEditing && edit.id === todo.id ? "bg-yellow-100" : ""
            }`}
          >
            {edit.isEditing && edit.id === todo.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className={`p-2 border border-gray-300 rounded-md ${
                    newText.trim() === "" ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="submit"
                  className="ml-2 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                >
                  Save
                </button>
              </form>
            ) : (
              <span className="text-gray-800">{todo.text}</span>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition duration-200 ml-2"
            >
              X
            </button>

            {!edit.isEditing && (
              <button
                onClick={() => handleEdit(todo)}
                className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 transition duration-200 ml-2"
              >
                Edit
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;