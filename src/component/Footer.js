import React from "react";

const Footer = () => {
  return (
    <section class="footer">
      <p>
        &copy; {new Date().getFullYear()} <span>MyRecipes</span> made with{" "}
        <a href="gatsbyjs.com">Gatsby</a>
      </p>
    </section>
  );
};

export default Footer;
