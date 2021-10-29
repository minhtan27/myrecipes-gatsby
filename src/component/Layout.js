import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// style css
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
