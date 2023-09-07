import './Categories.css'
import Category from './Category'
const Categories = ({ categories, filterCategory }) => {
  return (
    <ul className="categories-list">
      {categories.map((cat, index) => {
        return (
          <li className="categories-item" key={index}>
            <Category name={cat} filterCategory={filterCategory} />
          </li>
        )
      })}
    </ul>
  )
}
export default Categories
