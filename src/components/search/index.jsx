import React, { useState } from "react";

const Search = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="search-field">
            <input
                type="text"
                placeholder="Search City"
                className="city-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Search;
