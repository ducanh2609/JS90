import "./button.scss";

export default function Button({ title, children }) {
  function handlerClick() {
    console.log(1);
  }
  return (
    <div>
      <button className="button" onClick={handlerClick}>
        {title}
      </button>
    </div>
  );
}
