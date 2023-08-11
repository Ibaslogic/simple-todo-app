import React, { useState} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
const [todos, setTodos] = useState({
  todos: [
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
      tags: ['work', 'wip'],
      user: 'Beatriz'
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
      tags: ['work', 'wip'],
      user: 'Jonas'
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
      tags: ['work', 'wip'],
      user: 'Joana'
    },
  ],
})
const completedTodos = {todos: todos.todos.filter(todo => todo.completed === true) }

  const handleChange = (id) => {
    setTodos({
      todos: todos.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const delTodo = (id) => {
    setTodos({
      todos: [
        ...todos.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  const addTodoItem = (title, tags, user) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      tags: tags,
      user: user
    };
    setTodos({
      todos: [...todos.todos, newTodo],
    });
  };

    return (
      <><div className="container">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo} />
      </div><div className="container">
          <p>Completed Todos</p>
          <TodosList
            todos={completedTodos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo} />
        </div></>
    );
}
export default TodoContainer;
