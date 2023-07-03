import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [selectedOption, todos]);

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
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        return setFilteredTodos(todos.filter((t) => t.isCompleted));
      case "UnCompleted":
        return setFilteredTodos(todos.filter((t) => !t.isCompleted));
      default:
        return setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };
  return (
    <div className="bg-white p-4 border border-gray-300 rounded w-1/2 flex flex-col items-center justify-between ">
      <NavBar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        filterTodos={filterTodos}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm submitTodo={addTodo} />
      <Todolist
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
