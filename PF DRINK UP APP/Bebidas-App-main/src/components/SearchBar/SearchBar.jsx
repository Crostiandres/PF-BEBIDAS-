import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.css';
import axios from "axios"

const SearchBar = ({ setSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    axios.get(`/search?search=${searchQuery}`).then(data => setSearchResults(data.data))
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <div className="search-bar-input">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Busca tus bebidas"
          />
          <div className="search-bar-button" onClick={handleSearch}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
