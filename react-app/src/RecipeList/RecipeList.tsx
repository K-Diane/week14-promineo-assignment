//import {FC} from 'react';

import RecipeCard from "../RecipeCard/RecipeCard";

import { Recipe } from "../type";

import "./RecipeList.css";

//Props interface for the recipe list and Array of recipes to be displayed and function to update and delete
interface RecipeListProps {
  recipes: Recipe[]; // Array of recipes to be displayed
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
    // look over the array of recipes and render a RecipeCard for each
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id} // unique for each recipe card
          recipes={recipe} // Updated to pass the whole recipe
          onUpdateRecipe={onUpdateRecipe} // Pass the update function
          onDeleteRecipe={onDeleteRecipe} //pass the delete function
        />
      ))}
    </div>
  );
};

export default RecipeList;
