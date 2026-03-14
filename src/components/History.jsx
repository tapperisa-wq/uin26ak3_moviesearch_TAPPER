export default function History({history, setSearch, getMovies, setFocused}){
    
    const handleChange= (e) => {
        const value = e.target.value

        if (!value) return

        setSearch(value)
        getMovies(value)
        setFocused(false)
    }

    return(
         <select defaultValue="" onChange={handleChange}>
            <option value="" disabled>Velg fra søkehistorikk</option>
            {history?.map((item, i) => 
            <option key={i} value={item}>{item}</option>)}
         </select>
    )
}