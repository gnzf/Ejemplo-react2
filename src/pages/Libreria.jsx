import React from 'react'
import "./libreria.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const libros = [
  {
    imagen: "../../public/header.jpg",
    nombre: "Libro Header",
    precio: "$500",
    id: 1,
  },
  {
    imagen: "../../public/zeus3.jpg",
    nombre: "Libro zeuz",
    precio: "$540",
    id: 2,
  },
]



function Libreria() {
  return (
    <div className='container-libros'>
       <h1>Esto es un Libreria</h1>
       {libros.map((cadaLibro) => {return(<a><Link to={`/Libreria/${cadaLibro.id}`}>{cadaLibro.nombre}</Link></a>)})}
       <button><Link to={"/"}>Volver al inicio</Link></button>
    </div>
  )
}

export default Libreria
