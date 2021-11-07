import React from "react";
import Layout from "../../component/Layout";
import RecipesTags from "../../component/RecipesTags";
import RecipesItems from "../../component/RecipesItems";
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

const Recipes = ({ data }) => {
  const {
    allContentfulMrRecipesContent: { nodes },
  } = data;

  const [filterItem, setFilterItem] = useState("");

  let recipesTags = tagsObj(nodes);
  let recipesItems = nodes;

  function tagsObj(nodes, regex = new RegExp("", "i")) {
    let newNodes = {};
    nodes.forEach((item) => {
      item.childContentfulMrRecipesContentContentJsonNode.tags.forEach(
        (tag) => {
          if (regex.test(tag)) {
            newNodes[tag] = (newNodes[tag] || 0) + 1;
          }
        }
      );
    });
    return newNodes;
  }

  if (filterItem) {
    let regex = new RegExp(filterItem, "i");

    recipesTags = tagsObj(nodes, regex);

    recipesItems = recipesItems.filter((recipe) => {
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
          <RecipesTags
            recipesTags={recipesTags}
            setFilterItem={setFilterItem}
            filterItem={filterItem}
          />
          <RecipesItems recipesItems={recipesItems} />
        </section>
      </main>
    </Layout>
  );
};

export default Recipes;
