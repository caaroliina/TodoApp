import FilterButton from "./FilterButton";
import ItemsLeft from "./ItemsLeft";

const TodoFilters = ({ todos }) => {
  return (
    <div className="flex justify-between items-center">
      <ItemsLeft todos={todos}/>
      <div className="gap-2">
        <FilterButton action={() => {}} active="All" filter="All" />
        <FilterButton action={() => {}} active="All" filter="Activos" />
        <FilterButton action={() => {}} active="All" filter="Completado" />
      </div>
      <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
        Clear completed
        </button>
    </div>
  )
}

export default TodoFilters;