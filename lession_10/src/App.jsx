import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./layouts/LayoutDefault";
import ContentAll from "./components/ContentAll";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<ContentAll />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
