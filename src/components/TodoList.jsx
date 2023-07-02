import Todo from "./Todo";

const Todolist = ({ todos,onComplete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} onComplete={()=>onComplete(todo.id)} />;
    });
  };

  return <div className=" w-full flex justify-center flex-col items-center">{renderTodos()}</div>;
};

export default Todolist;
