import { useEffect, useState } from 'react'
import './App.css'
import Recipes from './components/Recipes/Recipes'

const API_URL = "https://bambace.github.io/fake-api-recipes/repices.json";
function App() {

  const [recipes, setRecipes] = useState(null);
  const [showFav,setShowFav]= useState(false)




useEffect(()=>{
  callApi();


},[]);


useEffect(()=>{
  if(recipes!==null){
  const favRecipes=recipes.filter(recipe=> recipe.isFavorite)
  .map(recipe=>(recipe.id))

  console.log(favRecipes)

  localStorage.setItem('fav-recipes', JSON.stringify(favRecipes))
}
},[recipes])

function callApi(){
  fetch(API_URL)
  .then(resp =>resp.json())
  .then(data =>{
    //leggi dal localstorage
    const favRecipes=JSON.parse(localStorage.getItem('fav-recipes')) || []
    //utiliziamo useState per popolare lo stato per l'uso globale
    //inserire in setRecipes anche isFavorite
    const newRecipes = data.map(recipe=>(
      {...recipe,  isFavorite:favRecipes.includes(recipe.id)}
    ))
    setRecipes(newRecipes);
  }

  )
}

function handleUpdateRecipe(updatedRecipe){

  const newRecipe = {...updatedRecipe, isFavorite: !updatedRecipe.isFavorite}

  setRecipes(recipes.map(recipe=>(recipe.id === newRecipe.id ? newRecipe : recipe)))
  
}



  return (
    <>
      <h1>Ricette Reactose 🍝</h1>

      <button onClick={()=>setShowFav(!showFav)}>
        {showFav ? 'tutte le ricette': 'visuazlizza le mie preferite'}
      </button>


      {recipes !==null?(
        (showFav ? recipes.filter(recipe=>recipe.isFavorite):recipes)
          .map(recipe=>(
          <Recipes  key={recipe.id}  recipe={recipe} updateRecipe={handleUpdateRecipe}/>
        ))
      )
      :
      (
        <p>Caricamento delle ricette in corso..</p>
      )}

      
    </>
  )
}

export default App
