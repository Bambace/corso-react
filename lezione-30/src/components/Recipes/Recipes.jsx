import "./Recipes.css";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Recipes({ recipe, updateRecipe }) {
  return (
    <>
      <div className="card-recipe">
        <img src={recipe.photo} alt={recipe.title} />
        <div onClick={()=> updateRecipe(recipe)}>
          {recipe.isFavorite ? (
            <FaStar className="icon" />
          ) : (
            <FaRegStar className="icon" />
          )}
        </div>
        <h2>{recipe.title}</h2>
        <p>di {recipe.author}</p>
        <p>⌛{recipe.prep_time}</p>
        <p>{recipe.cusine_type}</p>

        <h3>Ricetta:</h3>
        <p>{recipe.description}</p>
      </div>
    </>
  );
}
