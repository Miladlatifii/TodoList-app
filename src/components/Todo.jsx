const Todo = ({ todo, onComplete }) => {
  return (
    <div key={todo.id} className="flex justify-between items-center w-1/2 mt-4">
      <div
        className={`font-bold cursor-pointer ${
          todo.isCompleted ? "line-through text-gray-300" : ""
        }`}
        onClick={onComplete}
      >
        {todo.text}
      </div>
      <div className="flex justify-between gap-x-4">
        <button className="border border-violet-600 text-violet-600 rounded-md px-3 py-1 text-sm">
          Edit
        </button>
        <button className="border border-red-500 text-red-500 rounded-md px-3 py-1 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
