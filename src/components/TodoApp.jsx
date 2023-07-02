import { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    // console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-white p-4 border border-gray-300 rounded w-1/2 flex flex-col items-center justify-between ">
      <TodoForm submitTodo={addTodo} />
      <Todolist
        todos={todos}
        onComplete={completeTodo}
        onDelete={removeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
