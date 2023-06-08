import { useNavigate, useParams } from 'react-router';
import './Detail.css'
import { useEffect, useState } from 'react';
import NavBar from '../../Navbar/Navbar';
import axios from "axios"
import { NavLink } from 'react-router-dom';
 
const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/${id}`).then((data) => setProduct(data.data))
    })

    const deleteProduct = () => {
      axios.delete(`/${id}`).then(() => navigate("/tienda"))
    }

  return(
    <>
    <NavBar/>
      <h1>{product?.name}</h1>
      <NavLink to={`/editar/${id}`}><button>Editar</button></NavLink>
      <button onClick={deleteProduct}>Eliminar</button>
    </>
  )
};

export default Detail