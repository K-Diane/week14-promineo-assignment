import "./App.tsx";
import { useState } from "react";

// Define the props interface
interface SidebarProps {
  onAddRecipe: () => void;
  onDeleteRecipe: (id: string) => void;
  onUpdateRecipe: (id: string) => void;
}
//sidebar give navigation options whether to add , remove and update recipe

const sidebar = ({
  onAddRecipe,
  onDeleteRecipe,
  onUpdateRecipe,
}: SidebarProps) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");

  const handleDeleleButton = () => {
    onDeleteRecipe(selectedRecipeId);
    setSelectedRecipeId("");
  };

  const handleUpdateButton = () => {
    onUpdateRecipe(selectedRecipeId);
  };
  return (
    <div className="sidebar">
      <h2>Recipe App</h2>
      <button className="btn btn-primary" onClick={onAddRecipe}>
        Add Recipe
      </button>
      <button className="btn btn-danger" onClick={handleDeleleButton}>
        Delete Recipe
      </button>
      <button className="btn btn-secondary" onClick={handleUpdateButton}>
        Update Recipe
      </button>
    </div>
  );
};

export default sidebar;
