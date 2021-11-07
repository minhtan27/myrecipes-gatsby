import React from "react";
import Layout from "../../component/Layout";
import { graphql } from "gatsby";

const BlogPage = () => {
  return <div></div>;
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
        }
        subtitle {
          subtitle
        }
      }
    }
  }
`;
