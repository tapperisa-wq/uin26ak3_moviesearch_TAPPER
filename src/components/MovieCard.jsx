import { Link } from "react-router-dom"


export default function MovieCard({movie}){

    const placeholder = "https://placehold.jp/24/ffffff/888888/300x200.png?text=Ingen%20bilde";
    const poster= 
        movie.Poster && movie.Poster !== "N/A"
        ? movie.Poster
        : placeholder 

    return(
        <li>
            <Link to = {`/${movie.imdbID}`}>
            <article>
                
                <img src= {poster}
                alt={movie.Title}
                onError={(e) => {
                    e.target.src = placeholder
                }}/>
                
                <h2>
                    {movie.Title}
                
                </h2>
            <p>{movie.Year}</p>
            </article>
            </Link>
        </li>
    
    )
}

/*  på filmkortet brukte jeg Gemini Ai for å hjelpe meg med å fikse placeholder-bildet, da det første jeg prøvde ikke ville fungere. 
Fikk egentlig beskjed at "movie.Poster && movie.Poster !== "N/A"" var litt overkomplisert men siden ville ikke gjenkjenne placeholderen og faktisk dukke opp på siden min.
Her er lenken til dette: https://gemini.google.com/share/df97dfee02bc 

Jeg brukte opprinnelig ChatGPt for å prøve å løse dette problemet men det funket ikke helt heller: 
https://chatgpt.com/share/69b57ac4-bbe4-800e-9fb1-b0d84bba3d3e*/