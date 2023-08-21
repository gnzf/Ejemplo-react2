import React, { useEffect } from "react";
import { useState } from "react";
import "./AdministradorPelicula.css";
import { useLoaderData } from "react-router-dom";

function AdministradorPelicula() {
  const datosPeli = useLoaderData();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [director, setDirector] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { id, nombre, director, clasificacion } = datosPeli?.pelicula || {};
    setId(id || "");
    setNombre(nombre || "");
    setDirector(director || "");
    setClasificacion(clasificacion || "");
  }, [datosPeli]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        id: parseInt(id),
        nombre,
        director,
        clasificacion,
      });

      var requestOptions = {
        method: datosPeli?.pelicula ? "PUT" : "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const finUrl = datosPeli?.pelicula ? "/" + datosPeli.pelicula.id : "";

      const respuesta = await fetch(
        "http://localhost:3000/peliculas" + finUrl,
        requestOptions
      );
      const data = await respuesta.json();
      if (respuesta.ok) {
        setFormularioEnviado(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }

    /* .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */
  };

  return (
    <div>
      <section>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="idPelicula">Id</label>
          <input
            type="text"
            id="idPelicula"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <label htmlFor="idNombre">Nombre</label>
          <input
            type="text"
            id="idNombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <label htmlFor="idDirector">Director</label>
          <input
            type="text"
            id="idDirector"
            value={director}
            onChange={(e) => {
              setDirector(e.target.value);
            }}
          />
          <label htmlFor="idClasificacion">Clasificacion</label>
          <input
            type="text"
            id="idClasificacion"
            value={clasificacion}
            onChange={(e) => {
              setClasificacion(e.target.value);
            }}
          />
          <button type="submit"> Agregar pelicula </button>
        </form>
        {formularioEnviado && <p>Formulario enviado exitosamente!</p>}
        {error && <p>Succedio un error intente nuevamente!</p>}
      </section>
    </div>
  );
}

export default AdministradorPelicula;
