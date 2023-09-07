const Category = ({ name, filterCategory }) => {
  return (
    <button
      className="category-btn"
      onClick={() => {
        filterCategory(name)
      }}
    >
      {name}
    </button>
  )
}
export default Category
