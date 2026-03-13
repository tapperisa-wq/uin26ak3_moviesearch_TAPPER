import { Link } from "react-router-dom"


export default function MovieCard({movie}){
    return(
        <li>
            <Link to = {`/${movie.imdbID}`}>
            <article>
                
                <img src= {movie.Poster !== "N/A" ? movie.Poster : "/no-img.png" } alt={movie.Title}/>
                
                <h2>
                    {movie.Title}
                
                </h2>
            <p>{movie.Year}</p>
            </article>
            </Link>
        </li>
    
    )
}