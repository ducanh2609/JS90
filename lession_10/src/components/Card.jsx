function Card({ item }) {
  return (
    <div className="computer-items">
      <div>
        <img className="computer-img" src={item.image} alt="" />
      </div>
      <div className="computer-text">{item.name}</div>
      <div className="computer-price">{item.price} đ</div>
      <div className="computer-cart">Thêm vào giỏ hàng</div>
    </div>
  );
}

export default Card;
