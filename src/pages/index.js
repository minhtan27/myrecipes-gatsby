import React from "react";
import Layout from "../component/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
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
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                name="email"
                id="email"
                value=""
                onChange={() => {}}
                placeholder="Email"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
