import React from "react";
import "../stylesheets/Navbar.css";
import fccLogo from "../images/fcc_primary_large.webp";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <a
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="website-logo"
              src={fccLogo}
              alt="Tech Quizzes logo"
              style={{ width: "400px", height: "auto" }} // Adjust the width as needed
            />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
