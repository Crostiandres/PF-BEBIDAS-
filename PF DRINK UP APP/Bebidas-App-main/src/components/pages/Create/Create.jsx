import { useState } from 'react';
import './Create.css'
import axios from "axios"
import NavBar from '../../Navbar/Navbar';
import Toolbar from '../../ToolBar/ToolBar';
 
const Create = () => {
    const [form, setForm] = useState()
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        axios.post("/postProduct", form)
    }

    return(
    <>
      <NavBar/>
      <form>
        <input onChange={handleChange} name="name" placeholder="Nombre"/>
        <select name="type" value={form?.type} onChange={handleChange}>
          <option value="vinos">Vinos</option>
          <option value="licores">Licores</option>
          <option value="tequilas">Tequilas</option>
          <option value="cervezas">Cervezas</option>
          <option value="bebidas">Bebidas</option>
        </select>
        <input onChange={handleChange} name="Variety" placeholder="Variedad"/>
        <input onChange={handleChange} name="brand" placeholder="Marca"/>
        <input onChange={handleChange} name="amount" placeholder="Unidades"/>
        <input onChange={handleChange} name="price" placeholder="Precio"/>
        <input onChange={handleChange} name="stock" placeholder="Stock"/>
        <input onChange={handleChange} name="ableDiscount" placeholder="Boolean"/>
        <input onChange={handleChange} name="percentageDiscount" placeholder="Porcentaje descuento"/>
        <input onChange={handleChange} name="container" placeholder="Contenedor"/>
        <input onChange={handleChange} name="availability" placeholder="Disponibilidad boolean"/>
        <input onChange={handleChange} name="sells" placeholder="Ventas"/>
        <input onChange={handleChange} name="description" placeholder="Descripcion"/>
        <input onChange={handleChange} name="image" placeholder="URL imagen"/>
        <button onClick={submitForm}>Enviar</button>
      </form>
    </>
  )
};

export default Create