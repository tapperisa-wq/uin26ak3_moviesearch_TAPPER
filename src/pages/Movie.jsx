import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Movie(){
    const {movie} = useParams()

    const [film, setFilm] = useState(null)

    
    const apiKey = import.meta.env.VITE_APP_API_KEY
    

    useEffect(() => {
        const fetchMovie = async() => {
            try{
                const response = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apiKey}`)
                const data = await response.json()

                setFilm(data)
            }
            catch(err){
                console.error(err)
            }
        }
        fetchMovie()
    }, [movie])
    
    if (!film) return <p>Laster film</p>
   
    
    return(
        <main>
            <article>
                <h1>{film.Title}</h1>
                {film.Poster !== "N/A" 
                ? <img src={film.Poster} alt={film.Title}/>
                : <p>Ingen bilde</p>
                }
                <p><strong>År: </strong>{film.Year} </p>
                <p><strong>Sjanger: </strong>{film.Genre} </p>
                <p><strong>Regissør: </strong> {film?.Director} </p>
                <p><strong>Skuespillere: </strong>{film?.Actors}... </p>

            </article>
        </main>
    )
}