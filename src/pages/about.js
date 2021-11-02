import React from "react";
import Layout from "../component/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ImQuotesRight } from "react-icons/im";
import { graphql } from "gatsby";

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

const About = ({ data }) => {
  const data1 = data.allContentfulMrRecipesContent.nodes[0];
  const data2 = data.allContentfulMrRecipesContent.nodes[1];
  const aboutImg1 = getImage(data1.image);
  const aboutImg2 = getImage(data2.image);
  return (
    <Layout>
      <main className="page">
        <section className="about-intro">
          <h2>My Stories</h2>
          <p>
            Welcome to MyRecipes project. This is the one project that develop
            by me, Tan Minh, to help me learning web development. In order to
            develop this website, I have try to research the content about
            Vietnamese cuisine and recipes. This website will guide you through
            how to make a delicious dishes in Vietnamese style. Hope that you
            enjoy the free content in this website.
          </p>
          <div className="a-i-icon">
            <ImQuotesRight />
          </div>
          <p>
            "Cooking is one of the great gifts you can give to those you
            love"_Ina Garten
          </p>
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
          <p>
            <Link to="/blogs" className="a-r-link">
              Read more on the blog
            </Link>
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default About;
