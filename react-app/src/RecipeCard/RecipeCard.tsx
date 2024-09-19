import "./RecipeCard.css";

import { Recipe } from "../type";

// Props interface for the recipe card and one recipe will be displayed
interface RecipeCardProps {
  recipes: Recipe;
  onUpdateRecipe: (id: string) => void; // Function to handle update recipe
  onDeleteRecipe: (id: string) => void; // Function to handle delete recipe
}

//card that will show information about a single recipe
const RecipeCard = ({
  recipes,
  onUpdateRecipe,
  onDeleteRecipe,
}: RecipeCardProps) => {
  return (
    <div className="recipe-card">
      <img src={recipes.imgUrl} alt={recipes.name} className="recipe-image" />
      <div className="card-body">
        <h3>{recipes.name}</h3>
        <p>{recipes.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteRecipe(recipes.id)}
        >
          Delete Recipe
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => onUpdateRecipe(recipes.id)}
        >
          Update Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
