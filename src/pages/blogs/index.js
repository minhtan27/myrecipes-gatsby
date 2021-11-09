import React from "react";
import Layout from "../../component/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Blogs = ({ data }) => {
  const {
    allContentfulMrRecipesBlog: { nodes },
  } = data;
  console.log(nodes);

  return (
    <Layout>
      <main className="page">
        <section className="blog-hero">
          <GatsbyImage
            image={getImage(nodes[3].image[0])}
            alt={nodes[3].title}
            className="b-h-img"
          ></GatsbyImage>
          <div className="b-h-text">
            <h2>Welcome to our blog post</h2>
          </div>
        </section>
        <section className="blog-container">
          {nodes.map((item) => {
            const {
              id,
              title,
              subtitle: { subtitle },
            } = item;
            const image = getImage(item.image[0]);
            return (
              <div className="b-c-item" key={id}>
                <Link to={`/blogs/${id}`}>
                  <GatsbyImage
                    image={image}
                    alt={title}
                    className="b-c-i-img"
                  ></GatsbyImage>
                </Link>
                <div className="b-c-i-text">
                  <h3>
                    <Link to={`/blogs/${id}`} className="link">
                      {title}
                    </Link>
                  </h3>

                  <p>{subtitle}</p>
                </div>
              </div>
            );
          })}
        </section>
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
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
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
