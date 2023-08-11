import React from "react";
import TodoItem from "./TodoItem";


const TodosList = (props) => {

  const { todos } = props.todos
  console.log(todos)
    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        ))}
      </div>
    );
}

export default TodosList;
