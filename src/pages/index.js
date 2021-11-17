import React from "react";
import Layout from "../component/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const data = graphql`
  {
    allContentfulMrRecipesContent(filter: { featured: { eq: false } }) {
      nodes {
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
        title
      }
    }
  }
`;

const Index = ({ data }) => {
  const data1 = data.allContentfulMrRecipesContent.nodes[0];
  const data2 = data.allContentfulMrRecipesContent.nodes[1];
  const aboutImg1 = getImage(data1.image);
  const aboutImg2 = getImage(data2.image);
  return (
    <Layout>
      <main className="page">
        <section className="home-hero">
          <div>
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="main img"
              placeholder="tracedSVG"
              layout="fullWidth"
              className="h-h-img"
            ></StaticImage>
          </div>
          <div className="h-h-title">
            <h1>My Recipes</h1>
            <p>Receive Vietnamese cuisine recipe everyday to your inbox.</p>
            <form
              className="h-h-form"
              action="https://formspree.io/f/mwkadjge"
              method="POST"
            >
              <input type="email" name="email" id="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
        <section className="about-content">
          <div className="a-c-1">
            <GatsbyImage
              image={aboutImg1}
              alt={data1.title}
              className="a-c-1-img"
            ></GatsbyImage>
            <div className="a-c-1-text">
              <h3>
                How to stop wasting time and start making you best food out of
                table
              </h3>
            </div>
          </div>
          <div className="a-c-2">
            <GatsbyImage
              image={aboutImg2}
              alt={data2.title}
              className="a-c-2-img"
            ></GatsbyImage>
            <div className="a-c-2-text">
              <h3>the lazy man's guide to kitchen</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                nam neque dolore quos esse nobis maxime ratione mollitia id
                impedit.
              </p>
            </div>
          </div>
        </section>
        <section className="about-readmore">
          <span>
            <Link to="/blogs" className="a-r-link">
              Read more on the blog
            </Link>
          </span>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
