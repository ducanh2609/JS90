function Card({ item }) {
  return (
    <div className="item">
      <img src={item.image} alt="" />
      <p>{item.name}</p>
      <div>{item.price} đ</div>
      <div>
        <button>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

export default Card;
