import { useState } from "react";

import RecipeList from "./RecipeList/RecipeList";
import { recipes } from "./recipes";
import Sidebar from "./Sidebar";

import "./app.css";
import { Recipe } from "./type";

export default function App() {
  // Manage state for recipes
  const [recipe, setRecipe] = useState<Recipe[]>(recipes);

  const addRecipe = (newRecipe: Recipe) => {
    console.log(newRecipe);
    setRecipe([...recipe, newRecipe]);
  };

  const deleteRecipe = (id: string) => {
    setRecipe(recipes.filter((recipe) => recipe.id !== id));
  };

  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipe(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

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
