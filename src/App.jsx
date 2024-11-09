import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Todo App</h1>
      
      <div className="w-full max-w-lg">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default App;
