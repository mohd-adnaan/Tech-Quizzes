import React from "react";
import fCClogo from "../images/fcc_primary_large.webp";

const FCCLogo: React.FC = () => {
  return <img className="fcc-logo" src={fCClogo} alt="Tech Quizzes logo" />;
};

export default React.memo(FCCLogo);
