import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { NavLink } from "react-router-dom";

import "../assets/style/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <NavLink to="https://www.linkedin.com/in/s%C3%A1ndor-harkai-ab9b3126a/">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon__link" />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://github.com/Shark-ai">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://www.facebook.com/Harkai91">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
        <li className="social-icon__item">
          <NavLink to="https://www.instagram.com/alexanderharkai/">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="social-icon__link"
            />
          </NavLink>
        </li>
      </ul>
      <p>
        &copy;<span>{year}</span> Készítette{" "}
        <FontAwesomeIcon icon={faHeart} beat />
        -el: Harkai Sándor [S.hark]ai | All Rights Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
