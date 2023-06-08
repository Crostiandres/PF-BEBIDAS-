import React, { useState } from 'react';
import axios from "axios"

const Toolbar = ({setSearchResults}) => {
  const [activeFilter, setActiveFilter] = useState()
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    console.log(selectedFilter)
    setActiveFilter(selectedFilter)
    axios.get(`/filtrado?type=${selectedFilter}`).then(data => setSearchResults(data.data))
  };

  return (
    <>
      <div className="toolbar-menu">
        <select value={activeFilter} onChange={handleFilterChange}>
          <option value="">Todos</option>
          <option value="vinos">Vinos</option>
          <option value="licores">Licores</option>
          <option value="tequilas">Tequilas</option>
          <option value="cervezas">Cervezas</option>
          <option value="bebidas">Bebidas</option>
        </select>
      </div>
    </>
  );
};

export default Toolbar;
