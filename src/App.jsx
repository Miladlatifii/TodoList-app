import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-light text-3xl m-5">Todolist-App - Milad</h1>
      <TodoApp />
    </div>
  );
}

export default App;
