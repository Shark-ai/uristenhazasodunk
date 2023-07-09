import React from "react";

import "../assets/style/NotFound.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <header className="notfound-header"></header>
      <div className="notfound-container">
        <h1>
          Viki <FontAwesomeIcon icon={faHeartCrack} fade size="l" /> Sanyi{" "}
        </h1>
        <p>
          Kérjük menj vissza a{" "}
          <Link
            style={{ color: "#c2a44f", textDecoration: "none" }}
            to={"/main"}
          >
            Főoldalra
          </Link>
        </p>
      </div>
      <footer className="notfound-footer"></footer>
    </>
  );
};

export default NotFound;
