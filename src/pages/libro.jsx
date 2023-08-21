import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'




const libros = [
    {
      imagen: "/header.jpg",
      nombre: "Libro Header",
      precio: "$500",
      id: 1,
    },
    {
      imagen: "/zeus3.jpg",
      nombre: "Libro zeuz",
      precio: "$540",
      id: 2,
    },
  ]

function Libro() {
    const {id} = useParams()
    const [libroSeleccionado, setLibroSeleccionado] = useState(null)

    useEffect(() => {
        console.log(id)
        const libro = libros.filter((x) => x.id == id)[0]
        setLibroSeleccionado(libro)
      }, []);



  return (
    <>
    {libroSeleccionado ? 
        <div>
        <img src={libroSeleccionado.imagen}/>
        <p>{libroSeleccionado.nombre}</p>
        <p>{libroSeleccionado.precio}</p>
      </div> : null} 
    </>
  )
}

export default Libro
