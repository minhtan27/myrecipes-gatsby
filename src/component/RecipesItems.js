import React from "react";
import RecipeItem from "./RecipeItem";

const RecipesItems = ({ recipesItems = [] }) => {
  return (
    <div className="r-c-list">
      {recipesItems.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipesItems;
