import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function VistaAdmin() {
  return (
    <div>
      <Link to="/admin/agregar">Agregar Pelicula</Link>
      <Link to="/admin/borrar">Borrar Pelicula</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default VistaAdmin
