import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import navData from "../assets/data/navData";
import logo from "../assets/images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav ${toggle && "nav-display"}`}>
      <div className="nav-center">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <HiMenuAlt1
              className={`toggle-icon ${toggle && "toggle-icon-clicked"}`}
            />
          </div>
        </div>
        <ul className="nav-links">
          {navData.map((item) => {
            const { id, name, url } = item;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-contact">
          <span>Contact Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
