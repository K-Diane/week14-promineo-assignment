import "./App.tsx";
import { useState } from "react";
import { Recipe } from "./type.ts";

// Define the props interface
interface SidebarProps {
  recipes: Recipe[];
  onAddRecipe: (newRecipe: Recipe) => void;
}
// sidebar give navigation options whether to add recipe

const sidebar = ({ recipes, onAddRecipe }: SidebarProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipeImgUrl, setNewRecipeImgUrl] = useState("");

  const handleAddRecipe = () => {
    console.log({
      newRecipeName,
      newRecipeDescription,
      newRecipeImgUrl,
    });
    if (!newRecipeName || !newRecipeDescription || !newRecipeImgUrl) {
      alert("Please fill in all fields");
      return;
    }

    const newRecipe: Recipe = {
      id: (recipes.length + 1).toString(),
      name: newRecipeName,
      description: newRecipeDescription,
      imgUrl: newRecipeImgUrl,
    };
    onAddRecipe(newRecipe);
    setShowForm(false);
    // Reset form fields
    resetForm();
  };
  const resetForm = () => {
    setNewRecipeName("");
    setNewRecipeDescription("");
    setNewRecipeImgUrl("");
    setShowForm(false); // Hide the form
  };

  return (
    <div className="sidebar">
      <h2>Recipe App</h2>
      <button
        className="btn btn-primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add New Recipe"}
      </button>

      {showForm && (
        <div>
          <h3>Add New Recipe</h3>

          <input
            type="text"
            placeholder="Recipe Name"
            value={newRecipeName}
            onChange={(e) => setNewRecipeName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newRecipeDescription}
            onChange={(e) => setNewRecipeDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newRecipeImgUrl}
            onChange={(e) => setNewRecipeImgUrl(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddRecipe}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={resetForm}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleAddRecipe}>
            Add Recipe
          </button>
        </div>
      )}
    </div>
  );
};

export default sidebar;
