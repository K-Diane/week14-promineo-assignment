import { useState } from "react";

import RecipeList from "./RecipeList/RecipeList";
import { recipes } from "./recipes";
import Sidebar from "./Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";
import { Recipe } from "./type";

export default function App() {
  // Manage state for recipes
  const [recipe, setRecipes] = useState(recipes);

  // Function to add a new recipe
  const addRecipe = () => {
    const newRecipe: Recipe = {
      //IDs are strings
      id: (recipes.length + 1).toString(),
      name: "Chicken Alfredo Pasta",
      description:
        "Grilled chicked served on top of fettucine pasta with creamy parmesan sauce, butter, garlic and a sprinkle of frech parsley",
      imgUrl:
        "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-2-700x769.jpg",

      // Added this for the update functionality
      //starred: false,
    };

    setRecipes([...recipe, newRecipe]);
  };

  // Function to delete a recipe
  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Function to update recipe
  const updateRecipe = (id: string) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id !== id ? recipe : { ...recipe, recipes: recipe }
      )
    );
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar
          onAddRecipe={addRecipe}
          onDeleteRecipe={deleteRecipe}
          onUpdateRecipe={updateRecipe}
        />
      </div>
      <div className="main-content">
        <RecipeList
          recipes={recipes}
          onDeleteRecipe={deleteRecipe}
          onUpdateRecipe={updateRecipe}
        />
      </div>
    </div>
  );
}
