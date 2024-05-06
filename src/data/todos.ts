export let dataTodos = [
  {
    id: 1,
    title: "Learn something new for at least 1 hour",
    isDone: false,
  },
  {
    id: 2,
    title: "Complete the project task",
    isDone: false,
  },
  {
    id: 3,
    title: "Update all project",
    isDone: true,
  },
  {
    id: 4,
    title: "Learn React",
    isDone: true,
  },
  {
    id: 5,
    title: "Read a book 1 hour a day",
    isDone: false,
  },
];

export function getTodo() {
  return dataTodos;
}

export function addNewTodo({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  const nextId =
    dataTodos.length > 0 ? dataTodos[dataTodos.length - 1].id + 1 : 1;

  const newTodo = { id: nextId, title, isDone };

  const newDataTodos = [...dataTodos, newTodo];

  dataTodos = newDataTodos;
  return dataTodos;
}

export function editTodo(
  idToEdit: number,
  updatedTodo: {
    title: string;
    isDone: boolean;
  }
) {
  const indexToEdit = dataTodos.findIndex((todo) => todo.id === idToEdit);
  if (indexToEdit !== -1) {
    dataTodos[indexToEdit] = {
      ...dataTodos[indexToEdit],
      ...updatedTodo,
    };
  }
}
