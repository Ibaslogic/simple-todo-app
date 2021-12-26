import React, { useState } from "react";

export default function InputTodo({addTodoProps}) {

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("home");
  const onChange = e => {
    setTitle(e.target.value);
  };

  const onSelection = (e)=>{
    setTag(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    addTodoProps(title, tag);
    setTitle("");
    setTag('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={onChange}
        />
        <select name="tag" id="cars" onChange={onSelection}>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="important">Important</option>
          <option value="morning">Morning</option>
        </select>
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    </>
  )
}