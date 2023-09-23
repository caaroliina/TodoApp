import './App.css';
import { useState } from 'react'
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
// import ToDo from './components/Todo/Todo';

function App() {
// eslint-disable-next-line
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "mirar tele",
      completed: true,
    },
    {
      id: 2,
      title: "hacer un to do app",
      completed: false,
    },
    {
      id: 3,
      title: "dormir",
      completed: false,
    }
  ])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo ={
      id: lastId + 1,
      title: title,
      completed: false,
    }

    const todoList = [...todos]
    todoList.push(newTodo)
    setTodo(todoList)
  }

  const handleSetCompleted = (id) => {
    const updateList = todos.map((todo) => {
      if (todo.id === id) {
        console.log('todo')
        return { ...todo, completed: !todo.completed };
      }
      return todo
    })
    setTodo(updateList)
  }

  const handleDelete = (id) =>{
    const updateList = todos.filter(todo => todo.id !== id)
    setTodo(updateList)
  }

  return (
    <div className="min-h-screen h-full flex flex-col items-center bg-gray-900 py-20 px-5">
      <div className='container flex flex-col max-w-xl'>
        <div className='flex items-center flex-col'>
          <h1 className='mt-10 mb-4 text-4xl font-josefin text-white font-bold'> Todo App </h1>
          <TodoInput addTodo={addTodo}/>
        </div>
        <TodoList handleSetCompleted={handleSetCompleted} handleDelete={handleDelete} todos={todos} />
      </div>
    </div>
  );
}

export default App;
