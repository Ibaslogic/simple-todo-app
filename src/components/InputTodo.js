import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState()
  const [tag, setTag] = useState([])
  const [user, setUser] = useState()

  const onChange = e => {
    setTitle(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(title, tag, user);
    setTitle('')
  };

    return (
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <p>Task:</p>
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onChange}
        />
        </div>
        <div>
        <p>Tags:</p>
                <input
          type="text"
          className="input-text"
          value={tag}
          name="tag"
          onChange={e => setTag([e.target.value])}
        />
        </div>
        <div>
        <p>Assign your task:</p>
                <input
          type="text"
          className="input-text"
          value={user}
          name="user"
          onChange={e => setUser(e.target.value)}
        />
        </div>
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
}
export default InputTodo;
