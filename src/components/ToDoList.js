import { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  function addToDo(todo) {
    const updatedTodoList = [...todos, todo];
    setTodos(updatedTodoList);
  }

  function removeSong(item) {
    const updatedTodoList = todos.filter(function (todo) {
      return todo.id !== item.id;
    });

    setTodos(updatedTodoList);
  }

  function toggleSelected(item) {
    const updatedTodoList = todos.map(function (todo) {
      if (todo.id === item.id) {
        todo.played = !todo.played;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodoList);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            remove={removeSong}
            toggleSelected={toggleSelected}
          />
        ))}
      </ul>
      <ItemForm addToDo={addToDo} />
    </div>
  );
}
