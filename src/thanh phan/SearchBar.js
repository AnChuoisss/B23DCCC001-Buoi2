import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 30);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Tìm kiếm hàng hóa..."
      value={query}
      onChange={handleSearch}
      required
      style={{ marginBottom: "3px", padding: "14px", width: "400px" }}
    />
  );
};

export default SearchBar;