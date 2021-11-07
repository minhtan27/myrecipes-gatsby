import React from "react";
import { graphql } from "gatsby";
import Layout from "../../component/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RiKnifeFill } from "react-icons/ri";
import { GiMeal, GiFishCooked } from "react-icons/gi";

const RecipeTemplate = ({ data }) => {
  const {
    allContentfulMrRecipesContent: {
      nodes: [recipe],
    },
  } = data;
  console.log(recipe);

  const {
    title,
    description: { description },
    image: { gatsbyImageData },
    prepTime,
    cookTime,
    serving,
    childContentfulMrRecipesContentContentJsonNode: {
      ingredients,
      instructions,
      tags,
      tools,
    },
  } = recipe;

  const imageUrl = getImage(gatsbyImageData);

  console.log(gatsbyImageData);
  return (
    <Layout>
      <main className="page">
        <section className="recipeitem-hero">
          <GatsbyImage
            image={imageUrl}
            alt={title}
            className="ri-h-img"
          ></GatsbyImage>
          <div className="ri-h-text">
            <h2>{title}</h2>
            <div className="ri-h-t-info">
              <div>
                <RiKnifeFill className="ri-h-t-i-icon" />
                <p>
                  <span>prep:</span> {prepTime} mins
                </p>
              </div>
              <div>
                <GiFishCooked className="ri-h-t-i-icon" />
                <p>
                  <span>cook: </span> {cookTime} mins
                </p>
              </div>
              <div>
                <GiMeal className="ri-h-t-i-icon" />
                <p>
                  <span>serving:</span> {serving}
                </p>
              </div>
            </div>
            <p>
              <span>Description:</span> {description}
            </p>
            <div className="ri-h-t-tags">
              <span>tags: </span>
              {tags.map((tag, index) => {
                return <p key={index}>{tag}</p>;
              })}
            </div>
          </div>
        </section>
        <section className="recipeitem-detail">
          <div className="ri-d instructions">
            <h3>instruction</h3>
            {instructions.map((item, index) => {
              return (
                <p key={index}>
                  <span>step {index + 1}: </span>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="ri-d ingredients">
            <h3>ingredients</h3>
            {ingredients.map((item, index) => {
              return (
                <p key={index}>
                  <span>ingredients {index + 1}: </span>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="ri-d tools">
            <h3>tools</h3>
            {tools.map((item, index) => {
              return (
                <p key={index}>
                  <span>tools {index + 1}: </span>
                  {item}
                </p>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query recipeQuery($id: String) {
    allContentfulMrRecipesContent(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        prepTime
        cookTime
        serving
        description {
          description
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        childContentfulMrRecipesContentContentJsonNode {
          ingredients
          instructions
          tags
          tools
        }
      }
    }
  }
`;

export default RecipeTemplate;
