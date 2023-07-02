import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo");
      return;
    }
    props.addTodoHandler(input);

    setInput("");
  };
  return (
    <form action="" onSubmit={submitHandler} className="flex justify-between gap-x-10 mt-3">
      <input placeholder="add todo..." type="text" className="rounded-md text-sm  border-gray-300 focus:ring-0 focus:border-2 focus:border-violet-600 py-0 px-1 w-52" value={input} onChange={changeHandler} />
      <button type="submit" className="bg-violet-600 px-3 py-1 text-white rounded-md ml-2 ">Add</button>
    </form>
  );
};

export default TodoForm;
