import React from "react";
import Layout from "../../component/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogPost from "../../component/BlogPost";

const BlogPage = ({ data }) => {
  const {
    allContentfulMrRecipesBlog: {
      nodes: [node],
    },
  } = data;

  const dateTime = (time) => {
    const month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let tempDate = new Date(time);

    return `${
      month[tempDate.getMonth() - 1]
    } ${tempDate.getDate()}, ${tempDate.getFullYear()}`;
  };

  const heroImg = getImage(node.image[0].gatsbyImageData);

  return (
    <Layout>
      <main className="page">
        <section className="blogpost-hero">
          <GatsbyImage image={heroImg} alt="hero-img" className="bp-h-img" />
          <div className="bp-h-text">
            <h2>{node.title}</h2>
            <p>{dateTime(node.date)}</p>
          </div>
        </section>
        <section className="blogpost-center">
          <BlogPost content={node.content}></BlogPost>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query blogPost($id: String) {
    allContentfulMrRecipesBlog(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        date
        content {
          raw
          references {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            contentful_id
          }
        }
        subtitle {
          subtitle
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
