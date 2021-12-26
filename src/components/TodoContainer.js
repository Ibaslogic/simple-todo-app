import React, {useState} from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosCompleted from './TodosCompleted'
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {

  const [todos, setTodos] = useState([
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
        tag:"home"
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
        tag:"home"
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
        tag:"home"
      },
    ])
  
    const [todosCompleted, setTodosCompleted] = useState([...todos.filter(todo => todo.completed===true)]);

  const handleCompletedTodos = (todo)=>{
    if(todo.completed){
      setTodosCompleted([...todosCompleted.filter(currTodo => todo.id !== currTodo.id), todo]);
    }else{
      setTodosCompleted([...todosCompleted.filter(currTodo => todo.id !== currTodo.id)]);
    }
  }

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          handleCompletedTodos(todo)
        }
        return todo;
      })
    )
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) =>{
      return todo.id!==id;
    }))
  };

  const addTodoItem = (title, tag) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
      tag: tag
    };
    console.log(newTodo);
    setTodos([...todos, newTodo])
  };

  return (
    <div className="container">
      <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
        />
        <TodosCompleted  todos={todosCompleted}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}/>
    </div>
  )
}
