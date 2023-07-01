import { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler=(input)=>{
    console.log(input)
  }
  return (
    <div className="bg-white w-1/2 flex flex-col items-center justify-between ">
      <TodoForm addTodoHandler={addTodoHandler} />
      <Todolist />
    </div>
  );
};

export default TodoApp;
