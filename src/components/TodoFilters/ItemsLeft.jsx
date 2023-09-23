const ItemsLeft = ({ todos }) => {
  return (
    <p className="text-gray-400 text-sm">
      { todos.length } items left
    </p>
  )
}

export default ItemsLeft;