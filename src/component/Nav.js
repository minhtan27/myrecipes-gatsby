import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import navData from "../assets/data/navData";
import logo from "../assets/images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nav ${toggle && "nav-display"}`}>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <HiMenuAlt1
            className={`${
              toggle ? "toggle-icon toggle-icon-hide" : "toggle-icon"
            }`}
          />
          <MdOutlineClose
            className={`${
              toggle ? "toggle-icon" : "toggle-icon toggle-icon-hide"
            }`}
          />
        </div>
      </div>
      <ul className="nav-links">
        {navData.map((item) => {
          const { id, name, url } = item;
          return (
            <li key={id}>
              <Link to={url} className="link" activeClassName="nav-link-active">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="nav-contact">
        <Link to="/about">
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
