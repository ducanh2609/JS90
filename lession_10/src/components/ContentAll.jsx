import Computer from "./Computer";
import ComputerList from "./ComputerList";
import StoreInfor from "./StoreInfor";

function ContentAll() {
  return (
    <>
      <div>
        <StoreInfor />
      </div>
      <div>
        <ComputerList />
      </div>
      <div>
        <Computer />
      </div>
    </>
  );
}

export default ContentAll;
