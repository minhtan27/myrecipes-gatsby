import React from "react";
import RecipeItem from "./RecipeItem";

const RecipesItemList = ({ recipesItemList = [] }) => {
  return (
    <div className="r-c-list">
      {recipesItemList.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipesItemList;
