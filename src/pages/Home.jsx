import { useEffect, useState } from "react"
import History from "../components/History"
import MovieList from "../components/MovieList"


export default function Home(){

    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)

    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    },[history])

     useEffect(() => {
        const fetchBond = async() => {
            try{
                const response = await fetch(`http://www.omdbapi.com/?s=james%20bond&apikey=${apiKey}`)
                const data = await response.json()
                
            if (data.Search){
                setMovies(data.Search)
            }
            }
            catch(err){
                console.error(err)
            }
        }
        fetchBond()
    }, [])


    const getMovies = async() => {
        try{
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()

            if (data.Search) {
            setMovies(data.Search)}
            else {
                setMovies([])
            }
        }

        catch(err){
            console.error(err);
        }
    }


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        if(search.length <3) return 

        getMovies()

        if (!history.includes(search)){
        setHistory((prev) => [...prev, search])}

    }


    return(
        <main>
            <h1>Filmsøk</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    Søk etter film
                    <input type="search" 
                    placeholder="Harry Potter..." 
                    onChange={handleChange} 
                    onFocus={()=> setFocused(true)} /*onBlur={()=>setFocused(false)}*/></input>
                </label>
            {focused ? <History history = {history} setSearch={setSearch} getMovies={getMovies} /> : null}
            <button onClick={getMovies}>Søk</button>
            </form>
            <MovieList movies= {movies} />
        
        </main>
    )
}

//søkefelt
//søkefelt tar fetch 

//funksjon tøm logg
//local storage remove

//feilmelding getmovies not defined 