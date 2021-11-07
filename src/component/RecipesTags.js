import React from "react";

const RecipesTags = ({ recipesTags = [], setFilterItem, filterItem }) => {
  return (
    <div className="r-c-tags">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="searchText"
          name="searchText"
          value={filterItem}
          onChange={(e) => setFilterItem(e.target.value)}
          placeholder="Item"
        />
      </form>
      <div className="r-c-t-text">
        {Object.keys(recipesTags)
          .sort()
          .map((tag, index) => {
            return (
              <p key={index} onClick={(e) => setFilterItem(tag)}>
                {tag} ({recipesTags[tag]})
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default RecipesTags;
