import Footer from "../layouts/Footer";
import SideBar from "./Sidebar";
import "./content.scss";

export default function Content() {
  return (
    <div className="content-box">
      <div className="content">
        <SideBar />
        <div className="body"></div>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
