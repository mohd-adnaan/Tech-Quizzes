import React from "react";
import fCClogo from "../images/fcc_primary_large.png";

const FCCLogo: React.FC = () => {
  const logoStyle = {
    width: "400px", 
    height: "auto",
  };

  return <img style={logoStyle} className="fcc-logo" src={fCClogo} alt="Tech Quizzes logo" />;
};

export default React.memo(FCCLogo);
