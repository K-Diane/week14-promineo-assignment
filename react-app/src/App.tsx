import RecipeList from "./RecipeList/RecipeList";
import { recipes } from "./recipes";
import Sidebar from "./Sidebar";

import "./app.css";

export default function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
