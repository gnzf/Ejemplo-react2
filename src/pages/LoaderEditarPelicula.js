
export async function LoaderEditarPelicula({params}) {

   const response = await fetch("http://localhost:3000/peliculas/" + params.id)

    const pelicula = await response.json();

    return { pelicula };

    
}