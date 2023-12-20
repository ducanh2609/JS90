import { useInput } from "../../hooks/useInput";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Input from "./Input";

function Form() {
  const username = useInput();
  const [user, setUser] = useLocalStorage("user");
  return (
    <>
      <div>
        <Input
          label="Username"
          name="username"
          value={username.value}
          onChange={username.onChange}
        />
        {/* <Input label="Password" name="password" /> */}
      </div>
      <button
        onClick={() => {
          setUser(username);
        }}
      >
        Save
      </button>
    </>
  );
}

export default Form;
