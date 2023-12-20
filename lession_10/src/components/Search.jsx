import { useState } from "react";
import { COMPUTER_LIST_GROUP } from "../../utils/constans";
import Card from "./Card";

function Search({ data }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const handleInput = (e) => {
    setValueSearch(e.target.value);
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    console.log(newData);
    setDataSearch(newData);
  };
  return (
    <>
      <div className="search-box">
        <input type="search" onInput={handleInput} />
      </div>
      {valueSearch && (
        <div className="search-result-box">
          {dataSearch.map((search) => (
            <Card item={search} />
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
