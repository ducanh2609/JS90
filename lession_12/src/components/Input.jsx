// import { useInput } from "../../hooks/useInput";

function Input({ label, name, value, onChange }) {
  //   const valueItem = useInput();
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
      <br />
    </>
  );
}

export default Input;
