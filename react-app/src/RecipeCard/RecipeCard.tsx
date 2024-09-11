import "./RecipeCard.css";

import { Recipe } from "../type";

// Props interface for the recipe card and one recipe will be displayed
interface RecipeCardProps {
  recipes: Recipe;
}

//card that will show information about a single recipe
const RecipeCard = ({ recipes }: RecipeCardProps) => {
  return (
    <div className="recipe-card">
      <img src={recipes.imgUrl} alt={recipes.name} className="recipe-image" />
      <div className="card-body">
        <h3>{recipes.name}</h3>
        <p>{recipes.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
