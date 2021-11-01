import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipeItem = ({ recipe }) => {
  const img = getImage(recipe.image);
  return (
    <div className="r-c-l-item">
      <GatsbyImage image={img} alt={recipe.title} className="r-c-l-i-image" />
      <h4>{recipe.title}</h4>
      <p>
        Prep: {recipe.prepTime} mins || Cook: {recipe.cookTime} mins
      </p>
      <p>Serving: {recipe.serving}</p>
    </div>
  );
};

export default RecipeItem;
