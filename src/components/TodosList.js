import React from "react";
import TodoItem from "./TodoItem";


export default function TodosList({todos, handleChangeProps, deleteTodoProps}) {
  return (
    <div>
      {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
    </div>
  )
}