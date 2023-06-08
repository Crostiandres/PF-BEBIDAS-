import React, { useEffect, useState } from 'react';
import NavBar from '../../Navbar/Navbar';
import SearchBar from '../../SearchBar/SearchBar';
import './Tienda.css'
import Toolbar from '../../ToolBar/ToolBar';
import axios from "axios"
import { NavLink } from 'react-router-dom';

function Tienda() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("/all").then((data) => setSearchResults(data.data))
  },[])

  return (
    <div>
      <NavBar/>
      <Toolbar setSearchResults={setSearchResults} />
     <div className="Tienda-Search" > <SearchBar setSearchResults={setSearchResults} /></div>
      <div className="product-list">
        {!searchResults.length && <h1>No hay productos disponibles</h1>}
        {searchResults.map((product) => (
          <NavLink to={`/detail/${product.id}`} className="noLink"><div key={product.id} className="product-item">
            <img className="img-item" src={product?.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.details}</p>
          </div></NavLink>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
