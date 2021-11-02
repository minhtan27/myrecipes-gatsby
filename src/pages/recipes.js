import React from "react";
import Layout from "../component/Layout";
import RecipesTagList from "../component/RecipesTagList";
import RecipesItemList from "../component/RecipesItemList";
import { graphql } from "gatsby";
import { useState } from "react";

export const queryAllRecipesContent = graphql`
  {
    allContentfulMrRecipesContent {
      nodes {
        id
        title
        cookTime
        description {
          id
          description
        }
        serving
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            width: 500
          )
        }
        featured
        prepTime
        childContentfulMrRecipesContentContentJsonNode {
          tags
        }
      }
    }
  }
`;

const Recipes = ({
  data: {
    allContentfulMrRecipesContent: { nodes },
  },
}) => {
  const [filterItem, setFilterItem] = useState("");

  let recipesTagList = tagsExtract(nodes);
  let recipesItemList = nodes;

  function tagsExtract(array) {
    let newArr = [];
    array.forEach((item) => {
      item.childContentfulMrRecipesContentContentJsonNode.tags.forEach(
        (element) => {
          if (newArr.indexOf(element) === -1) newArr.push(element);
        }
      );
    });
    return newArr.sort();
  }

  if (filterItem) {
    let regex = new RegExp(filterItem, "i");
    recipesTagList = recipesTagList.filter((tag) => regex.test(tag));
    recipesItemList = recipesItemList.filter((recipe) => {
      let flag = false;
      let recipeTags =
        recipe.childContentfulMrRecipesContentContentJsonNode.tags;
      recipeTags.forEach((item) => {
        if (regex.test(item)) flag = true;
      });
      return flag;
    });
  }

  return (
    <Layout>
      <main className="page">
        <section className="recipes-title">
          <h2>Recipes Catalog</h2>
        </section>
        <section className="recipes-center">
          <RecipesTagList
            recipesTagList={recipesTagList}
            setFilterItem={setFilterItem}
            filterItem={filterItem}
          />
          <RecipesItemList recipesItemList={recipesItemList} />
        </section>
      </main>
    </Layout>
  );
};

export default Recipes;
