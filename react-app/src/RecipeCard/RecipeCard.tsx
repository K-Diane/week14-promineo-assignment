import "./RecipeCard.css";

import { Recipe } from "../type";

import { useState } from "react";

// Props interface for the recipe card and one recipe will be displayed
interface RecipeCardProps {
  recipes: Recipe;
  onUpdateRecipe: (recipe: Recipe) => void; // Function to handle update recipe
  onDeleteRecipe: (id: string) => void; // Function to handle delete recipe
}

//card that will show information about a single recipe
const RecipeCard = ({
  recipes,
  onUpdateRecipe,
  onDeleteRecipe,
}: RecipeCardProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [name, setName] = useState<string>(recipes.name);
  const [description, setDescription] = useState<string>(recipes.description);
  const [imgUrl, setImgUrl] = useState<string>(recipes.imgUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedRecipe: Recipe = { ...recipes, name, description, imgUrl };
    onUpdateRecipe(updatedRecipe); // Call with the updated recipe
    setShowForm(false); // Close the form after submission
  };

  return (
    <div className="recipe-card">
      <img src={recipes.imgUrl} alt={recipes.name} className="recipe-image" />
      <div className="card-body">
        <h3>{recipes.name}</h3>
        <p>{recipes.description}</p>

        {showForm && (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Image URL:</label>
            <input
              type="text"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </form>
        )}
        <button
          className="btn btn-danger"
          onClick={() => onDeleteRecipe(recipes.id)}
        >
          Delete Recipe
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel Update" : "Update Recipe"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
