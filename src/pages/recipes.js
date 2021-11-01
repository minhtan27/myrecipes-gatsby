import React from "react";
import Layout from "../component/Layout";
import RecipesTagList from "../component/RecipesTagList";
import RecipesItemList from "../component/RecipesItemList";
import { graphql } from "gatsby";

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
      }
    }
    allContentfulMrRecipesContentContentJsonNode {
      nodes {
        id
        tags
      }
    }
  }
`;

const Recipes = ({ data }) => {
  const recipesList = data.allContentfulMrRecipesContent.nodes;
  const recipesTagList =
    data.allContentfulMrRecipesContentContentJsonNode.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="recipes-title">
          <h2>Recipes Catalog</h2>
        </section>
        <section className="recipes-center">
          <RecipesTagList recipesTagList={recipesTagList} />
          <RecipesItemList recipesList={recipesList} />
        </section>
      </main>
    </Layout>
  );
};

export default Recipes;
