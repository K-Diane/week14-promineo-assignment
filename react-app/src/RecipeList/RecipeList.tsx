import RecipeCard from "../RecipeCard/RecipeCard";

import { Recipe } from "../type";

import "./RecipeList.css";

//Props interface for the recipe list and Array of recipes to be displayed
interface RecipeListProps {
  recipes: Recipe[];
}

//recipe list that maps over recipes and give card for each
const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipes={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
