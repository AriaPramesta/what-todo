import { useState } from "react";
import { dataTodos } from "../data/todos";

export function Todos() {
  const [todos, setTodos] = useState(dataTodos);
  const [newTodo, setNewTodo] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  function searchTodoData(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchKeyword(event.target.value.toLowerCase());
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newTodo.trim() !== "") {
      const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
      const newTodoItem = {
        id: lastId + 1,
        title: newTodo,
        isDone: false,
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  }

  function handleInputChangeTodo(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function removeTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <div className="flex justify-between p-3 bg-black">
        <h1 className="text-3xl font-bold text-white">What To Do?</h1>
        <div className="flex gap-5">
          <label
            htmlFor="searchTodo"
            className="text-white m-auto text-lg font-semibold"
          >
            Search:
          </label>
          <input
            type="text"
            id="searchTodo"
            name="q"
            value={searchKeyword}
            onChange={searchTodoData}
            placeholder="Search todos"
            className="rounded-md text-center focus:bg-black focus:text-white transition-all"
          />
        </div>
      </div>

      <form onSubmit={addTodo}>
        <div className="flex outline outline-2 outline-black p-4 mx-96 mt-5 justify-between">
          <div className="flex gap-5">
            <label htmlFor="title" className="m-auto text-xl font-semibold">
              Add New To Do:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTodo}
              onChange={handleInputChangeTodo}
              placeholder="Enter new thing here"
              className="bg-black rounded text-center text-white focus:bg-white focus:text-black transition-all"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-black text-white font-semibold py-2 px-4 rounded hover:opacity-85"
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex outline outline-2 outline-black p-4 mx-96 my-1 justify-between"
          >
            <h2 className="flex items-center font-semibold text-lg">
              {todo.title}
            </h2>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-black text-white font-semibold py-2 px-4 rounded hover:opacity-85"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
