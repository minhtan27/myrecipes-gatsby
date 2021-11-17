import React from "react";
import Layout from "../component/Layout";

import { ImQuotesRight } from "react-icons/im";

const About = () => {
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
        </section>
        <section className="about-contact">
          <h3>Contact for more</h3>
          <form
            action="https://formspree.io/f/mwkadjge"
            className="a-c-form"
            method="POST"
          >
            <div className="a-c-f-row">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="a-c-f-row">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="a-c-f-row">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default About;
