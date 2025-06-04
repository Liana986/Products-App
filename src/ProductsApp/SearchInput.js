import React from "react";
import './SearchInput.css';

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      className="search-input"
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Որոնել ըստ անվան, գնի կամ նկարագրության..."
    />
  );
};

export default SearchInput;