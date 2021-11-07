import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <span>
        &copy; {new Date().getFullYear()} <span>MyRecipes</span> made with{" "}
        <a href="gatsbyjs.com">GatsbyJS</a>
      </span>
    </section>
  );
};

export default Footer;
