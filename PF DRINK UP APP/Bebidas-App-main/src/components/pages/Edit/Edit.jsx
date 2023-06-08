import { useEffect, useState } from 'react';
import './Edit.css'
import axios from "axios"
import NavBar from '../../Navbar/Navbar';
import Toolbar from '../../ToolBar/ToolBar';
import { useParams } from 'react-router';
 
const Edit = () => {
    const {id} = useParams()
    const [form, setForm] = useState()
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
      axios.get(`/${id}`).then(data => setForm(data.data))
    },[])

    const submitForm = () => {
        axios.put("/putProduct", form)
    }

    return(
    <>
      <NavBar/>
      <form>
        <input onChange={handleChange} name="name" value={form?.name} placeholder="Nombre"/>
        <select name="type" value={form?.type} onChange={handleChange}>
          <option value="vinos">Vinos</option>
          <option value="licores">Licores</option>
          <option value="tequilas">Tequilas</option>
          <option value="cervezas">Cervezas</option>
          <option value="bebidas">Bebidas</option>
        </select>
        <input onChange={handleChange} name="Variety" value={form?.Variety} placeholder="Variedad"/>
        <input onChange={handleChange} name="brand" value={form?.brand} placeholder="Marca"/>
        <input onChange={handleChange} name="amount" value={form?.amount} placeholder="Unidades"/>
        <input onChange={handleChange} name="price" value={form?.price} placeholder="Precio"/>
        <input onChange={handleChange} name="stock" value={form?.stock} placeholder="Stock"/>
        <input onChange={handleChange} name="ableDiscount" value={form?.ableDiscount} placeholder="Boolean"/>
        <input onChange={handleChange} name="percentageDiscount" value={form?.percentageDiscount} placeholder="Porcentaje descuento"/>
        <input onChange={handleChange} name="container" value={form?.container} placeholder="Contenedor"/>
        <input onChange={handleChange} name="availability" value={form?.availability} placeholder="Disponibilidad boolean"/>
        <input onChange={handleChange} name="sells" value={form?.sells} placeholder="Ventas"/>
        <input onChange={handleChange} name="description" value={form?.description} placeholder="Descripcion"/>
        <input onChange={handleChange} name="image" value={form?.image} placeholder="URL imagen"/>
        <button onClick={submitForm}>Enviar</button>
      </form>
    </>
  )
};

export default Edit