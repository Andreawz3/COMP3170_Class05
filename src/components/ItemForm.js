import { useState } from "react";
import { nanoid } from "nanoid";

export default function ItemForm(props) {
  const [title, setTitle] = useState("");

  function handleTextChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    const inputValue = document.getElementById("inputText");
    if (inputValue.value === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      const newToDo = {
        title,
        id: nanoid()
      };
      props.addToDo(newToDo);
      setTitle("");
    }
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="inputText"
            type="text"
            onChange={handleTextChange}
            value={title}
            placeholder="Add new task..."
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
