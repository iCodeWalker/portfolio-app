import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <h1>My Education</h1>
      <div className="education__container">
        <div className="education__graduation">
          <h2 className="education__header">Graduation</h2>
          <p className="education__description">
            Did my graduation in B.E. - Electrical and Electronics Engineering
            (EEE) from Birla Institute of Technology (BIT), Mesra.
          </p>
          <p className="education__class__of">Class of 2020.</p>
        </div>

        <div className="education__higher">
          <h2 className="education__header">Higher Education</h2>
          <p className="education__description">
            Did my 12th with PCM stream from M.G.M. Senior Secondary School,
            Bagdona in 2015.
          </p>
        </div>

        <div className="education__secondary">
          <h2 className="education__header">Secondary Education</h2>
          <p className="education__description">
            Did my 10th from M.G.M Senior Secondary School, Bagdona in 2013
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
