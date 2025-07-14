import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

const API_URL='https://bambace.github.io/movies_fake_api/movies.json';

function App() {
 //stato che racchiuda i films
  const [movies, setMovies] = useState(null);

  const [showFavorite, setShowFavorite]= useState(false);


  //effetto collaterale che scatta quando
  //quando il componente App viene montato

useEffect(()=>{
getAPIMovies()
},[])

useEffect(()=>{

  //creiamo un array di film preferiti,
  //filtrando l'array e prendendo solo quelli isFavorite true

if(movies !==null){

  const favouriteIds = movies.filter(movie => movie.isFavorite).map(movie =>  movie.id);

  //console.log(favoriteIds);

  localStorage.setItem('fav-movies',JSON.stringify(favouriteIds))
}

}, [movies])


//metodo che fa la fetch dell'endpoint movies.json
function getAPIMovies(){

  fetch(API_URL)
  .then(response=>response.json())
  .then(data=>{
    // console.log(data);
    // setMovies(data);
    // const newMovies= data.map((movie=>(
    //   {...movie, isFavorite:false}
    // )))
    // console.log(newMovies)
    // setMovies(newMovies)


    //chiediamo al local storage se ha la chiave fav-movies
 const favIds = localStorage.getItem('fav-movies') || []

//creiamo un array ciclando data e per ogni film,
//restituiamo un oggetto identico al film, 
//con isFavourite valorizzato con true o false in base a quello che c'e nel Local Storage
const newMovies = data.map(movie=>(
  {...movie, isFavorite:JSON.parse(favIds).includes(movie.id)

  }
));

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
<br />
    <button onClick={()=>setShowFavorite(!showFavorite)}> {showFavorite ? 'TUTTI': 'PREFERITTI'}</button>


    {/* se movie e null, non dobbiamo ciclare l'array, ma mostriamo un messaggio di caricamento
    altrimenti cicliamo l'array e per ogni elemento mostriamo il componento film */}

    <br />
    <br />
    {movies !== null ? (
      (showFavorite ? movies.filter(movie=>movie.isFavorite):(movies))
      .map(movie => (
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
