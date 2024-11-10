import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const isDuplicateTodo = (text) => {
    return todos.some((todoItem) => todoItem.text === text);
  };
  const handleTodo = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a todo");
    } else if (isDuplicateTodo(input)) {
      alert("This item already exists in the to-do list!");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleTodo}
      className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-[50%] mx-auto "
    >
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
