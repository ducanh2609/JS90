import Button from "../common/Button";
import "./side-bar.scss";

const styleDefault = {
  backgroundColor: "black",
  width: "200px",
};

export default function SideBar({ styleSideBar }) {
  return (
    <div className="side-bar-box" style={styleSideBar || styleDefault}>
      SideBar Box
      <Button title={"Update"} />
    </div>
  );
}
