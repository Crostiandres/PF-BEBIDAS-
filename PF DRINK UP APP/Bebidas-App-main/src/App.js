import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Tienda from './components/pages/Tienda/Tienda';
import Create from './components/pages/Create/Create';
import Edit from './components/pages/Edit/Edit';
import Detail from './components/pages/Detail/Detail';

function App() {
  return (
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/crear" element={<Create />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />

    </Routes>
  );
}

export default App;
