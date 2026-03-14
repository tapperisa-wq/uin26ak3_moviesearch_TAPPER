import { useEffect, useState, useRef } from "react"
import History from "../components/History"
import MovieList from "../components/MovieList"

export default function Home(){

    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])

    const searchRef = useRef(null)

    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)

    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
        const handleClickOut = (e) =>{
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setFocused(false)
            }
        }
        document.addEventListener("mousedown", handleClickOut)

        return() => {
            document.removeEventListener("mousedown", handleClickOut) 
        }
    },[])

    // Her brukte jeg ChatGPT for å hjelpe med at loggkortet kan lukke seg når det klikkes på et annet sted på skjermen. 
    // Jeg har dessverre mistet dataen/loggen for denne chatten, så jeg får ikke limet den inn her.Men spesifikt dette med searchRef, 
    // eventlistener, clickOut og mousedown er det jeg fikk mest hjelp til her


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


    const getMovies = async(movie) => {
        try{
            const response = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
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
        
        

        if(!search || search.trim().length <3) {
            alert("Skriv minst 3 tegn for å søke")
        return }

        getMovies(search)

        setFocused(false)

        if (!history.includes(search)){
        setHistory((prev) => [...prev, search])
    }
    setSearch("")
    }

    const clearHistory = () => {
        setHistory([])
        localStorage.removeItem("search")
        
    }

    return(
        <main>
            <h1>Filmsøk</h1>
            <form className="searchbar" onSubmit={handleSubmit} ref={searchRef} >
                <section className="søke-gruppe">
                <label>
                    Søk etter film
                    <input type="search" 
                    placeholder="Harry Potter..." 
                    value={search}
                    onChange={handleChange} 
                    onFocus={()=> setFocused(true)}></input>
                </label>
                    <button type="submit">Søk</button>
                </section>

            {focused && history.length > 0 ? 
            <section className="logcard">
            <History history = {history} setSearch={setSearch} getMovies={getMovies} setFocused={setFocused} />
            {history.length > 0 ? (
                <button type = "button" onClick={clearHistory}>Tøm søkehistorikk</button>
            ) : null}
            </section> 
            : null}
            </form>
            <MovieList movies= {movies} />
        
        </main>
    )
}



//feilmelding getmovies not defined 
// tre tegn, rette opp at tilfeldig api kall når søk-knappen trykkes på
