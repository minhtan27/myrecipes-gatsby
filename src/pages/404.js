import React from "react";
import Layout from "../component/Layout";

const Error = () => {
  return (
    <Layout>
      <main>
        <div className="error-section">
          <h1>404</h1>
          <p>Oops! There is no resources</p>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
