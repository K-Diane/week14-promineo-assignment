import "./App.tsx";
import { useState } from "react";
import { Recipe } from "./type.ts";

// Define the props interface for sidebar
//will pass the array of Recipes and function to add new recipe
interface SidebarProps {
  recipes: Recipe[];
  onAddRecipe: (newRecipe: Recipe) => void;
}
// sidebar give navigation options whether to add recipe and state to manage the form (showFrom) to be displayed

const sidebar = ({ recipes, onAddRecipe }: SidebarProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  // State to manage the input fields for the new recipe

  const [newRecipeName, setNewRecipeName] = useState("");
  const [newRecipeDescription, setNewRecipeDescription] = useState("");
  const [newRecipeImgUrl, setNewRecipeImgUrl] = useState("");

  // Function to handle the addition of a new recipe using name ,description and image Url

  const handleAddRecipe = () => {
    console.log({
      newRecipeName,
      newRecipeDescription,
      newRecipeImgUrl,
    });

    // check if  that all fields are filled in and the return is in case the validation fails.
    if (!newRecipeName || !newRecipeDescription || !newRecipeImgUrl) {
      alert("Please fill all fields");
      return;
    }

    // Create a new recipe object and it will generate a new ID based on the current recipe count
    // Call the function to add the new recipe
    const newRecipe: Recipe = {
      id: (recipes.length + 1).toString(),
      name: newRecipeName,
      description: newRecipeDescription,
      imgUrl: newRecipeImgUrl,
    };
    onAddRecipe(newRecipe);
    // Hide the form after submission
    setShowForm(false);
    // Reset form fields to their initial state
    resetForm();
  };

  // Function to reset form fields and hide the form
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
        // button to show the form for adding recipe
        // make the field to input name, description and image URL for the recipe and update the state using the event target value
        //  button to submit the add recipe form and also button to cancel and reset the form

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
