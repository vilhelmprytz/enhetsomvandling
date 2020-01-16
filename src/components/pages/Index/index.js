import React from "react";

import Button from "../../Button";

import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div className="App">
      <h1>Enhetsomvandling.se</h1>
      <p>Ett enklare sätt att omvandla enheter!</p>
      <Link to="/length">
        <Button>Längd</Button>
      </Link>
    </div>
  );
}

export default IndexPage;
