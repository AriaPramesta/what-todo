import { useState } from "react";
import { dataTodos } from "../data/todos";

export function Todos() {
  const [todos, setTodos] = useState(dataTodos);

  function removeTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1 className="text-5xl font-semibold">What To Do?</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h2 className="text-2xl my-4">{todo.title}</h2>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
