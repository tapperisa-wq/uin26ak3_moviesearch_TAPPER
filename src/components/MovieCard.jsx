import { Link } from "react-router-dom"


export default function MovieCard({movie}){
    return(
        <li>
            <Link to = {`/${movie.imdbID}`}>
            <article>
                {movie.Poster !== "N/A" 
                ? <img src={movie.Poster} alt={movie.Title}/>
                : <p>Ingen bilde</p>
                }
                <h2>
                    {movie.Title}
                
                </h2>
            <p>{movie.Year}</p>
            </article>
            </Link>
        </li>
    
    )
}