const FilterButton = ({ action, active, filter }) => {
  return (
    <button className={`hover:text-white px-2 cursor-pointer transition-all duration-300 ease-in-out ${(active === filter) ? "text-blue-400" : "text-gray-400"}`}>
      { filter }
    </button>
  )
}

export default FilterButton;