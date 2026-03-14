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
   
    const placeholder = "https://placehold.jp/24/ffffff/888888/300x200.png?text=Ingen%20bilde"


    return(
        <main>
            <article className="filmkort">
                <h1>{film.Title}</h1>

                <img src= {film.Poster && film.Poster !== "N/A" ? film.Poster : placeholder } 
                alt={film.Title}
                onError={(e) => {e.target.src = placeholder}} />

                <section className="info-holder">
                    <p><strong>År: </strong>{film.Year} </p>
                    <p><strong>Sjanger: </strong>{film.Genre} </p>
                    <p><strong>Regissør: </strong> {film?.Director} </p>
                    <p><strong>Skuespillere: </strong>{film?.Actors}... </p>
                </section>
            </article>
        </main>
    )
}