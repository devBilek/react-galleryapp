import React, { useState } from "react";
import "./navBar.css";

export default function NavBar({ onFilterChange }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(search.toLocaleLowerCase());
    setSearch("");
  };
  const handleClear = () => {
    onFilterChange(0);
  };
  return (
    <nav className="navbar navbar-light justify-content-center" id="navBar">
      <form className="form-inline d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          id="searchInput"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          value={search}
          onChange={handleSearch}
        />
        <button className="btn btn-success " id="searchBtn" type="submit">
          Search
        </button>
        <button
          className="btn btn-danger"
          id="clearBtn"
          type="button"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </form>
    </nav>
  );
}
