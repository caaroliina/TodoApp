import { useState } from "react";

const TodoInput = ({ addTodo }) => {

  const [title, setTitle] = useState("");

  const handleTodo = (event) => {
    if (event.key === "Enter") { 
      addTodo(title);
      setTitle("");
    }
  }
  
  return (
    <div className="my-6 flex">
      <input 
        type="text" 
        placeholder="Agrega una tarea" 
        className="mx-3 pl-3 font-inter py-1 text-lg bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        value={title}
        onChange={event => setTitle(event.target.value)}
        onKeyDown={event => handleTodo(event)}
      />
    </div>
  )
}

export default TodoInput;