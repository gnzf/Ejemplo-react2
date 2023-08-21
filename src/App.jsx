import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
       <h1>Esto es una pagina</h1>
       <a></a>
       <a></a>
       <button><Link to={"/Libreria"}>Ir a libreria</Link></button>
    </div>
    </>
  )
}

export default App
