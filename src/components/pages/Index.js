import React from "react";

import Button from "../Button";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Icon = styled.div`
  margin: 0.75rem;
  color: white;
  font-size: 1.5rem;

  svg {
    cursor: pointer;
  }
`;

function IndexPage() {
  return (
    <div className="App">
      <h1>Enhetsomvandling.se</h1>
      <p>Ett enklare sätt att omvandla enheter!</p>
      <Link to="/length">
        <Button>Längd</Button>
      </Link>
      <Link to="/area">
        <Button>Area</Button>
      </Link>
      <Link to="/volume">
        <Button>Volym</Button>
      </Link>
      <Icon>
        <FaGithub
          onClick={() => {
            window.open(
              "https://github.com/VilhelmPrytz/enhetsomvandling",
              "_blank"
            );
          }}
        />
      </Icon>
    </div>
  );
}

export default IndexPage;
