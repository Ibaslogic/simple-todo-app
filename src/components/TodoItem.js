import React from "react";

const TodoItem = (props) => {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through"
    };

    const { completed, id, title, tags, user } = props.todo;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <p>Tags</p>
        <p>{tags.map(tag => tag + ' ')}</p>
        <p>User</p>
        <p>{user}</p>
      </li>
    );
}

export default TodoItem;
