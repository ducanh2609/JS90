function Card({ image, name, price }) {
  return (
    <div className="computer-items">
      <div>
        <img className="computer-img" src={image} alt="" />
      </div>
      <div className="computer-text">{name}</div>
      <div className="computer-price">{price} đ</div>
      <div className="computer-cart">Thêm vào giỏ hàng</div>
    </div>
  );
}

export default Card;
