import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 w-full mb-4"
    />
  );
};

export default SearchBar;
