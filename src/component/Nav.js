import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-logo">
          <h3>MyRecipes</h3>
          <div className="nav-toggle">
            <p>icon</p>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/tags">
              Tags
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="nav-contact">
          <h3>Contact</h3>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
