//import {FC} from 'react';

import RecipeCard from "../RecipeCard/RecipeCard";

import { Recipe } from "../type";

import "./RecipeList.css";

//Props interface for the recipe list and Array of recipes to be displayed
interface RecipeListProps {
  recipes: Recipe[];
  onUpdateRecipe: (updatedRecipe: Recipe) => void; // Function to handle update recipe
  onDeleteRecipe: (id: string) => void; // Function to handle delete recipe
}

//recipe list that maps over recipes and give card for each
const RecipeList = ({
  recipes,
  onDeleteRecipe,
  onUpdateRecipe,
}: RecipeListProps) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipes={recipe} // Updated to pass the whole recipe
          onUpdateRecipe={onUpdateRecipe} // Pass the update function
          onDeleteRecipe={onDeleteRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
