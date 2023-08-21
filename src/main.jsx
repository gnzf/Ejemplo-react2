import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Libreria from './pages/Libreria.jsx';
import Libro from './pages/libro.jsx';
import AdministradorPelicula from './pages/AdministradorPelicula.jsx';
import VistaAdmin from './pages/VistaAdmin.jsx';
import BorrarPeli from './pages/BorrarPeli.jsx';
import { LoaderEditarPelicula } from './pages/LoaderEditarPelicula.js';

const router = createBrowserRouter([

{
  path: "/",
  element: <App/>
},
{
  path: "/Libreria",
  element: <Libreria></Libreria>
},
 {
  path: "/Libreria/:id",
  element: <Libro/>
},
{
  path: "/administrar",
  element: <AdministradorPelicula/>,
},
{
  path: "/admin",
  element: <VistaAdmin/>,
  children: [

{
  path: "/admin/agregar",
  element: <AdministradorPelicula/>,
},
{
  path: "/admin/borrar",
  element: <BorrarPeli/>,
},
{
  path: "/admin/editar/:id",
  element: <AdministradorPelicula/>,
  loader: LoaderEditarPelicula,
},
]
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
