import TodoItem from "./TodoItem"
import React from "react"

export default function TodosCompleted({todos, handleChangeProps, deleteTodoProps}) {

    return (
        <div>
            <h1>TodosCompleted</h1>
               {todos && todos.map(todo => (
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

