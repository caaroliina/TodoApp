const Todo = ({ id, title, completed, handleSetCompleted, handleDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center">
        {
          completed 
            ?(
              <span className="p-3 border-solid border bg-green-600 border-gray-500 rounded-full cursor-pointer" onClick={() => handleSetCompleted(id)}></span>
            ) : (
              <span className="p-3 border-solid border bg-red-600 border-gray-500 rounded-full cursor-pointer" onClick={() => handleSetCompleted(id)}></span>
            )
        }
        <p className={`pl-3 ${ completed ? "line-through text-gray-400" : "text-white" }` }>
          {title}
        </p>
      </div>
      <div onClick={() => handleDelete(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in">
          <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
      </div>
      {/* <img src="../../../public/close-icon.svg" alt="close-icon" className="w-5 h-5 cursor-pointer"/> */}
    </div>
  )
}

export default Todo;