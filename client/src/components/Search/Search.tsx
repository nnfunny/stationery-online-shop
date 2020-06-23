import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <FaSearch className="search-icon"></FaSearch>
      <input id="search-box" type="text" name="search" placeholder="Search" />
    </div>
  );
};

export default Search;
