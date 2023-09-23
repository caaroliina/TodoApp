import TodoFilters from "../TodoFilters/TodoFilters";
import Todo from "../Todo/Todo"

const TodoList = ({ todos, handleSetCompleted, handleDelete }) => {
  return (
    <div className="flex flex-col mt-7 rounded-xl">
      { todos.map((todo) => {
        return (
          <Todo 
            handleSetCompleted={handleSetCompleted}
            handleDelete={handleDelete}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        )
      }) }
      <TodoFilters todos={todos}/>
    </div>
  )
}

export default TodoList;