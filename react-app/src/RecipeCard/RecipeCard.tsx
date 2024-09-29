import "./RecipeCard.css";

import { Recipe } from "../type";

import { useState } from "react";

// Props interface for the recipe card and one recipe will be displayed
interface RecipeCardProps {
  recipes: Recipe; // single recipe object
  onUpdateRecipe: (recipe: Recipe) => void; // Function to handle update recipe
  onDeleteRecipe: (id: string) => void; // Function to handle delete recipe
}

//card that will show information about a single recipe
const RecipeCard = ({
  recipes,
  onUpdateRecipe,
  onDeleteRecipe,
}: RecipeCardProps) => {
  //state to manage the form (showFrom) to be displayed and also have  updated values for the recipe(name,description, image url)

  const [showForm, setShowForm] = useState<boolean>(false);
  const [name, setName] = useState<string>(recipes.name);
  const [description, setDescription] = useState<string>(recipes.description);
  const [imgUrl, setImgUrl] = useState<string>(recipes.imgUrl);

  // Function to handle the form submission for updating the recipe and prevent default for re submit

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create an updated recipe object

    const updatedRecipe: Recipe = { ...recipes, name, description, imgUrl };
    onUpdateRecipe(updatedRecipe); // Call with the updated recipe
    setShowForm(false); // Close the form after submission
  };

  return (
    // show the recipe image, name and descriprion
    // show the field to input name, description and image URL for the recipe and update the state using the event target value
    //  button to submit the add recipe form and also button to cancel and reset the form
    // button Call delete function with recipe ID

    //className="recipe-card"

    <div className="card mb-4 shadow-sm">
      <img src={recipes.imgUrl} alt={recipes.name} className="recipe-image" />
      <div className="card-body">
        <h3 className="card-title">{recipes.name}</h3>
        <p className="card-text">{recipes.description}</p>

        {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description:</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL:</label>
              <input
                type="text"
                className="form-control"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>

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
