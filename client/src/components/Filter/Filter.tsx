import React, { useState } from "react";
import "./Filter.css";
import { FiFilter } from "react-icons/fi";

const FilterItem = () => {
  const [optionValue, setOption] = useState("created-descending");
  return (
    <div className="filter-container">
      <div className="filtering-results">10 Results</div>
      <div className="filter-icon">
        <FiFilter className="the-filter-icon"></FiFilter>
      </div>
      <div className="filter-option">
        <select
          id="filter"
          name="filter"
          value={optionValue}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="price-descending">Price, high to low</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="created-ascending">Date, old to new</option>
          <option value="created-descending">Date, new to old</option>
          <option value="best-selling">Best Selling</option>
        </select>
      </div>
    </div>
  );
};

export default FilterItem;
