import { VscSearch } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

import { useEffect, useState } from "react";
export default function SearchBox() {
  const [searchBoxButton, setSearchBoxButton] = useState("deactive-search-box");
  function activeSearchBox() {
    setSearchBoxButton("active-search-box");
  }
  function deActiveSearchBox() {
    setSearchBoxButton("deactive-search-box");
  }

  return (
    <div className="container-search-box">
      <input className={searchBoxButton} placeholder="...جستجو کنید"></input>

      <button onClick={() => deActiveSearchBox()} className={searchBoxButton}>
        <VscChromeClose className="vsClose-search-box" />
      </button>
      <button onClick={() => activeSearchBox()} className="search-box-button">
        <VscSearch className="vsSearchbox" />
      </button>
    </div>
  );
}
