import React from "react";

const RecipesTagList = ({ recipesTagList = [], setFilterItem, filterItem }) => {
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
        {recipesTagList.map((tag, index) => {
          return (
            <p key={index} onClick={(e) => setFilterItem(e.target.innerText)}>
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RecipesTagList;
