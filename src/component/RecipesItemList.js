import React from "react";
import RecipeItem from "./RecipeItem";

const RecipesItemList = ({ recipesList = [] }) => {
  return (
    <section className="r-c-list">
      {recipesList.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
};

export default RecipesItemList;
