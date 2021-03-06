import React, { useState } from "react";
import firebase from "../../utils/firebase";

function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  return (
    <div>
      {title}
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="add-btn" onClick={createTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default Form;
