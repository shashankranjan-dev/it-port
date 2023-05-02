import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer: React.FC = () => {
  const yeareDate: Date = new Date();
  const thisYear: number = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shuvam Halder</h1>

        <ul className="footer__list">
          <li>
            <Link
              to="about"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/shuvam-halder-8084b3157/"
            target={"_blank"}
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/shuvam2722"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/iamsh27/"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://m.facebook.com/shuvam.halder.18?eav=AfbpLbpC35G6gD9sw3LmfsNgwMN522A-QVHOBR1mNNQpyT3ynd8tGhhAsGGh_lfPE9s&paipv=0"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://twitter.com/iamsh2722"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright @ Shuvam{"  "} {thisYear}. {"  "}All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
