import { todo } from "../data/todo";

export function Todo() {
  return (
    <ul>
      {todo.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
}
