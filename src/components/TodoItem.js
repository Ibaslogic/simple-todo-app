import React from "react";

export default function TodoItem({todo, handleChangeProps, deleteTodoProps}) {
  const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through"
    };

    const colorsMapping = {
      'home': "red",
      'work': "blue",
      'important': "yellow",
      "morning": 'green'
    }
    const tagsStyle = {
          width: 'fit-content',
          margin: '10px',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingTop: '5px',
          paddingBottom: '5px',
          borderRadius: '10px'
    }
  const { completed, id, title, tag } = todo;

  return (
    <>
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() =>deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <div style= {{...tagsStyle, background: colorsMapping[tag]}} >{tag}</div>
      </li>
      
    </>
  )
}


