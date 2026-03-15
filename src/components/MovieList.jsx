import MovieCard from "./MovieCard";

export default function MovieList({movies}){
    return(
        <section>
            <ul>
                {movies?.map((movie,i) => (
                    <MovieCard key = {movie.imdbID + i}
                    /* bruker +i her fordi uten den fikk jeg feilmelding om at det var to children med samme nøkkel */
                    movie = {movie}
                    />
                ))}

            </ul>

        </section>
    )
}

/*Her brukte jeg ai for ikse opp feilkode "encountered two children with the same key". 
Den kom med forslaget å legge til +i til imdbID for å gjøre den unik, siden IMDB-er kan ha samme id
Jeg mistet dessverre denne lenken til ChatGpt, da jeg med uhell brukte en privat browser som jeg klarte å lukke før jeg lagret det den kom med. */
