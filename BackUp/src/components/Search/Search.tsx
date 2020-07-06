import React, { SyntheticEvent, useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  function replaceSpace(keyword: string): string {
    return keyword.trim().split(" ").join("-");
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    history.push(`/search/${keyword}`);
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <FaSearch className="search-icon"></FaSearch>
        <input
          id="search-box"
          type="text"
          name="keyword"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(replaceSpace(e.target.value))
          }
        />
      </form>
    </div>
  );
};

export default Search;
