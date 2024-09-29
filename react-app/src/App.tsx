import { useState } from "react";

import RecipeList from "./RecipeList/RecipeList";
import { recipes } from "./recipes";
import Sidebar from "./Sidebar";

import "./app.css";
import { Recipe } from "./type";

export default function App() {
  // Manage state for the list of recipes

  const [recipe, setRecipe] = useState<Recipe[]>(recipes);

  // Function to add a new recipe to the list, console log the new added recipe to check for debugging
  //after update the state of the new recipe using setRecipe

  const addRecipe = (newRecipe: Recipe) => {
    console.log(newRecipe);
    setRecipe([...recipe, newRecipe]);
  };

  //function to delete one recipe using and ID, and after update the state to remove that particular recipe with the specified ID

  const deleteRecipe = (id: string) => {
    setRecipe(recipes.filter((recipe) => recipe.id !== id));
  };

  // below function will update the existing recipe and Replace the old recipe with the updated recipe based on ID
  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipe(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  // sidebar will show the option to add a new recipe and main content will show the recipe lists
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar recipes={recipe} onAddRecipe={addRecipe} />
      </div>
      <div className="main-content">
        <RecipeList
          recipes={recipe}
          onDeleteRecipe={deleteRecipe}
          onUpdateRecipe={updateRecipe}
        />
      </div>
    </div>
  );
}
