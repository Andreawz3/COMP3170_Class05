import deleteIcon from "../icons/delete.png";

export default function Item(props) {
  const todo = props.todo;

  function handleDelete() {
    props.remove(todo);
  }

  function handleStatusChange() {
    props.toggleSelected(todo);
  }

  return (
    <li className="todo">
      <div className="todo_details">
        <p>
          <input
            type="checkbox"
            onChange={handleStatusChange}
            value={todo.played}
          />
          <span className="todo_item">
            {todo.played ? <del>{todo.title}</del> : todo.title}
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <img className="delete_button" src={deleteIcon} alt="delete icon" />
      </div>
    </li>
  );
}
