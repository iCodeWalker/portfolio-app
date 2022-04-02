import React from "react";
import "./Header.css";

function Header({ onHireClick }) {
  const handlePastWork = () => {
    const pastWork = document.querySelector(".myworks");
    pastWork.scrollIntoView({ behavior: "smooth", alignToTop: true });
  };

  const handleSkills = () => {
    const skills = document.querySelector(".skills");
    skills.scrollIntoView({ behavior: "smooth", alignToTop: true });
  };
  return (
    <div className="header">
      <div className="header__left">
        <h1>Vaibhav Kadwey</h1>
        <p onClick={handlePastWork}>Past Works</p>
        <p onClick={handleSkills}>Skills</p>
      </div>
      <div className="header__right">
        <p onClick={onHireClick}>Hire me </p>
      </div>
    </div>
  );
}

export default Header;
