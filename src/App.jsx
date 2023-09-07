import { useState } from 'react'
import menu from './data.js'
import Categories from './components/Categories.jsx'
import Items from './components/Items.jsx'
const DummyCategories = ['all', ...new Set(menu.map((item) => item.category))]
function App() {
  const [menuData, setMenuData] = useState(menu)
  const [categories, setCategories] = useState(DummyCategories)
  const filterCategory = (category) => {
    setMenuData(menu)
    if (category === 'all') {
      return
    }
    setMenuData((menuData) => {
      return menuData.filter((item) => item.category == category)
    })
  }
  return (
    <div className="container">
      <h1 className="title">Our Menu</h1>
      <Categories categories={categories} filterCategory={filterCategory} />
      <Items menuData={menuData} />
    </div>
  )
}

export default App
