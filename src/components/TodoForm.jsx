import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo");
      return;
    }
    props.submitTodo(input);

    setInput("");
  };
  return (
    <form
      action=""
      onSubmit={submitHandler}
      className="flex justify-between mt-3"
    >
      <input
        placeholder={props.edit ? "edit todo..." : "add todo..."}
        type="text"
        className="rounded-md text-sm border-gray-300 focus:ring-0 focus:border-2 focus:border-violet-600 py-2 px-1"
        value={input}
        onChange={changeHandler}
        ref={inputRef}
      />
      <button
        type="submit"
        className={
          props.edit
            ? "px-3 py-1 rounded-md border border-violet-600 ml-2 bg-white text-violet-600"
            : "bg-violet-600 px-3 py-1 text-white rounded-md ml-2"
        }
      >
        {props.edit ? "update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
