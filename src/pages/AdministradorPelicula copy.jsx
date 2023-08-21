import React from 'react'
import { useState } from 'react'
import "./AdministradorPelicula.css"


function BorrarPeli() {
    const [id , setId] = useState("")
    const [formularioEnviado, setFormularioEnviado] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

    const respuesta = await fetch("http://localhost:3000/peliculas/" + id, requestOptions)
    const data = await respuesta.json()
    if(respuesta.ok){
        setFormularioEnviado(true)
    }
            
        } catch (error) {
            setError(true)
        }
        
    /* .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */
     }

  return (
    <div>
      <section>
        <form className='formulario' onSubmit={handleSubmit}> 
            <label htmlFor='idPelicula'>Id</label>
            <input type='text' id="idPelicula" value={id} onChange={(e) => { setId(e.target.value)}}/>
    
            <button type='submit'> peli borrada </button>
        </form>
        {formularioEnviado &&
            <p>Formulario enviado exitosamente!</p>}
        {error &&
            <p>Succedio un error intente nuevamente!</p>}
      </section>
    </div>
  )
}

export default BorrarPeli
