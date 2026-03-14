
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route index element = {<Home />} />
      <Route path = "/:movie" element = {<Movie />} />
    </Routes>
  )
}

export default App

/* 
Jeg brukte for det meste Google, en del YouTube-tutorials og LMS Webtricks for å løse denne oppgaven. 

Til tider brukte jeg AI for å hjelpe meg komme videre når jeg satt fast på feil, eller når jeg ikke klarte 
å komme på hva jeg var nødt til å ha med på noen av komponentene. 
Troubleshooting og sjekking av innhold i forhold til oppgaven  var også for det meste ved hjelp av AI


Her er lenker til Ai-chats (noen av dem er inne i de enkelte komponentene for å vise hva som spesifikt ble løst vha. AI):
https://chatgpt.com/share/69b580b8-4e24-800e-af2d-eb7c1ab695fe
https://chatgpt.com/share/69b5821a-c44c-800e-9bac-8e5bf93b180b





*/
