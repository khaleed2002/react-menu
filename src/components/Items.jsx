import Item from './Item'
import './Items.css'
const Items = ({ menuData }) => {
  return (
    <ul className="items">
      {menuData.map((item) => {
        return (
          <li key={item.id}>
            <Item {...item} />
          </li>
        )
      })}
    </ul>
  )
}
export default Items
