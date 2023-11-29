function Input({ label, id, type, value, handlerChange, keyInput, errMess }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={(e) => handlerChange(e, keyInput)}
      />
      <span>{errMess}</span>
    </>
  );
}

export default Input;
