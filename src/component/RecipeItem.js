import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const RecipeItem = ({ recipe }) => {
  const img = getImage(recipe.image);
  const url = titleToUrl(recipe.title);

  function titleToUrl(text) {
    let regex = /\w+/gi;
    let newText = text.match(regex).join("-").toLowerCase();
    return newText;
  }

  return (
    <div className="r-c-l-item">
      <Link to={`/recipes/${url}`}>
        <GatsbyImage image={img} alt={recipe.title} className="r-c-l-i-image" />
      </Link>
      <h4>
        <Link to={`/recipes/${url}`} className="link">
          {recipe.title}
        </Link>
      </h4>
      <p>
        Prep: {recipe.prepTime} mins || Cook: {recipe.cookTime} mins
      </p>
      <p>Serving: {recipe.serving}</p>
    </div>
  );
};

export default RecipeItem;
