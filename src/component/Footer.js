import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <p>
        &copy; {new Date().getFullYear()} <span>MyRecipes</span> made with{" "}
        <a href="gatsbyjs.com">GatsbyJS</a>
      </p>
    </section>
  );
};

export default Footer;
