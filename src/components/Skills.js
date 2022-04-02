import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Technologies worked with</h1>
      <div className="skills__container">
        <div>
          <div className="skills__tab">JavaScript</div>
          <div className="skills__tab">TypeScript</div>
          <div className="skills__tab">CSS3</div>
          <div className="skills__tab">React</div>
        </div>
        <div>
          <div className="skills__tab">React Native</div>
          <div className="skills__tab">Node</div>
          <div className="skills__tab">Express</div>
          <div className="skills__tab">Mongo DB</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
