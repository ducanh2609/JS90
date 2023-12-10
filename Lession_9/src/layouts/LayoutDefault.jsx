import { HEADER_BUTTON } from "../../utils/constant";
import Button from "../plugin/Button";
import "./css/layout-default.scss";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

function LayoutDefault() {
  const path = window.location.pathname;
  console.log(path);
  const classContent = path.includes("weather") ? "weather-content" : "content";
  return (
    <div>
      <div className="header">
        {HEADER_BUTTON.map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.title}`}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <Button title={item.title} />
          </NavLink>
        ))}
      </div>
      <div className={classContent}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutDefault;
