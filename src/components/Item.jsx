import './Item.css'
const Item = ({ title, category, price, img, desc }) => {
  return (
    <div className="item">
      <img src={img} alt={title} className="item-img" />
      <div className="item-text">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price}</p>
      </div>
      <p className="item-desc">{desc}</p>
    </div>
  )
}
export default Item
