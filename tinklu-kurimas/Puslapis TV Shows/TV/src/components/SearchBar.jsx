import React from "react";
import "./SearchBar.css";
import searchIcon from "./searchico.png";

const SearchBar = () => {
  return (
    <div className="search-box">
      <div className="search-ico">
        <img src={searchIcon} alt="Search Icon" />
      </div>
      <input
        type="text"
        className="search-txt"
        placeholder="Search for TV series"
      />
    </div>
  );
};

export default SearchBar;
