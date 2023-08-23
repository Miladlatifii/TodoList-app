import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unCompletedTodos, onChange, selectedOption }) => {
  if (!unCompletedTodos)
    return <h2 className="font-bold text-2xl">set your today todos</h2>;
  return (
    <header className="flex flex-col justify-between items-center mb-5">
      <div className="flex justify-center items-center mb-3">
        <span className="rounded-full bg-violet-300 p-2 w-6 h-6 flex items-center justify-center  mr-4">
          {unCompletedTodos}
        </span>
        <h2 className="font-bold text-2xl">are not completed</h2>
      </div>
      <Select
        className="w-full"
        value={selectedOption}
        onChange={onChange}
        options={options}
      />
    </header>
  );
};

export default NavBar;
