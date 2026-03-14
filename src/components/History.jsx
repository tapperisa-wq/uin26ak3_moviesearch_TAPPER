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

/* her brukte jeg AI for å få hjelp til at når jeg trykket på loggkortet og inn i selve loggen at det første alternativet
 også skulle kunne gå an å brukes som et søk, men siden den allerede var selektert fra starten av, 
 så ville den ikke godta det siden handleChange ikke aktiveres og dermed ikke søke med det første alternativet.
https://chatgpt.com/share/69b58488-56f8-800e-bf4a-7f03c59395be
*/ 

