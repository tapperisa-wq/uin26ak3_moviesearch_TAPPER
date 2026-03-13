export default function History({history, setSearch, getMovies, setFocused}){
    
    const handleChange= (e) => {
        const value = e.target.value
        setSearch(value)
        getMovies(value)
        setFocused(false)
    }

    return(
         <select onChange={handleChange}>
            {history?.map((item, i) => 
            <option key={i} value={item}>{item}</option>)}
         </select>
    )
}