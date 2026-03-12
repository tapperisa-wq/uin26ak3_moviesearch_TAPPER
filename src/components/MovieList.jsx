import MovieCard from "./MovieCard";

export default function MovieList({movies}){
    return(
        <section>
            <ul>
                {movies?.map((movie,i) => (
                    <MovieCard key = {movie.imdbID + i}
                    movie = {movie}
                    />
                ))}

            </ul>

        </section>
    )
}

// kommentarer fikse opp feilkode encountered two children with the same key