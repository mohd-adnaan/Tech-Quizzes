import rpgMenu from "../images/rpg-menu.webp";
import mainCharacter from "../images/main-character.webp";
import fccBackground from "../images/fcc_background.webp";
import Navbar from "./Navbar";
import Button from "./Button";
import HeroSection from "./HeroSection";
import "../stylesheets/HomepageRow.css";
import React, { MouseEventHandler } from "react";
import { ROUNDED_QUESTION_COUNT } from "../constants";

const WelcomePage: React.FC<{ start: MouseEventHandler<HTMLElement> }> = ({
  start
}) => {
  return (
    <>
      <Navbar />
      <HeroSection start={start} />

      <main className="text-center">
        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23", margin: "0" }}
        >
          <div className="col-md-7 content-text-container">
            <h2 className="featurette-heading">Dare to test your knowledge?</h2>
            <p className="lead">
              Brush up on your programming knowledge with{" "}
              {ROUNDED_QUESTION_COUNT}+ questions.
            </p>

            <Button
              handleClick={start}
              text="Quiz"
              isTransparent={false}
              size={""}
            />
          </div>
          <div className="col-md-5 content-img-container">
            <img
              src={mainCharacter}
              className="img-fluid rounded content-section-img"
              id="main-character-img"
              alt="main female character from rpg game"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

    
        <hr className="featurette-divider" id="divider" />


      </main>
    </>
  );
};

export default WelcomePage;
