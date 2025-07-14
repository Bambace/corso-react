import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

const API_URL='https://bambace.github.io/movies_fake_api/movies.json';

function App() {
 //stato che racchiuda i films
  const [movies, setMovies] = useState(null);


  //effetto collaterale che scatta quando
  //quando il componente App viene montato

useEffect(()=>{
getAPIMovies()
},[])

//metodo che fa la fetch dell'endpoint movies.json
function getAPIMovies(){

  fetch(API_URL)
  .then(response=>response.json())
  .then(data=>{
    // console.log(data);
    // setMovies(data);
    const newMovies= data.map((movie=>(
      {...movie, isFavorite:false}
    )))
    console.log(newMovies)
    setMovies(newMovies)
  })
}

function onToggleFavorite(id)
{
const updateMovies=movies.map((movie)=>{
  if(movie.id === id){
   return {
      ...movie,
      isFavorite:!movie.isFavorite
    };
    }
    return movie
});

setMovies(updateMovies)
}


  return (
    <>
      
      <h1>ReactFilm Librari 🎥</h1>

    {/* se movie e null, non dobbiamo ciclare l'array, ma mostriamo un messaggio di caricamento
    altrimenti cicliamo l'array e per ogni elemento mostriamo il componento film */}

    <br />
    <br />
    {movies !== null ? (
      movies.map(movie => (
        <Film key={movie.id} movie={movie} onToggleFavorite={onToggleFavorite} />
      ))
    ) : (
      <p>Film in caricamento...</p>
    )}

    {/* <Film></Film>   */}
   
    
    </>
  )
}

export default App
