import React from "react";
import Layout from "../../component/Layout";
import { graphql } from "gatsby";

const Blogs = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <main className="page">
        <h2>Blog Post</h2>
      </main>
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  {
    allContentfulMrRecipesBlog {
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
